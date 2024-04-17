const showtimesQuery = require('../services/showtimesQuery');

class showtimesController {
    async getShowtimes(req, res) {
        try {
            const filmId = req.params.filmId;
            const theatreId = req.query.theatreId;
            const raw = await showtimesQuery.getShowtimes(theatreId, filmId);
            const showtimes = [];
            raw.forEach((rawDateTime) => {
                const data = rawDateTime.ngay_gio_chieu.toISOString().split('T');
                const timeData = data[1].split(':');
                const date = data[0];
                const time = timeData[0] + ':' + timeData[1];
                const index = showtimes.findIndex((showtime) => showtime.date === date);
                index >= 0 ? showtimes[index].times.push(time) : showtimes.push({ date: date, times: [time] });
            });
            res.send(showtimes);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}
module.exports = new showtimesController();
