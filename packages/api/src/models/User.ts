import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: false,
      select: false,
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

schema.pre('save', function (next) {
  if (!this.isModified || !this.isNew) {
    return next();
  }

  bcrypt.hash(this.password, 10, (err, hashed) => {
    if (err) {
      return next(err);
    }

    this.password = hashed;

    next();
  });
});

export default mongoose.model('user', schema);
