const mongoose = require('mongoose')

var CommentSchema = new mongoose.Schema({
    body: String,
    user_image: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    story: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' }
  }, {timestamps: true});



  // Requires population of author
  
// CommentSchema.methods.toJSONFor = function(user){
//     return {
//       id: this._id,
//       body: this.body,
//       createdAt: this.createdAt,
//       author: this.user.toProfileJSONFor(user)
//     };
//   };

module.exports = mongoose.model('Comment', CommentSchema)