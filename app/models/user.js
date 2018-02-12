var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: { type: String, lowercase: true, required: true, unique: true },
  password: { type: String, required: true, bcrypt: true },
  email: { type: String, required: true, unique: true}
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema)
