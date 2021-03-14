
import pkg from 'mongoose'
const { Schema, model } = pkg

const schema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export default model('Comment', schema)
