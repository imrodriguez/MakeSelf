var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/users-mk');

var user_schema = new Schema({
  user: {type: String,required: "El nombre es obligatorio",maxlength:[20,"Username no puede ser mayor de 20"],minlength:[5,"El user es demasiado corto"]},
  password: {type: String, required: "La contraseña es obligatoria", minlength:[5, "El password es muy corto"]},
  email: String,
  company: String
});

var User = mongoose.model("User",user_schema);

module.exports.User = User;
