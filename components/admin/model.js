const mongoose = require('mongoose')

var adminScheme=  mongoose.Schema({
	name: String,
	email: {
	    type: String,
	    required: true,
	    unique: true // aquí se especifica que el campo debe ser único
	  },
	password :{
		type: String,
	    required: true
	  },
	rol: {
	    type: String,
	    enum: ['normal', 'super'],
	    default : 'normal'
	  }
})

var modelAdmin = mongoose.model('admin',adminScheme)

module.exports = modelAdmin





























































