const { Schema, model } = require("mongoose")

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        cover: {
            type: String,
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
        }],
        categories: [{
            type: String,
            enum: ['early game', 'midle game', 'late game', 'opening', 'prime', 'blitz', 'cube', 'timming', 'flexibility', 'backgamme', 'bear off']
        }],
        moneyGame: {
            type: Boolean,
            required: true
        }

    },
    {
        timestamps: true,
    }
)

const Post = model("Post", postSchema)

module.exports = Post

