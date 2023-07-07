import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 3,
    },
    year: {
      type: String,
    },
    desc: {
      type: String,
      require: true,
      minLength: 3,
    },
    image: {
      type: String,
      require: true,
    },
    source_code_link: {
      type: String,
      require: true,
    },
    demo_link: {
      type: String,
      require: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
  },
  { timestamps: true, versionKey: false }
);
productSchema.plugin(mongoosePaginate);

export default mongoose.model('Product', productSchema);
