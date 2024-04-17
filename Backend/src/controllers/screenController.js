const screenQuery = require('../services/screenQuery');

class screenController {
    async getscreen(req, res) {
        try {
            const theatreId = req.query.theatreId;
            const filmId = req.query.filmId;
            const date = req.query.date;
            const time = req.query.time;
            const showtime = date + ' ' + time;
            const raw = await screenQuery.getId(theatreId, filmId, showtime);
            res.send(raw[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getChairsInfo(req, res) {
        try {
            const theatreId = req.query.theatreId;
            const screenId = req.query.screenId;
            const raw = await screenQuery.getChairsInfo(theatreId, screenId);
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllChair(req, res) {
        try {
            const theatreId = req.query.theatreId;
            const screenId = req.query.screenId;
            const raw = await screenQuery.getAllChair(theatreId, screenId);

            const results = { normal: [], vip: [] };
            raw.forEach((chair) => {
                chair.tinh_trang_ghe = chair.tinh_trang_ghe === 0 ? 'available' : 'sold';
                if (chair.loai_ghe === 'VIP') {
                    delete chair.loai_ghe;
                    results.vip.push(chair);
                } else {
                    delete chair.loai_ghe;
                    results.normal.push(chair);
                }
            });
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getFoodsInfo(req, res) {
        try {
            const raw = await screenQuery.getFoodsInfo();
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}
module.exports = new screenController();
