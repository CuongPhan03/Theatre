const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/categories', moviesController.getAllCategories);
router.get('/categories/:filmId', moviesController.getFilmCategories);
router.get('/getinfo', moviesController.getFilm);
router.get('/getname', moviesController.getFilmName);
router.get('/getallinfo', moviesController.getAllInfo);
router.get('/gettopfav', moviesController.getTopFavFilms);
router.get('/getsomeid', moviesController.getSomeId);
router.get('/', moviesController.getAllId);

module.exports = router;
