const customerQuery = require('../services/customerQuery');

class customerController {
    async getCustomer(req, res) {
        try {
            const name = req.query.name;
            const phone = req.query.phone;
            let raw = await customerQuery.getCustomer(name, phone);
            if (raw.length === 0) {
                await customerQuery.addCustomer(name, phone);
                raw = await customerQuery.getCustomer(name, phone);
            }
            res.send(raw[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllBill(req, res) {
        try {
            const raw = await customerQuery.getAllBill();
            raw.map((bill) => {
                bill.ngay_giao_dich = bill.ngay_giao_dich.toISOString().split('T')[0];
                return bill;
            });
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getSomeBill(req, res) {
        try {
            const total = req.query.total;
            const start = req.query.start;
            const end = req.query.end;
            const raw = await customerQuery.getSomeBill(total, start, end);
            raw[0].map((bill) => {
                bill.tong_gia = parseInt(bill.tong_gia);
                bill.ngay_giao_dich = bill.ngay_giao_dich.toISOString().split('T')[0];
                return bill;
            });
            res.send(raw[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async createBill(req, res) {
        try {
            const billId = await customerQuery.createBill(req.body.theatreId);
            res.send({ billId: billId.insertId });
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getDiscount(req, res) {
        try {
            const raw = await customerQuery.getDiscount();
            const total = req.query.subTotal;
            const discounts = raw.map((disc) => {
                const money1 = parseFloat(disc.phan_tram_duoc_giam) * total;
                const money2 = disc.tien_duoc_giam;
                const money = money1 > money2 ? money1 : money2;
                return { ma_dot_km: disc.ma_dot_km, ten_dot: disc.ten_dot, duoc_giam: money };
            });
            res.send(discounts);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async submitBill(req, res) {
        try {
            const { chairs, foods, billId, cusId, usePoints, pointMoney, code, discMoney, theatreId, screen, date } =
                req.body;
            await customerQuery.setCusIdBill(billId, cusId);
            for (const chairId of chairs) await customerQuery.addChairBill(theatreId, screen, chairId, date, billId);
            for (const food of foods) await customerQuery.addFoodBill(billId, food.id, food.quantity);
            if (code) await customerQuery.useDiscount(billId, code, discMoney);
            if (usePoints) await customerQuery.usePoints(billId, pointMoney, usePoints, cusId);
            res.send('ok');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}
module.exports = new customerController();
