import mongoose from "mongoose"

const TransactionSchema = new mongoose.Schema(
    {
        sender: { type: String, required: true },
        address: { type: String, required: true },
        amount: { type: Number, required: true },
        description: { type: String, required: true },
        status: { type: Boolean, default: 'done' },
        date: { type: Date, default: new Date() }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Transaction", TransactionSchema)