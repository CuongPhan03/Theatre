import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../../utils/userContext.jsx';
import axios from '../../utils/axios';

import filmImage from '../../utils/filmImage';
import MovieCard from '../../component/MovieCard/MovieCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Movies.module.scss';
const cx = classNames.bind(styles);

function Movies() {
    const { user } = useContext(UserContext);
    // admin
    const [filmInfo, setFilmInfo] = useState([]);
    const [filterValue1, setFilterValue1] = useState({ top: 0, year: '' });
    const [submitValue1, setSubmitValue1] = useState(null);
    const handleFilter1 = async () => {
        if (filterValue1.top != 0 && filterValue1.year != 0) {
            setSubmitValue1({ top: filterValue1.top, year: filterValue1.year });
            const res = await axios.get('/movies/gettopfav', { params: { ...filterValue1 } });
            if (res) setFilmInfo(res);
        }
    };
    const handleUnFilter1 = () => {
        if (submitValue1) {
            setSubmitValue1(null);
            setFilterValue1({ top: 0, year: 0 });
            setFilmInfo([]);
        }
    };

    // user
    const [categories, setCategories] = useState([]);
    const [filmsId, setFilmsId] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        if (!user.isAdmin) {
            const getAll = async () => {
                const res1 = await axios.get('/movies/categories');
                const res2 = await axios.get('/movies');
                if (res1) setCategories(res1);
                if (res2) setFilmsId(res2);
            };
            getAll();
        }
    }, [user.isAdmin]);

    const [filterValue2, setFilterValue2] = useState({ start: '', end: '' });
    const [submitted, setSubmitted] = useState(null);
    const [ftIndex, setFtIndex] = useState(-1);
    const handleFilter2 = async (id, action) => {
        const category = id === -1 ? null : categories[id];
        const start = filterValue2.start === '' || action === 'unfilter2' ? null : filterValue2.start;
        const end = filterValue2.end === '' || action === 'unfilter2' ? null : filterValue2.end;
        const postValue = { category: category, start: start, end: end };
        const res = await axios.get('/movies/getsomeid', { params: { ...postValue } });
        if (res) setFilmsId(res);
    };

    return user.isAdmin ? (
        <div className={cx('admin-wrapper')}>
            <h1 className={cx('title')}>TOP N PHIM BÁN CHẠY NHẤT</h1>
            <div className={cx('filter')}>
                <select
                    id="top"
                    value={filterValue1.top}
                    onChange={(e) => {
                        setFilterValue1({ ...filterValue1, top: e.target.value });
                    }}
                >
                    <option value="">Chọn top</option>
                    <option value="1">Top 1</option>
                    <option value="2">Top 2</option>
                    <option value="3">Top 3</option>
                    <option value="4">Top 4</option>
                    <option value="5">Top 5</option>
                </select>
                <select
                    id="year"
                    value={filterValue1.year}
                    onChange={(e) => {
                        setFilterValue1({ ...filterValue1, year: e.target.value });
                    }}
                >
                    <option value="">Chọn năm</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                </select>
                <button
                    className={cx('filter', filterValue1.top != 0 && filterValue1.year != 0 ? 'enable' : 'disable')}
                    onClick={handleFilter1}
                >
                    ĐI
                </button>
                <button className={cx('unfilter', submitValue1 ? 'enable' : 'disable')} onClick={handleUnFilter1}>
                    HỦY
                </button>
            </div>
            {submitValue1 && <h1>NĂM {submitValue1.year}</h1>}
            <div className={cx('film')}>
                {filmInfo.map((film, index) => (
                    <div className={cx('film12')} key={index}>
                        <div className={cx('info')}>
                            <img src={filmImage(film.ma_phim)} alt="" />
                            <div>
                                <h2>{film.ten}</h2>
                                <p>
                                    Lượt bán: &nbsp;
                                    <FontAwesomeIcon icon={faHandHoldingDollar} />
                                    {film.tong_ve}
                                </p>
                            </div>
                        </div>
                        <h1>Top {index + 1}</h1>
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <div className={cx('user-wrapper')}>
            <div className={cx('filter1')}>
                <h2>Thể loại: </h2>
                <div className={cx('categories')}>
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            className={cx(ftIndex === index && 'active')}
                            onClick={() => {
                                setFtIndex(index);
                                handleFilter2(index, 'filter1');
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => {
                        setFtIndex(-1);
                        handleFilter2(-1, 'unfilter1');
                    }}
                    disabled={ftIndex === -1}
                >
                    Bỏ chọn
                </button>
            </div>
            <div className={cx('filter2')}>
                <h2>Suất chiếu: </h2>
                <div>
                    <label htmlFor="start">Từ ngày</label>
                    <input
                        type="date"
                        id="start"
                        value={filterValue2.start}
                        onChange={(e) => {
                            setFilterValue2({ ...filterValue2, start: e.target.value });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="end">Đến ngày</label>
                    <input
                        type="date"
                        id="end"
                        value={filterValue2.end}
                        onChange={(e) => {
                            setFilterValue2({ ...filterValue2, end: e.target.value });
                        }}
                    />
                </div>
                <button
                    className={cx(
                        'filter',
                        filterValue2.start !== '' && filterValue2.end !== '' ? 'enable' : 'disable',
                    )}
                    onClick={() => {
                        setSubmitted(1);
                        handleFilter2(ftIndex, 'filter2');
                    }}
                >
                    ĐI
                </button>
                <button
                    className={cx('unfilter', submitted ? 'enable' : 'disable')}
                    onClick={() => {
                        setSubmitted(null);
                        setFilterValue2({ start: '', end: '' });
                        handleFilter2(ftIndex, 'unfilter2');
                    }}
                >
                    HỦY
                </button>
            </div>
            <hr />
            <div className={cx('film-cards')}>
                {filmsId.map((filmId, index) => (
                    <MovieCard filmId={filmId} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Movies;
