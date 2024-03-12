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
            enum: ['Early Game', 'Midle Game', 'Late Game', 'Opening', 'Prime', 'Blitz', 'Cube', 'Timming', 'Flexibility', 'Backgamme', 'Bear Off']
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

