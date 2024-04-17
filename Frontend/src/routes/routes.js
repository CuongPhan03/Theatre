import Layout from '../layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieInfo from '../pages/Movies/MovieInfo/MovieInfo';
import ShowTimes from '../pages/ShowTimes/ShowTimes';
import Book from '../pages/Book/Book';
import Theatres from '../pages/Theatres/Theatres';
import Employee from '../pages/Employee/Employee';
import Bill from '../pages/Bill/Bill';
import NotFound from '../pages/NotFound/NotFound';

const userRoutes = [
    { path: '/', component: Home, layout: Layout, title: 'TRANG CHỦ' },
    { path: '/movies', component: Movies, layout: Layout, title: 'PHIM' },
    { path: '/movies/:filmId', component: MovieInfo, layout: Layout },
    { path: '/showtimes/:filmId', component: ShowTimes, layout: Layout },
    { path: '/book/:filmId', component: Book, layout: Layout },
    { path: '/theatres', component: Theatres, layout: Layout, title: 'RẠP' },
    { path: '*', component: NotFound, layout: Layout },
];

const adminRoutes = [
    { path: '/movies', component: Movies, layout: Layout, title: 'PHIM' },
    { path: '/theatres', component: Theatres, layout: Layout, title: 'RẠP' },
    { path: '/employee', component: Employee, layout: Layout, title: 'NHÂN VIÊN' },
    { path: '/customer', component: Bill, layout: Layout, title: 'HÓA ĐƠN' },
    { path: '*', component: NotFound, layout: Layout },
];

export { userRoutes, adminRoutes };
