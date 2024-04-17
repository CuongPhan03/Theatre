const moviesQuery = require('../services/moviesQuery');

class moviesController {
    async getAllCategories(req, res) {
        try {
            const raw = await moviesQuery.getAllCategories();
            const categories = raw.map((category) => category.ten_the_loai);
            res.send(categories);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getFilmCategories(req, res) {
        try {
            const raw = await moviesQuery.getFilmCategories(req.params.filmId);
            const categories = raw.map((category) => category.ten_the_loai);
            res.send(categories);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllId(req, res) {
        try {
            const raw = await moviesQuery.getAllId();
            const ids = raw.map((film) => film.ma_phim);
            res.send(ids);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getSomeId(req, res) {
        try {
            const category = req.query.category;
            const start = req.query.start;
            const end = req.query.end;
            const raw = await moviesQuery.getSomeId(category, start, end);
            const ids = raw.map((film) => film.ma_phim);
            res.send(ids);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getFilm(req, res) {
        try {
            const raw = await moviesQuery.getFilm(req.query.filmId);
            res.send(raw[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getFilmName(req, res) {
        try {
            const raw = await moviesQuery.getFilmName(req.query.filmId);
            const filmName = raw[0].ten;
            res.send(filmName);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllInfo(req, res) {
        try {
            const raw = await moviesQuery.getAllInfo(req.query.filmId);
            raw[0].ngay_khoi_chieu = raw[0].ngay_khoi_chieu.toISOString().split('T')[0];
            res.send(raw[0]);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getTopFavFilms(req, res) {
        try {
            const top = parseInt(req.query.top);
            const year = req.query.year;
            const raw = await moviesQuery.getTopFavFilms(top, year);
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}
module.exports = new moviesController();
