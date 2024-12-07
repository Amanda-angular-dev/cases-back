var express = require ('express')
var controller = require('./controller')
var router = express.Router()


const validationsLogin = require('./../../validations/UsersLoginValidations.js')
const response = require('./../../network/responses.js')



router.post('/login',validationsLogin,async (req,res)=>{
	const responseController = await  controller.loginAdmin(req)
	if(responseController.success){
		response.success(req,res,{login:true}," user loged successfuly",201,responseController.data)
	}else{
		response.error(req,res,{login:false}," internal error server")
	}
})

router.post('/regist-admin',async (req,res)=>{
	const responseController = await controller.registAdmin(req.body.name,req.body.email,req.body.password)
	if(responseController.success){
		response.success(req,res,{regist:true}," user created successfuly",201,responseController.data)
	}else{
		response.error(req,res,{regist:false}," internal error server")
	}
	
})






module.exports= router