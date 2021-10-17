import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

let redeemedPrizeSchema = new mongoose.Schema(
  {
    prize: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'prize',
    },
  },
  {
    timestamps: { createdAt: 'created_at' },
  }
);

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

    redeemed_prizes: {
      type: [redeemedPrizeSchema],
      default: [],
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

schema.methods.hasRedeemedPrize = function (prizeId: string): boolean {
  return this.redeemed_prizes.some(
    (r: any) => r.prize._id.toString() === prizeId
  );
};

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
