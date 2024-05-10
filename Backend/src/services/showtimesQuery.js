const connection = require('../config/database');
class showtimesQuery {
    async getShowtimes(theatreId, filmId) {
        let [results] = await connection.query(
            `SELECT ngay_gio_chieu FROM suatchieu
             WHERE ma_rap_phim = ? AND ma_phim = ? AND ngay_gio_chieu > NOW()
             ORDER BY ngay_gio_chieu`,
            [theatreId, filmId],
        );
        return results;
    }
}
module.exports = new showtimesQuery();
