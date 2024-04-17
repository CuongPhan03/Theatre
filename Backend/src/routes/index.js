const moviesRouter = require('./movies');
const theatresRouter = require('./theatres');
const showtimesRouter = require('./showtimes');
const screenRouter = require('./screen');
const employeeRouter = require('./employee');
const customerRouter = require('./customer');

function route(app) {
    app.use('/movies', moviesRouter);
    app.use('/theatres', theatresRouter);
    app.use('/showtimes', showtimesRouter);
    app.use('/screen', screenRouter);
    app.use('/employee', employeeRouter);
    app.use('/customer', customerRouter);
}

module.exports = route;
