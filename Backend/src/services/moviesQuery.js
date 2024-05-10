const connection = require('../config/database');
class moviesQuery {
    async getAllCategories() {
        let [results] = await connection.query('SELECT ten_the_loai FROM theloai');
        return results;
    }
    async getFilmCategories(filmId) {
        let [results] = await connection.query(
            `SELECT ten_the_loai FROM phim_thuoc_theloai 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getAllId() {
        let [results] = await connection.query('SELECT ma_phim FROM phim');
        return results;
    }
    async getSomeId(category, start, end) {
        let [results] = await connection.query(`CALL filterPhim(?, ?, ?)`, [category, start, end]);
        return results[0];
    }
    async getFilm(filmId) {
        let [results] = await connection.query(
            `SELECT ten, mo_ta FROM phim 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getFilmName(filmId) {
        let [results] = await connection.query(
            `SELECT ten FROM phim 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getAllInfo(filmId) {
        let [results] = await connection.query(
            `SELECT * FROM phim 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getTopFavFilms(top, year) {
        let [results] = await connection.query(`CALL topNFavoriteMovies(?, ?)`, [top, year]);
        return results[0];
    }
}
module.exports = new moviesQuery();
