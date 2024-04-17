const connection = require('../config/database');
class screenQuery {
    async getId(theatreId, filmId, showtime) {
        let [results] = await connection.query(
            `SELECT ma_so_phong FROM SUATCHIEU
             WHERE ma_rap_phim = ? AND ma_phim = ? AND ngay_gio_chieu = ?`,
            [theatreId, filmId, showtime],
        );
        return results;
    }
    async getChairsInfo(theatreId, screenId) {
        let [results] = await connection.query(
            `SELECT loai_ghe, gia FROM GHE
             WHERE ma_rap_phim = ? AND ma_so_phong = ?
             GROUP BY loai_ghe, gia`,
            [theatreId, screenId],
        );
        return results;
    }
    async getAllChair(theatreId, screenId) {
        let [results] = await connection.query(
            `SELECT ma_so_ghe, tinh_trang_ghe, loai_ghe FROM GHE
             WHERE ma_rap_phim = ? AND ma_so_phong = ?`,
            [theatreId, screenId],
        );
        return results;
    }
    async getFoodsInfo() {
        let [results] = await connection.query(`SELECT * FROM DOAN`);
        return results;
    }
}
module.exports = new screenQuery();
