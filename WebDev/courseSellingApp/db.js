const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: {type: String, unique: true},
    pass: String,
    firstName: String,
    lastName: String
})

const adminSchema = new Schema({
  email: { type: String, unique: true },
  pass: String,
  firstName: String,
  lastName: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: String,
  imageUrl: String,
  creatorId: ObjectId
});

const purchaseSchema = new Schema({
    userId: ObjectId,
    course: ObjectId
});

const userModel = mongoose.model('user',userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
    userModel, adminModel, courseModel, purchaseModel
}