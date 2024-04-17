const { threadId } = require('../config/database');
const theatresQuery = require('../services/theatresQuery');
const employeeQuery = require('../services/employeeQuery');

class theatresController {
    async getTheatre(req, res) {
        try {
            const raw = await theatresQuery.getTheatre();
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getTheatreName(req, res) {
        try {
            const raw = await theatresQuery.getTheatreName(req.query.theatreId);
            const theatreName = raw[0]?.ten_rap;
            res.send(theatreName);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllTheatreInfo(req, res) {
        try {
            const raw = await theatresQuery.getAllTheatreInfo();
            const results = [];
            for (const theatre of raw) {
                const mgrName = await employeeQuery.getName(theatre.ma_nv_quan_ly);
                theatre.ten_quan_ly = mgrName[0].ten;
                delete theatre.ma_nv_quan_ly;
                const open = theatre.thoi_gian_mo.split(':');
                const close = theatre.thoi_gian_dong.split(':');
                theatre.thoi_gian_mo = open[0] + 'h' + open[1];
                theatre.thoi_gian_dong = close[0] + 'h' + close[1];
                results.push(theatre);
            }
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getTopRevenue(req, res) {
        try {
            const top = parseInt(req.query.top);
            const month = parseInt(req.query.month);
            const year = req.query.year;
            const raw = await theatresQuery.getTopRevenue(top, month, year);
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}
module.exports = new theatresController();
