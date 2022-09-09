const mongoose = require('mongoose')

const StorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  body: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'public',
    enum: ['public', 'private'],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comments: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}
  ],
  comments_count: Number ,
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

StorySchema.statics.addComment = function (user_id, minute_id, comment_id, done) {
  this.update({ "_id": minute_id, "user": user_id }, { $push: { comments: comment_id }, $inc: { comments_count: 1 } }, { multi: false }, function(a, b, c){
    console.log("addComment", a ,b,c);
  });
};

module.exports = mongoose.model('Story', StorySchema)
