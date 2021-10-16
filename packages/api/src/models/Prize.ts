import mongoose from 'mongoose';

let schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: false,
  },

  stock: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('prize', schema);
