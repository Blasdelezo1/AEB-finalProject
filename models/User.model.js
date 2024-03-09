const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: ""
    },
    favorites: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }]
  },
  {
    timestamps: true,
  }
)

const User = model("User", userSchema)

module.exports = User
