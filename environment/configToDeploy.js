const configToDeploy = {
	
	USER_DATABASE : process.env.USER_DATABASE,
	PASSWORD_DATABASE : process.env.PASSWORD_DATABASE,
	NAME_DATABASE : process.env.NAME_DATABASE,
	KEY_SECRET_TOKEN :process.env.KEY_SECRET_TOKEN,
	KEY_STRIPE_PUBLIC:process.env.KEY_STRIPE_PUBLIC,
	KEY_STRIPE_SECRET:process.env.KEY_STRIPE_SECRET
}


module.exports= configToDeploy

