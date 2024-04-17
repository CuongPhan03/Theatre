const connection = require('../config/database');
class moviesQuery {
    async getAllCategories() {
        let [results] = await connection.query('SELECT ten_the_loai FROM THELOAI');
        return results;
    }
    async getFilmCategories(filmId) {
        let [results] = await connection.query(
            `SELECT ten_the_loai FROM PHIM_THUOC_THELOAI 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getAllId() {
        let [results] = await connection.query('SELECT ma_phim FROM PHIM');
        return results;
    }
    async getSomeId(category, start, end) {
        let [results] = await connection.query(`CALL filterPhim(?, ?, ?)`, [category, start, end]);
        return results[0];
    }
    async getFilm(filmId) {
        let [results] = await connection.query(
            `SELECT ten, mo_ta FROM PHIM 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getFilmName(filmId) {
        let [results] = await connection.query(
            `SELECT ten FROM PHIM 
             WHERE ma_phim = ?`,
            [filmId],
        );
        return results;
    }
    async getAllInfo(filmId) {
        let [results] = await connection.query(
            `SELECT * FROM PHIM 
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
