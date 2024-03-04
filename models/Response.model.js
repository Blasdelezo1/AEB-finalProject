const { Schema, model } = require("mongoose")

const responseSchema = new Schema(
    {
        comment: {
            type: String,
            required: true,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    },
    {
        timestamps: true,
    }
)

const Response = model("Response", responseSchema)

module.exports = Response