const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

// async function getUser() {
//   return await User
//   .select({ type: 1 });
// }

// async function run() {
//   const users = await getUser();
//   console.log(users);
// }

// run();

module.exports = User;