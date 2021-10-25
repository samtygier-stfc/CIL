Search.setIndex({docnames:["astra","developer_guide","framework","index","io","optimisation","plugins","processors","utilities"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.index":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["astra.rst","developer_guide.rst","framework.rst","index.rst","io.rst","optimisation.rst","plugins.rst","processors.rst","utilities.rst"],objects:{"cil.framework":{AcquisitionData:[2,0,1,""],AcquisitionGeometry:[2,0,1,""],BlockDataContainer:[5,0,1,""],BlockGeometry:[2,0,1,""],DataContainer:[2,0,1,""],DataProcessor:[2,0,1,""],ImageData:[2,0,1,""],ImageGeometry:[2,0,1,""],VectorData:[2,0,1,""],VectorGeometry:[2,0,1,""]},"cil.framework.AcquisitionData":{get_slice:[2,1,1,""],subset:[2,1,1,""]},"cil.framework.AcquisitionGeometry":{allocate:[2,1,1,""],clone:[2,1,1,""],copy:[2,1,1,""],create_Cone2D:[2,1,1,""],create_Cone3D:[2,1,1,""],create_Parallel2D:[2,1,1,""],create_Parallel3D:[2,1,1,""],get_ImageGeometry:[2,1,1,""],get_centre_slice:[2,1,1,""],get_slice:[2,1,1,""],set_angles:[2,1,1,""],set_channels:[2,1,1,""],set_labels:[2,1,1,""],set_panel:[2,1,1,""],subset:[2,1,1,""]},"cil.framework.BlockDataContainer":{__iadd__:[5,1,1,""],__idiv__:[5,1,1,""],__imul__:[5,1,1,""],__isub__:[5,1,1,""],__iter__:[5,1,1,""],__itruediv__:[5,1,1,""],__neg__:[5,1,1,""],__radd__:[5,1,1,""],__rdiv__:[5,1,1,""],__rmul__:[5,1,1,""],__rpow__:[5,1,1,""],__rsub__:[5,1,1,""],__rtruediv__:[5,1,1,""],__weakref__:[5,2,1,""],add:[5,1,1,""],axpby:[5,1,1,""],binary_operations:[5,1,1,""],copy:[5,1,1,""],divide:[5,1,1,""],is_compatible:[5,1,1,""],maximum:[5,1,1,""],minimum:[5,1,1,""],multiply:[5,1,1,""],next:[5,1,1,""],power:[5,1,1,""],subtract:[5,1,1,""],unary_operations:[5,1,1,""]},"cil.framework.BlockGeometry":{__weakref__:[2,2,1,""],allocate:[2,1,1,""],get_item:[2,1,1,""]},"cil.framework.DataContainer":{__eq__:[2,1,1,""],__ge__:[2,1,1,""],__gt__:[2,1,1,""],__init__:[2,1,1,""],__le__:[2,1,1,""],__lt__:[2,1,1,""],__ne__:[2,1,1,""],__neg__:[2,1,1,""],__str__:[2,1,1,""],__weakref__:[2,2,1,""],as_array:[2,1,1,""],axpby:[2,1,1,""],clone:[2,1,1,""],copy:[2,1,1,""],dot:[2,1,1,""],dtype:[2,1,1,""],exp:[2,1,1,""],fill:[2,1,1,""],get_data_axes_order:[2,1,1,""],get_slice:[2,1,1,""],log:[2,1,1,""],max:[2,1,1,""],mean:[2,1,1,""],min:[2,1,1,""],norm:[2,1,1,""],number_of_dimensions:[2,1,1,""],reorder:[2,1,1,""],shape:[2,1,1,""],size:[2,1,1,""],squared_norm:[2,1,1,""],subset:[2,1,1,""]},"cil.framework.ImageData":{get_slice:[2,1,1,""],subset:[2,1,1,""]},"cil.framework.ImageGeometry":{allocate:[2,1,1,""],clone:[2,1,1,""],copy:[2,1,1,""],get_slice:[2,1,1,""],subset:[2,1,1,""]},"cil.framework.VectorGeometry":{allocate:[2,1,1,""],clone:[2,1,1,""],copy:[2,1,1,""]},"cil.io":{NEXUSDataReader:[4,0,1,""],NEXUSDataWriter:[4,0,1,""],NikonDataReader:[4,0,1,""],TIFFStackReader:[4,0,1,""],TIFFWriter:[4,0,1,""],TXRMDataReader:[4,0,1,""]},"cil.io.NEXUSDataReader":{__init__:[4,1,1,""],__weakref__:[4,2,1,""],get_geometry:[4,1,1,""],load_data:[4,1,1,""]},"cil.io.NEXUSDataWriter":{__init__:[4,1,1,""],__weakref__:[4,2,1,""]},"cil.io.NikonDataReader":{__init__:[4,1,1,""],__weakref__:[4,2,1,""],get_geometry:[4,1,1,""],get_roi:[4,1,1,""],load_projections:[4,1,1,""],read:[4,1,1,""]},"cil.io.TIFFStackReader":{__init__:[4,1,1,""],__weakref__:[4,2,1,""],read:[4,1,1,""],read_as_AcquisitionData:[4,1,1,""],read_as_ImageData:[4,1,1,""],set_up:[4,1,1,""]},"cil.io.TIFFWriter":{__init__:[4,1,1,""],__weakref__:[4,2,1,""]},"cil.io.TXRMDataReader":{__init__:[4,1,1,""],__weakref__:[4,2,1,""],get_geometry:[4,1,1,""],get_metadata:[4,1,1,""],load_projections:[4,1,1,""],read:[4,1,1,""],set_up:[4,1,1,""]},"cil.optimisation.algorithms":{Algorithm:[5,0,1,""],CGLS:[5,0,1,""],FISTA:[5,0,1,""],GD:[5,0,1,""],LADMM:[5,0,1,""],PDHG:[5,0,1,""],SIRT:[5,0,1,""],SPDHG:[5,0,1,""]},"cil.optimisation.algorithms.Algorithm":{_Algorithm__set_up_logger:[5,1,1,""],__init__:[5,1,1,""],__iter__:[5,1,1,""],__next__:[5,1,1,""],__weakref__:[5,2,1,""],get_last_loss:[5,1,1,""],get_last_objective:[5,1,1,""],get_output:[5,1,1,""],iterations:[5,1,1,""],loss:[5,1,1,""],max_iteration:[5,1,1,""],max_iteration_stop_cryterion:[5,1,1,""],next:[5,1,1,""],objective:[5,1,1,""],run:[5,1,1,""],set_up:[5,1,1,""],should_stop:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""],update_previous_solution:[5,1,1,""],verbose_output:[5,1,1,""]},"cil.optimisation.algorithms.CGLS":{flag:[5,1,1,""],set_up:[5,1,1,""],should_stop:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""]},"cil.optimisation.algorithms.FISTA":{__init__:[5,1,1,""],set_up:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""]},"cil.optimisation.algorithms.GD":{armijo_rule:[5,1,1,""],set_up:[5,1,1,""],should_stop:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""]},"cil.optimisation.algorithms.LADMM":{set_up:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""]},"cil.optimisation.algorithms.PDHG":{get_output:[5,1,1,""],objective:[5,1,1,""],set_up:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""],update_previous_solution:[5,1,1,""]},"cil.optimisation.algorithms.SIRT":{set_up:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""]},"cil.optimisation.algorithms.SPDHG":{objective:[5,1,1,""],set_up:[5,1,1,""],update:[5,1,1,""],update_objective:[5,1,1,""]},"cil.optimisation.functions":{BlockFunction:[5,0,1,""],ConstantFunction:[5,0,1,""],Function:[5,0,1,""],IndicatorBox:[5,0,1,""],KullbackLeibler:[5,0,1,""],L1Norm:[5,0,1,""],L2NormSquared:[5,0,1,""],LeastSquares:[5,0,1,""],MixedL21Norm:[5,0,1,""],OperatorCompositionFunction:[5,0,1,""],Rosenbrock:[5,0,1,""],ScaledFunction:[5,0,1,""],SmoothMixedL21Norm:[5,0,1,""],SumFunction:[5,0,1,""],SumScalarFunction:[5,0,1,""],TotalVariation:[5,0,1,""],TranslateFunction:[5,0,1,""],WeightedL2NormSquared:[5,0,1,""],ZeroFunction:[5,0,1,""]},"cil.optimisation.functions.BlockFunction":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""],proximal_conjugate:[5,1,1,""]},"cil.optimisation.functions.ConstantFunction":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.Function":{L:[5,1,1,""],__add__:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],__radd__:[5,1,1,""],__rmul__:[5,1,1,""],__sub__:[5,1,1,""],__weakref__:[5,2,1,""],centered_at:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""],proximal_conjugate:[5,1,1,""]},"cil.optimisation.functions.IndicatorBox":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""],proximal_conjugate:[5,1,1,""]},"cil.optimisation.functions.KullbackLeibler":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],log:[5,1,1,""],proximal:[5,1,1,""],proximal_conjugate:[5,1,1,""]},"cil.optimisation.functions.L1Norm":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.L2NormSquared":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.LeastSquares":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],gradient:[5,1,1,""]},"cil.optimisation.functions.MixedL21Norm":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.OperatorCompositionFunction":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],gradient:[5,1,1,""]},"cil.optimisation.functions.Rosenbrock":{__call__:[5,1,1,""],__init__:[5,1,1,""],gradient:[5,1,1,""]},"cil.optimisation.functions.ScaledFunction":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""],proximal_conjugate:[5,1,1,""]},"cil.optimisation.functions.SmoothMixedL21Norm":{__call__:[5,1,1,""],__init__:[5,1,1,""],gradient:[5,1,1,""]},"cil.optimisation.functions.SumFunction":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],gradient:[5,1,1,""]},"cil.optimisation.functions.SumScalarFunction":{L:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.TotalVariation":{L:[5,1,1,""],__call__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],projection_C:[5,1,1,""],projection_P:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.TranslateFunction":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.WeightedL2NormSquared":{__call__:[5,1,1,""],__init__:[5,1,1,""],convex_conjugate:[5,1,1,""],gradient:[5,1,1,""],proximal:[5,1,1,""]},"cil.optimisation.functions.ZeroFunction":{__init__:[5,1,1,""]},"cil.optimisation.operators":{BlockOperator:[5,0,1,""],ChannelwiseOperator:[5,0,1,""],CompositionOperator:[5,0,1,""],DiagonalOperator:[5,0,1,""],FiniteDifferenceOperator:[5,0,1,""],GradientOperator:[5,0,1,""],IdentityOperator:[5,0,1,""],LinearOperator:[5,0,1,""],MaskOperator:[5,0,1,""],MatrixOperator:[5,0,1,""],Operator:[5,0,1,""],ScaledOperator:[5,0,1,""],SparseFiniteDifferenceOperator:[5,0,1,""],SymmetrisedGradientOperator:[5,0,1,""],ZeroOperator:[5,0,1,""]},"cil.optimisation.operators.BlockOperator":{T:[5,1,1,""],__getitem__:[5,1,1,""],__init__:[5,1,1,""],__rmul__:[5,1,1,""],adjoint:[5,1,1,""],column_wise_compatible:[5,1,1,""],direct:[5,1,1,""],domain_geometry:[5,1,1,""],get_item:[5,1,1,""],get_output_shape:[5,1,1,""],is_linear:[5,1,1,""],norm:[5,1,1,""],range_geometry:[5,1,1,""],row_wise_compatible:[5,1,1,""]},"cil.optimisation.operators.ChannelwiseOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.CompositionOperator":{__init__:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""],is_linear:[5,1,1,""]},"cil.optimisation.operators.DiagonalOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.FiniteDifferenceOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.GradientOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.IdentityOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.LinearOperator":{PowerMethod:[5,1,1,""],__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],dot_test:[5,1,1,""],is_linear:[5,1,1,""]},"cil.optimisation.operators.MaskOperator":{__init__:[5,1,1,""]},"cil.optimisation.operators.MatrixOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.Operator":{__init__:[5,1,1,""],__neg__:[5,1,1,""],__rmul__:[5,1,1,""],__sub__:[5,1,1,""],__weakref__:[5,2,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""],domain_geometry:[5,1,1,""],is_linear:[5,1,1,""],norm:[5,1,1,""],range_geometry:[5,1,1,""]},"cil.optimisation.operators.ScaledOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],direct:[5,1,1,""],is_linear:[5,1,1,""],norm:[5,1,1,""]},"cil.optimisation.operators.SparseFiniteDifferenceOperator":{__init__:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.SymmetrisedGradientOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],direct:[5,1,1,""]},"cil.optimisation.operators.ZeroOperator":{__init__:[5,1,1,""],adjoint:[5,1,1,""],calculate_norm:[5,1,1,""],direct:[5,1,1,""]},"cil.processors":{AbsorptionTransmissionConverter:[7,0,1,""],Binner:[7,0,1,""],CentreOfRotationCorrector:[7,0,1,""],MaskGenerator:[7,0,1,""],Masker:[7,0,1,""],Normaliser:[7,0,1,""],RingRemover:[7,0,1,""],Slicer:[7,0,1,""],TransmissionAbsorptionConverter:[7,0,1,""]},"cil.processors.AbsorptionTransmissionConverter":{__init__:[7,1,1,""],check_input:[7,1,1,""]},"cil.processors.Binner":{__init__:[7,1,1,""],check_input:[7,1,1,""]},"cil.processors.CentreOfRotationCorrector":{__weakref__:[7,2,1,""],image_sharpness:[7,1,1,""],xcorr:[7,1,1,""],xcorrelation:[7,1,1,""]},"cil.processors.MaskGenerator":{__init__:[7,1,1,""],check_input:[7,1,1,""],mean:[7,1,1,""],median:[7,1,1,""],quantile:[7,1,1,""],special_values:[7,1,1,""],threshold:[7,1,1,""]},"cil.processors.Masker":{__init__:[7,1,1,""],check_input:[7,1,1,""],interpolate:[7,1,1,""],mean:[7,1,1,""],median:[7,1,1,""],value:[7,1,1,""]},"cil.processors.Normaliser":{__init__:[7,1,1,""],check_input:[7,1,1,""],estimate_normalised_error:[7,1,1,""]},"cil.processors.RingRemover":{__init__:[7,1,1,""],check_input:[7,1,1,""],xRemoveStripesVertical:[7,1,1,""]},"cil.processors.Slicer":{__init__:[7,1,1,""],check_input:[7,1,1,""]},"cil.processors.TransmissionAbsorptionConverter":{__init__:[7,1,1,""],check_input:[7,1,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute"},terms:{"180degre":[2,7],"20channel":5,"2_2":[2,5],"2beta":5,"2ca":5,"2s1":5,"abstract":5,"boolean":[2,5,7],"case":[2,5,7],"class":[2,4,7],"default":[2,4,5,7],"float":[2,5,7],"function":3,"import":[2,4,5,7],"int":[2,4,5,7],"long":[2,5],"new":[2,5,7],"return":[0,2,4,5,6,7,8],"richt\u00e1rik":5,"sch\u00f6nlieb":5,"static":[2,5,7],"true":[2,4,5,7],"while":[3,5],For:[2,4,5,7],One:7,The:[2,3,4,5,7],Then:5,There:[2,5],These:2,Will:2,With:2,__add__:5,__array_priority__:[2,5],__call__:5,__eq__:2,__ge__:2,__getitem__:5,__gt__:2,__iadd__:[2,5],__idiv__:[2,5],__imul__:[2,5],__init__:[2,4,5,7],__isub__:[2,5],__iter__:[2,5],__itruediv__:[2,5],__le__:2,__lt__:2,__mul__:[2,5],__ne__:2,__neg__:[2,5],__next__:5,__radd__:[2,5],__rdiv__:[2,5],__rmul__:[2,5],__rpow__:[2,5],__rsub__:[2,5],__rtruediv__:[2,5],__str__:2,__sub__:5,__weakref__:[2,4,5,7],_algorithm__set_up_logg:5,_domain:5,abl:[2,5],about:[2,4],abov:[2,5],abs:[2,5,7],absolut:7,absorpt:7,absorptiontransmissionconvert:7,abspath:4,accept:[2,5],access:5,accord:2,accordingli:5,accur:[4,5,7],accuraci:[2,7],achiev:[2,5],acquir:[2,5],acquisiiondata:2,acquisit:[2,3,4,5],acquisition_geometri:4,acquisitiondata:[3,5,7],acquisitiondatasetn:7,acquisitiongeomerti:2,acquisitiongeometri:[2,4,5,7],acquisitionmodel:5,acquisitongeometri:3,across:7,act:5,actor:2,actual:[2,5],ad1:4,ad_par:2,add:[2,5],addit:[2,5],adjoint:5,adjust:4,admm:5,advanc:[2,5],after:[5,7],ag1:4,ag_fan:2,ag_fan_mc:2,ag_par:2,ag_par_3d:2,aim:[2,3],alcul:7,algebr:[2,5],algebra:[2,5],algorithm:[2,3,7],alia:[2,4,5,7],align:2,all:[2,4,5,7],alloc:[2,5],allow:[2,5,6],along:[2,4,5,7],alpha:[2,5],alphabet:4,alreadi:5,also:[2,3,4,5],altern:[5,7],although:5,amax:7,amount:2,analyt:5,ang_tol:[2,7],angl:[2,4],angle_unit:[2,4],angular:[2,7],ani:[2,5],anisotrop:5,anoth:[2,5,7],antonin:5,apart:[2,7],append:5,appli:[2,5,7],applic:[5,7],appropri:[2,5],approx:5,arbitrari:5,arg:[2,5],argmin:[2,5],argument:[2,5],armijo:5,armijo_rul:5,arrai:[2,4,5,7],arrang:[2,4],artifact:2,as_arrai:2,assembl:2,assign:7,assum:5,astra:[2,7],attribut:2,augment:5,automat:[2,7],avail:5,averag:4,avoid:[5,7],axes:[2,4],axi:[2,4,7],axis_0:4,axis_1:4,axis_2:4,axpbi:[2,5],back:[2,6],backend:5,backproject:5,backward:[2,4,5],bare:2,base:[2,3,7],basic:[2,3,4,5],bdc:2,beam:7,beck:5,been:[2,5,7],beer:7,befor:4,begin:[2,5],behav:[2,5],behaviour:5,being:3,below:[2,5],beta:5,better:2,between:[2,5,7],beyond:2,bibian:5,big:5,bigg:5,bin:[2,4,7],binari:2,binary_oper:[2,5],binner:7,binom:2,biologi:5,blob:5,block:3,blockdatacontain:[2,3],blockfunct:[2,5],blockgeometri:[2,5],blockoper:[2,5],bmatrix:5,bnd_cond:5,bool:[4,5,7],border:2,both:[2,3,5,7],bother:2,bottom:2,bound:5,boundari:[5,7],build:5,calcul:[4,5,7],calculate_norm:5,call:[2,5],callback:5,can:[2,3,4,5,7],capabl:6,carola:5,caus:2,ccpi:[3,4],ccppetmr:5,cdot:5,ceil:5,center:5,center_i:2,center_x:2,center_z:2,centered_at:5,centr:[2,7],centreofrotationcorrector:[2,7],certain:5,cgl:[2,5],chambol:5,chan:5,chanel:2,chang:[4,5],channel:5,channel_label:2,channelwiseoper:5,characterist:2,check:[2,4,5,7],check_input:7,cil:[2,4,5,7],cilacc:2,circular:2,classstir_1_1poissonloglikelihoodwithlinearmodelformean:5,clone:[2,5],close:5,code:[1,2,5,7],coincid:2,col:5,collect:[3,5],collim:2,column:[2,4,5],column_wise_compat:5,com:5,common:2,commut:[2,5],comparison:5,compat:[2,4,5],complex:2,compon:[2,5],compositionoper:5,compris:2,comput:5,computation:5,concret:5,condit:5,cone:7,configur:[2,5,7],conjug:[2,5],consid:[2,5],consist:[2,5],constant:[2,5],constantfunct:5,constrain:5,constraint:5,construct:[3,5],constructor:[4,5],contain:[2,4,5,7],content:[3,4,5],continu:5,contribut:[1,2,5],control:5,convent:[2,5],converg:5,convert:7,convex:5,convex_conjug:5,copi:[2,5],core:2,correct:7,correl:[2,5,7],correlation_spac:5,correspond:[2,4,7],could:[2,5],counter_offset:4,cours:2,courtesi:5,cpu:[2,5,6],creat:[2,5,7],create_cone2d:2,create_cone3d:2,create_parallel2d:2,create_parallel3d:2,creation:5,creator:5,critera:[2,7],criterion:5,cross:[2,7],cryterion:5,cubic:7,current:[2,5],customis:6,damp:7,dark:7,dark_field:7,data:[3,4,5,7],data_contain:4,data_profil:2,data_subset:2,data_transpos:2,datacontain:[3,4,5,7],datacontainer0:2,datacontainer1:2,dataprocessor:3,dataset:[2,4,7],datatyp:5,date:3,db1:7,db35:7,deblur:5,decim:5,decnum:7,decompos:5,decomposit:7,deep_copi:2,def:5,defin:[2,3,4,5,7],definit:[2,5],degre:[2,4,7],delta:5,delta_dark:7,delta_flat:7,demo:[2,3,5],denois:5,denot:5,depend:[2,4,7],depict:2,deprec:[2,5,7],deriv:5,descent:5,describ:[2,4,5],descript:2,design:5,desir:[2,5,7],desiri:7,detail:5,detect:7,detector:[2,4],detector_direction_i:2,detector_direction_x:2,detector_i:2,detector_posit:2,detector_x:2,devaiat:7,devel:3,develop:[2,3,5],deviat:7,diag:5,diagon:5,diagonaloper:5,dict:7,dictionari:[2,4,7],differ:[2,3,5],differenti:5,dimens:[2,4,5,7],dimension_label:[2,5,7],direct:[2,4,5],directli:[2,5],disk:4,dist_center_detector:2,dist_source_cent:2,distanc:[2,5],distribut:5,diverg:5,divid:[2,5],divis:[2,5],doc:[2,4,5],docstr:1,document:5,doe:[2,5,7],doesn:5,doi:[5,7],domain:5,domain_geometri:5,domain_init:5,done:[2,5],dot:[2,5],dot_test:5,doubl:2,download:5,downsampl:7,doxi:5,dtype:[2,4,5],dual:5,due:[2,5],dure:5,each:[2,5],easili:5,edu:5,ehrhardt:5,either:[2,4,5,7],element:[2,4,5,7],elementwis:5,els:5,emiss:5,emit:2,emploi:3,empti:2,enabl:3,end:[2,4,5,7],enforc:[3,5,7],engin:2,enough:3,entail:5,epsilon:5,equal:2,equival:[2,4,5],erfcinv:7,error:[2,4,5,7],esser:5,estim:[2,7],estimate_normalised_error:7,eta:5,euclid:5,euclidean:2,evalu:5,even:[2,5,7],event:5,everi:5,everyth:4,everywher:5,exampl:[3,5,7],execut:5,exist:[2,5],exp:2,expect:[2,7],expens:5,explicit:5,express:[2,5],extend:5,extract:2,f_1:5,f_i:5,f_n:5,fact:[2,4,5],factor:[2,7],factori:[2,7],fail:[2,5],fals:[2,4,5,7],fashion:5,fast:5,faster:5,fbp:[2,7],feasibl:2,fgp:5,fgp_tv:5,fidel:[2,5],field:[2,7],file:[2,4,5],file_nam:4,fill:[2,7],filter:[2,6,7],find:[2,5,7],fine:[2,7],finit:5,finitedifferenceoper:5,first:[2,4,5,7],firstli:[3,5],fista:5,fit:[2,5,7],fix:5,flag:5,flat:7,flat_field:7,flatten:7,flip:4,fliplr:4,float32:[2,4,5],fname:5,folder:4,follow:[2,5,7],forc:[2,5,7],form:[2,5],format:[1,2],formul:[3,5],formula:5,forth:5,forward:[5,6],found:[3,5],fourier:7,frac:[2,5],frame:2,framework:[3,4],from:[2,3,4,5,6,7],full:[2,4],function1:5,function2:5,fundament:5,further:[3,5],futur:[2,5],gamma:5,gantri:2,gap:[2,7],gener:[2,3,4,5,6,7],genericlli:[3,5],geom_typ:2,geometr:2,geometri:[3,4,5,7],geomrtri:4,geq0:5,get:[4,5],get_centre_slic:2,get_data_axes_ord:2,get_geometri:4,get_imagegeometri:2,get_item:[2,5],get_last_loss:5,get_last_object:5,get_metadata:4,get_output:5,get_output_shap:5,get_roi:4,get_slic:2,github:5,given:[2,5,7],global:5,gm_domain:5,gm_rang:5,goal:2,gpu:6,gradient:5,greater:2,greatli:2,grid:[2,7],group:5,guarant:5,guess:5,guid:3,haar:7,handl:3,happen:2,has:[2,5,7],have:[2,4,5],held:2,help:[4,5,7],henc:5,here:5,hereof:5,high:[3,5],higher:5,highli:5,hold:[2,5],home:[0,2,4,5,6,7,8],horizont:[2,4],horizontal_i:[2,5],horizontal_x:[2,5],how:5,howev:[4,5],html:[2,4,5],http:[2,4,5,7],hybrid:5,i_0:4,ideal:2,ident:5,identifi:7,identityoper:5,ieee:5,ig3:2,ig_fan:2,ig_par:2,ig_par_3d:2,ignor:4,illustr:2,im_data1:2,im_data2:2,ima:7,imag:[2,3,4,5,6,7],image_geometri:4,image_sharp:[2,7],imagedata:[3,5,7],imagegeometri:[3,5,7],implement:[2,3,5],implementatit:5,impli:5,impos:2,incid:[2,7],includ:5,increas:5,independ:5,index:[2,4,5],indic:[2,4],indicatorbox:5,indipend:[2,5],inf:[5,7],infin:5,infinit:5,influenc:2,info:[5,7],inform:[2,3],infrastructur:5,infti:5,ingredi:5,inherit:[2,5],initi:[2,4,5,7],initial_angl:2,initial_bin:[2,7],initialis:[2,4,5],inlin:[2,5],inner:2,input:[2,3,4,5,7],insid:5,instanc:[2,4,5],instanti:[2,5],instead:5,instrument:[2,7],integ:[2,5,7],intend:5,intens:7,interact:5,interest:7,intern:2,interpoalt:7,interpol:7,interpret:5,interv:5,invers:5,irrespect:5,is_compat:[2,5],is_linear:5,isotrop:5,iter:[2,5,6],its:5,itself:[2,5],join:3,journal:5,just:[2,5],k_i:5,kei:2,kept:5,keyword:[2,5],kinemat:2,kl_div:5,kmax:5,know:2,knowledg:2,known:5,kullback:5,kwarg:[2,4,5],l1norm:5,l2norm_:5,l2normsquar:5,lab:2,label:[2,5],ladmm:5,lagrangian:5,lambert:7,languag:6,larg:[2,5],largest:5,last:5,later:5,latter:5,law:7,layout:2,lead:4,least:2,leastsquar:5,left:[2,4,5],leibler:5,length:[2,5],leq1:5,less:[2,4],let:5,level:[3,4,5],librari:[2,4],like:[2,5],limit:5,linear:[5,7],linearoper:5,link:[1,5],linspac:2,lipschitz:5,lipshitz:5,list:[2,3,4,5,7],load:4,load_data:4,load_project:4,loader:2,locat:[2,7],log0:5,log10:5,log:[2,4,5,7],log_fil:5,logger:5,logging_level:4,loop:[4,5,7],loss:[2,5],lost:5,lower:[5,7],lvert:5,machin:2,mad:7,mag:2,magnif:2,mai:[2,3,5],mail:3,main:[2,3,5],mainli:2,make:[2,5],mani:5,map:5,markiewicz:5,mask:[5,7],masker:7,maskgener:7,maskoper:5,master:5,match:[2,5,7],math:[2,5],mathbb:5,mathcal:5,mathemat:[3,5],mathrm:[2,5],matric:5,matrix:[2,5],matrixoper:5,matthia:5,max:[2,5],max_iter:5,max_iteration_stop_cryterion:5,max_quantil:7,max_val:7,max_valu:2,maximis:[2,7],maximum:[2,5],mbox:5,mean:[2,5,7],meaning:7,meant:2,measur:[2,5,7],meausur:2,median:7,medicin:5,medium:5,member:5,memori:[2,5],messag:[4,7],met:5,meta:2,metadata:[2,3,4],method:[2,5,7],midlin:2,might:5,min:[2,5],min_:5,min_intens:7,min_quantil:7,min_val:7,min_x:5,minim:5,minimis:5,minimum:[2,5],misalign:2,miss:7,mixedl21norm:5,mode:[4,7],modul:[2,6],moment:5,more:[2,4,5],moreau:5,most:5,movmean:7,movmedian:7,multi:[5,7],multichannel:5,multipl:[2,5,7],multipli:[2,5],must:[2,5],mx1:5,my_data:4,n_angl:2,nabla:5,name:[2,4,5,7],nan:[5,7],ndarrai:[2,5,7],nearest:7,need:[5,7],neg:[2,4],negat:2,nest:[2,5],net:5,neumann:5,neutron:7,new_ord:2,newlin:5,next:[2,5,7],nexu:[2,3],nexus_fil:4,nexusdataread:4,nexusdatawrit:4,nice:5,nikon:[2,3],nikondataread:4,nois:5,noisy_data:5,non:[3,5],none:[2,4,5,7],norm2sq:5,norm:2,normal:[2,5],normalis:[4,7],notat:5,note:[2,4,5,7],notebook:2,notic:[4,5],nov:5,now:2,num_channel:2,num_pixel:2,num_pixels_h:2,num_pixels_v:2,num_thread:[2,5],number:[2,3,4,5,7],number_of_dimens:2,numer:2,numpi:[2,4,5,7],nx1:5,nxn:5,nxs:4,object:[2,3,4,5,7],objective_funct:5,offset:[2,4],one:[2,5],onli:[2,5,7],onto:[2,5],op0:5,op1:5,op2:5,oper:[2,3,7],operatorcompositionfunct:5,optim:[3,5],optimis:[2,3,6],option:[2,5,7],order:[2,4,5],org:[2,4,5,7],orient:[3,5],origin:[2,5,7],orthogon:[2,5],other:[2,5,7],otherwis:[2,5],otim:5,our:2,out:[2,5],outlier:7,output:[3,4,5,7],outsid:7,over:[5,7],overset:5,p_i:5,packag:[3,5],panel:[2,7],parallel:7,param:[2,5,7],paramet:[2,4,5,7],parent:2,parrallel:2,pars:4,part:6,partial_:5,partial_i:5,partial_x:5,particular:5,pass:[2,5],path:4,pawel:5,pdf:5,pdf_1:5,pdgh:5,pdhg:5,pdhg_vs_spdhg:5,penalis:5,per:5,perform:[2,5,7],period:5,pet:5,peter:5,phantom:6,photon:7,physic:[2,5],pipelin:2,pixel:[2,4,5,7],pixel_num_h:2,pixel_num_v:2,pixel_s:2,pixel_size_h:2,pixel_size_v:2,pjm:5,place:[2,5],placehold:[2,5],pleas:[1,2,3,7],plugin:[2,7],pock:5,point:[2,5],pointer:[2,5],poisson:5,poissonloglikelihoodwithlinearmodelformean:5,posit:[2,5],positron:5,possibl:[2,4,5],power:[2,3,5],powermethod:5,practic:2,pre:5,preced:[2,5],precis:5,precondit:5,prefix:4,prepend:5,present:[2,5],previou:[5,7],primal:5,print:[5,7],print_interv:5,prior:[2,5],prioriti:5,prob:5,probabl:5,problem:[2,3,5],process:[2,5,6],processor:[2,3],produc:2,product:[2,5],project:[2,4,5,6,7],projecteuclid:5,projection_c:5,projection_index:[2,7],projection_p:5,proper:5,properti:[2,3,5],prototyp:[3,5],provid:[2,3,4,5,7],prox:5,prox_:5,proxim:5,proximal_conjug:5,purpos:5,python2:[2,5],python:[4,5,7],pywt:7,quad:5,quadrat:[5,7],qualiti:2,quantil:7,quickli:2,r_1:2,r_2:2,radia:3,radian:2,radiat:2,rai:2,rais:[5,7],ral:5,random:[2,5],random_int:2,rang:[2,5,7],range_geometri:5,range_init:5,rapid:[3,5],rate:5,rather:[2,5],ray_direct:2,reach:[2,5],read:[3,7],read_as_acquisitiondata:4,read_as_imagedata:4,reader:[2,3],real:[2,3,5],rebin:7,recalcul:5,receiv:5,recognis:2,recommend:2,reconstruct:[2,3,5,6,7],redaer:4,reduc:2,reduct:2,refer:[1,2,3,4,5,7],reflect:5,regener:2,region:7,regularis:[2,5],rel:7,relat:5,releas:2,remain:7,remark:5,remov:7,reorder:2,repeat:5,repositori:[2,3],repres:[2,5,7],represent:2,request:[2,4,7],requir:[2,5,7],reshap:[2,4],resolut:2,resort:2,respect:[2,4,5,7],rest:5,restart:5,resul:[2,5],result:[2,4,5],revers:[2,5],rewritten:5,riff:4,right:[2,4,5],rightarrow:5,ring:7,ringremov:7,roi:[4,7],roll:7,rosenbrock:5,rotation_axis_direct:2,rotation_axis_posit:2,row:[2,4,5],row_wise_compat:5,rtype:7,rule:5,run:[2,5,7],rvert_:5,s10107:5,same:[2,5,7],sampl:[2,5],save:[2,4,5],scalar:[2,5],scale:[3,5,7],scaledfunct:5,scaledoper:5,scan:2,scatter:[2,5],schonlieb:5,sci:5,scienc:5,scipi:[2,5],screen:5,search:[2,7],search_rang:[2,7],secifi:7,second:[2,5,7],secondli:3,section:5,see:[4,5,7],seed:2,select:7,self:[2,4,5,7],sensibl:4,separ:5,serial:5,set:[2,4,5,6,7],set_angl:2,set_channel:2,set_label:2,set_panel:2,set_up:[4,5],sever:[2,4],sgn:5,shape:[2,5],share:5,sharp:[2,7],she:2,shinkoper:5,shortcut:4,shorter:5,should:[2,5,7],should_stop:5,shown:2,shrinkag:5,siam:5,side:[2,7],sigma:[5,7],sigma_i:5,sign:[2,5],signatur:[4,5,7],signific:2,similar:2,similarli:7,simpl:2,simplest:2,simpli:2,simplifi:2,simul:5,simultan:5,singl:[2,4,5,7],singular:5,sinogram:[2,7],sirf:5,sirt:5,size:[2,4,5,7],skip:4,slice:[2,4,7],slice_index:[2,7],slicer:7,slight:2,smooth:3,smoothmixedl21norm:5,softwar:[2,5],softx:6,sol:5,solut:[2,5],solv:[2,3,5],some:[2,7],some_data:2,soon:5,sop:5,sort:2,sourc:[2,3,4,5,7],source_posit:2,sourceforg:5,space:[5,7],spacechannel:5,spars:5,sparsefinitedifferenceoper:5,spatial:5,spdhg:5,special:5,special_valu:7,specif:[2,4,5,7],specifi:[2,4,5,7],spectral:[2,5,7],split:5,springer:5,sqrt:[2,5,7],squar:2,squared_norm:2,stack:[4,7],stage:2,standard:[2,4,7],stanford:5,start:[4,5,7],state:5,statement:[2,7],stationari:2,statist:7,statu:5,std:7,step:[2,4,5,7],step_siz:5,sting:2,stir:5,stochast:5,stop:[2,5,7],store:[2,5],str:[2,4,5,7],strategi:5,string:[2,4,5,7],stripe:7,structur:5,subclass:[3,5,7],subject:5,subproblem:5,subsequ:5,subset:2,substitut:7,subtract:[2,5],suffici:2,suit:2,suitabl:2,sum:[2,5],sumfunct:5,sumscalarfunct:5,sup:5,support:[2,5],sure:[2,5],swap:5,symmetr:5,symmetrisedgradientoper:5,sync:5,synchrotron:2,system:2,tabul:5,take:[2,5],task:[5,6],tau:5,tau_:5,teboul:5,techniqu:[2,5],tempor:6,term:[2,5],test:[5,7],text:5,textbf:5,than:[2,4,5],thei:[2,5],them:[4,5],theoret:2,therefor:[2,5],thereof:5,thi:[1,2,3,5,6,7],think:2,those:2,thread:[2,5],three:2,threshold:[5,7],threshold_factor:7,threshold_valu:7,through:4,tiff:3,tiffstackread:4,tiffwrit:4,tigr:[2,7],tikhonov:2,tild:2,time:5,tip:5,tmp:5,tmp_nexu:4,togeth:4,toler:[2,5,7],tomograph:[2,5],tomographi:5,toolbox:6,toolkit:6,top:2,totalvari:5,trajectori:2,transact:5,translat:[2,5,7],translatefunct:5,transmiss:[2,7],transmissionabsorptionconvert:7,transpos:[2,4,5],treat:5,trigger:5,truedivis:[2,5],tupl:[2,5,7],two:[2,5,7],txrmdataread:4,type:[2,4,5,7],typic:[2,5],unari:[2,5],unary_oper:[2,5],unbin:[2,7],under:5,underbrac:5,underset:[2,5],uniform:2,uniqu:2,unit:[2,4,5],unknown:2,unmask:7,until:5,updat:[2,5,7],update_object:5,update_objectice_interv:5,update_objective_interv:5,update_previous_solut:5,upper:[5,7],usag:5,use:[2,5,6,7],use_axpbi:5,used:[2,3,5,7],useful:[3,5],user:[2,5],uses:7,using:[2,7],util:3,vai:5,valu:[2,4,5,7],valueerror:5,vararg:5,variabl:5,vaue:7,vector:[2,5],vectordata:2,vectorgeometri:2,verbos:5,verbose_output:5,veri:5,vertic:[2,4,7],very_verbos:5,view:2,vision:5,vmatrix:2,vol:5,volum:[2,5],voxel:5,voxel_num_i:2,voxel_num_x:2,voxel_num_z:2,voxel_size_i:2,voxel_size_x:2,voxel_size_z:2,wai:[2,5],want:[2,5],warm:5,warranti:4,wavelet:7,weak:[2,4,5,7],web:5,websit:3,weight:5,weightedl2normsquar:5,well:[3,5],were:7,what:[2,4,5],when:[1,2,5],where:[2,5,7],wherea:5,whether:5,which:[2,4,5,7],white:4,white_level:7,width:[2,7],window:7,wise:[2,5,7],within:[5,7],without:[5,7],wname:7,work:[2,5],world:2,would:[2,4,5],wrap:[2,5],write:[2,3,5],write_fil:4,writer:[2,3],written:[2,6],wrt:5,x_1:5,x_i:5,x_init:5,x_n:5,x_old:5,xcorr:[2,7],xcorrel:[2,7],xin:5,xremovestripesvert:7,xshape:5,xtek_fil:4,xtekct:4,xtexct:4,yet:5,yield:5,you:[4,5,7],your:[1,7],zeiss:3,zero:[5,7],zerofunct:5,zerooper:5,zhang:5},titles:["Astra plugin","Developer\u2019s guide","Framework","Welcome to CIL\u2019s documentation!","Read/ write AcquisitionData and ImageData","Optimisation framework","CIL Plugins","Processors","Utilities"],titleterms:{"class":5,"function":[5,6],acquisitiondata:[2,4],acquisitongeometri:2,algorithm:5,astra:[0,6],base:5,beam:2,block:[2,5],blockdatacontain:5,box:5,calcul:2,ccpi:6,center:2,channel:2,cil:[3,6],composit:5,cone:2,contact:3,data:2,datacontain:2,dataprocessor:2,develop:1,document:3,fan:2,framework:[2,5],geometri:2,gradientoper:5,guid:1,imagedata:[2,4],imagegeometri:2,indic:5,kullbackleibl:5,l21:5,least:5,mix:5,multi:2,nexu:4,nikon:4,norm:5,oper:[0,5],optimis:5,other:6,parallel:2,plugin:[0,6],processor:[0,7],read:4,reader:4,regularis:6,rotat:2,simpl:5,smooth:5,squar:5,subclass:2,tiff:4,tigr:6,tomophantom:6,total:[5,6],trivial:5,util:8,variat:[5,6],welcom:3,write:4,writer:4,zeiss:4}})