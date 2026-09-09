import mongoose from 'mongoose';

const menuItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  desc: { type: String, required: true },
  rating: { type: String, default: '5.0' },
  image: { type: String, required: true },
  category: { 
    type: String, 
    required: true, 
    enum: ['Coffee', 'coffee', 'cold', 'bakery'] // Capital C added
  }
}, { timestamps: true });

// 3rd argument 'menu' explicitly pass kiya hai taake MongoDB Compass wali 'menu' collection se query ho
export default mongoose.model('MenuItem', menuItemSchema, 'menu');