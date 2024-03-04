const { Schema, model } = require("mongoose")

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
            unique: true,
        },
        description: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        responses: [{
            type: Schema.Types.ObjectId,
            ref: 'Response'
        }]
    },
    {
        timestamps: true,
    }
)

const Post = model("Post", postSchema)

module.exports = Post