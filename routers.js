const routerAdmin = require('./components/admin/route.js')
const routerPhonesCases = require('./components/cases/route.js')
const routerUsers = require('./components/users/route.js')
const VerifyToken= require('./middelwares/verifyTokenValid.js')
function routes(app) {
	
	app.use('/phone-cases', routerPhonesCases)
    app.use('/users', routerUsers)
    app.use('/admin', routerAdmin)
}

module.exports = routes
