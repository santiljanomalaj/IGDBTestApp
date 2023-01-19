const Transaction = require('../models/Transaction');

module.exports = {
    deposit: async (req: any, res: any, next: any) => {
        console.log(req.query, req.params);
        try {
            const ret = await Transaction.collection.insert({ ...req.query, date: new Date() });
            return res.send(ret);
        } catch (error: any) {
            return res.send({ ...error, error: true });
        }
    },
    getAll: async (req: any, res: any, next: any) => {
        const transactions = await Transaction.find(req.query);
        console.log(transactions);
        return res.send(transactions)
    },
}