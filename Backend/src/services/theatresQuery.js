const connection = require('../config/database');
class theatresQuery {
    async getAllTheatreInfo() {
        let [results] = await connection.query(`SELECT * FROM rapphim `);
        return results;
    }
    async getTheatre() {
        let [results] = await connection.query(`SELECT ma_rap_phim, ten_rap, dia_chi FROM rapphim`);
        return results;
    }
    async getTheatreName(theatreId) {
        let [results] = await connection.query(
            `SELECT ten_rap FROM rapphim 
             WHERE ma_rap_phim = ?`,
            [theatreId],
        );
        return results;
    }
    async getTheatreId(theatreName) {
        let [results] = await connection.query(
            `SELECT ma_rap_phim  FROM rapphim 
             WHERE ten_rap = ?`,
            [theatreName],
        );
        return results;
    }
    async getAllName() {
        let [results] = await connection.query(
            `SELECT ten_rap FROM rapphim 
             GROUP BY ten_rap`,
        );
        return results;
    }
    async getTopRevenue(top, month, year) {
        let [results] = await connection.query(`CALL topNBranchRevenue(?, ?, ?)`, [top, month, year]);
        return results[0];
    }
}
module.exports = new theatresQuery();
