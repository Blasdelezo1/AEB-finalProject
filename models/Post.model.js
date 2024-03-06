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
        }],
        category: {
            type: String,
            enum: ['early game', 'midle game', 'late game', 'opening', 'prime', 'blitz', 'cube', 'timming', 'flexibility', 'backgamme', 'bear off'],
            required: true
        },
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