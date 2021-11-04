# -*- coding: utf-8 -*-
#   This work is part of the Core Imaging Library (CIL) developed by CCPi 
#   (Collaborative Computational Project in Tomographic Imaging), with 
#   substantial contributions by UKRI-STFC and University of Manchester.

#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at

#   http://www.apache.org/licenses/LICENSE-2.0

#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.

from cil.optimisation.functions import Function
from cil.framework import BlockDataContainer
from numbers import Number

class BlockFunction(Function):
    
    r""" BlockFunction represents a *separable sum* function :math:`F` defined as
    
    .. math:: F:X_{1}\times X_{2}\cdots\times X_{m} \rightarrow (-\infty, \infty]
    
    where :math:`F` is the separable sum of functions :math:`(f_{i})_{i=1}^{m}`,
    
    .. math:: F(x_{1}, x_{2}, \cdots, x_{m}) = \overset{m}{\underset{i=1}{\sum}}f_{i}(x_{i}), \mbox{ with } f_{i}: X_{i} \rightarrow (-\infty, \infty].
    
    A nice property (due to it's separability structure) is that the proximal operator 
    can be decomposed along the proximal operators of each function :math:`f_{i}`.
    
    .. math:: \mathrm{prox}_{\tau F}(x) = ( \mathrm{prox}_{\tau f_{i}}(x_{i}) )_{i=1}^{m}
    
    In addition, if :math:`\tau := (\tau_{1},\dots,\tau_{m})`, then 
    
    .. math:: \mathrm{prox}_{\tau F}(x) = ( \mathrm{prox}_{\tau_{i} f_{i}}(x_{i}) )_{i=1}^{m}
    
    """
    
    def __init__(self, *functions):
                
        super(BlockFunction, self).__init__()
        self.functions = functions      
        self.length = len(self.functions)

        tmp_gamma_conj = sum(filter(None, [func.gamma_conj for func in functions]))
        if tmp_gamma_conj == 0:
            self.gamma_conj = None
        else:
            self.gamma_conj = tmp_gamma_conj   
       
    @property        
    def L(self):
        # compute Lipschitz constant if possible
        tmp_L = 0
        for func in self.functions:
            if func.L is not None:  
                tmp_L += func.L                
            else:
                tmp_L = None 
                break 
        return tmp_L     

    # @property
    # def gamma_conj(self):
    #     sum_gamma_conj = 0
    #     for func in self.functions:
    #         if func.gamma_conj is not None:
    #             sum_gamma_conj += func.gamma_conj
    #         else:
    #             pass
    #     if sum_gamma_conj==0:
    #         return None
    #     else:
    #         return sum_gamma_conj
            
    @gamma_conj.setter
    def gamma_conj(self, value):
        # call base class setter

        if self.gamma_conj==0:
            if value is not None:
                raise ValueError("No strongly convex functions in this direct sum. `gamma_conj` should be None. {} is passed".format(value))
        if value!=self.gamma_conj:
            raise ValueError("The strongly convex constant of a direct sum of strongly convex or convex functions should agree with the sum of the strongly convex constants of the strongly convex functions. {} is passed. {} is needed".format(value, self.gamma_conj))

        super(BlockFunction, self.__class__).gamma_conj.fset(self, value )           
                                
    def __call__(self, x):
        
        r""" Returns the value of the BlockFunction :math:`F`
        
        .. math:: F(x) = \overset{m}{\underset{i=1}{\sum}}f_{i}(x_{i}), \mbox{ where } x = (x_{1}, x_{2}, \cdots, x_{m}), \quad i = 1,2,\dots,m
                
        Parameter:
            
            x : BlockDataContainer and must have as many rows as self.length

            returns ..math:: \sum(f_i(x_i))
            
        """
        
        if self.length != x.shape[0]:
            raise ValueError('BlockFunction and BlockDataContainer have incompatible size')
        t = 0                
        for i in range(x.shape[0]):
            t += self.functions[i](x.get_item(i))
        return t
    
    def convex_conjugate(self, x):
        
        r"""Returns the value of the convex conjugate of the BlockFunction at :math:`x^{*}`.       
        
            .. math:: F^{*}(x^{*}) = \overset{m}{\underset{i=1}{\sum}}f_{i}^{*}(x^{*}_{i})
            
            Parameter:
            
                x : BlockDataContainer and must have as many rows as self.length            
        
        """     
        
        if self.length != x.shape[0]:
            raise ValueError('BlockFunction and BlockDataContainer have incompatible size')
        t = 0              
        for i in range(x.shape[0]):
            t += self.functions[i].convex_conjugate(x.get_item(i))
        return t  
    
    def proximal(self, x, tau, out = None):
        
        r"""Proximal operator of the BlockFunction at x:
        
            .. math:: \mathrm{prox}_{\tau F}(x) =  (\mathrm{prox}_{\tau f_{i}}(x_{i}))_{i=1}^{m}
            
            Parameter:
            
                x : BlockDataContainer and must have as many rows as self.length            
        """
        
        if self.length != x.shape[0]:
            raise ValueError('BlockFunction and BlockDataContainer have incompatible size')        
        
        if out is None:
                
            out = [None]*self.length
            if isinstance(tau, Number):
                for i in range(self.length):
                    out[i] = self.functions[i].proximal(x.get_item(i), tau)
            else:
                for i in range(self.length):
                    out[i] = self.functions[i].proximal(x.get_item(i), tau.get_item(i))                        
            
            return BlockDataContainer(*out)  
        
        else:
            if isinstance(tau, Number):
                for i in range(self.length):
                    self.functions[i].proximal(x.get_item(i), tau, out[i])
            else:
                for i in range(self.length):
                    self.functions[i].proximal(x.get_item(i), tau.get_item(i), out[i])
            
            
    
    def gradient(self, x, out=None):
        
        r"""Returns the value of the gradient of the BlockFunction function at x.
        
        .. math:: F'(x) = [f_{1}'(x_{1}), ... , f_{m}'(x_{m})]        
        
        Parameter:
            
            x : BlockDataContainer and must have as many rows as self.length
                
        """        
        
        if self.length != x.shape[0]:
            raise ValueError('BlockFunction and BlockDataContainer have incompatible size')        
        
        out = [None]*self.length
        for i in range(self.length):
            out[i] = self.functions[i].gradient(x.get_item(i))
            
        return  BlockDataContainer(*out)     

    def proximal_conjugate(self, x, tau, out = None):
        
        r"""Proximal operator of the convex conjugate of BlockFunction at x:
        
            .. math:: \mathrm{prox}_{\tau F^{*}}(x) = (\mathrm{prox}_{\tau f^{*}_{i}}(x^{*}_{i}))_{i=1}^{m}
            
            Parameter:
            
                x : BlockDataContainer and must have as many rows as self.length            
        """

        if self.length != x.shape[0]:
            raise ValueError('BlockFunction and BlockDataContainer have incompatible size')

        if out is not None:
            if isinstance(tau, Number):
                for i in range(self.length):
                    self.functions[i].proximal_conjugate(x.get_item(i), tau, out=out.get_item(i))
            else:
                for i in range(self.length):
                    self.functions[i].proximal_conjugate(x.get_item(i), tau.get_item(i),out=out.get_item(i))
            
        else:
                
            out = [None]*self.length
            if isinstance(tau, Number):
                for i in range(self.length):
                    out[i] = self.functions[i].proximal_conjugate(x.get_item(i), tau)
            else:
                for i in range(self.length):
                    out[i] = self.functions[i].proximal_conjugate(x.get_item(i), tau.get_item(i))
            
            return BlockDataContainer(*out)
        
    def __getitem__(self, row):
        return self.functions[row]
        
    def __rmul__(self, other):
        '''Define multiplication with a scalar
        
        :param other: number
        Returns a new `BlockFunction`_ containing the product of the scalar with all the functions in the block
        '''
        if not isinstance(other, Number):
            raise NotImplemented
        return BlockFunction( * [ other * el for el in self.functions] )

                            
    
    
if __name__ == "__main__":

    from cil.framework import ImageGeometry
    from cil.optimisation.functions import L1Norm, L2NormSquared

    f = BlockFunction(L2NormSquared())

    # print(f.gamma_conj)
    # f.gamma_conj = None

    f = BlockFunction(L1Norm(), L1Norm()) 

    print(f.gamma_conj)    
    # f.gamma_conj = None



    
