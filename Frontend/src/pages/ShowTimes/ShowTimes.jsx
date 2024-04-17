import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from '../../utils/axios';
import filmImage from '../../utils/filmImage';

import classNames from 'classnames/bind';
import styles from './ShowTimes.module.scss';

const cx = classNames.bind(styles);

function ShowTimes() {
    const { filmId } = useParams();
    const [selecting, setSelecting] = useState(-1);

    const [theatres, setTheatres] = useState([]);
    const [filmName, setFilmName] = useState('');
    useEffect(() => {
        window.scrollTo(0, 0);
        const geTheatres = async () => {
            const res1 = await axios.get('/theatres/getinfo');
            const res2 = await axios.get('/movies/getname', { params: { filmId: filmId } });
            if (res1) setTheatres(res1);
            if (res2) setFilmName(res2);
        };
        geTheatres();
    }, []);

    const [showTimes, setShowtimes] = useState([]);
    const handleSelect = async (index) => {
        const theatreId = theatres[index].ma_rap_phim;
        const res = await axios.get(`/showtimes/${filmId}`, { params: { theatreId: theatreId } });
        setShowtimes(res);
        setSelecting(index);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sidebar')}>
                <h2>CHỌN RẠP</h2>
                <div className={cx('buttons')}>
                    {theatres.map((theatre, index) => (
                        <button
                            className={cx(index === selecting ? 'active' : 'notactive')}
                            key={index}
                            onClick={() => {
                                handleSelect(index);
                            }}
                        >
                            {theatre.ten_rap}
                        </button>
                    ))}
                </div>
            </div>
            <div className={cx('content')}>
                <div className={cx('location')}>{selecting !== -1 && <p>{theatres[selecting].dia_chi}</p>}</div>
                {showTimes.map(
                    (day, index) =>
                        selecting !== -1 && (
                            <div key={index} className={cx('show-times')}>
                                <h2 className={cx('date')}>{day.date}</h2>
                                <div className={cx('times')}>
                                    {day.times.map((time, id) => (
                                        <NavLink
                                            to={`/book/${filmId}?theatre=${theatres[selecting].ma_rap_phim}&date=${day.date}&time=${time}`}
                                            key={id}
                                            className={cx('time')}
                                        >
                                            {time}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        ),
                )}
            </div>
            <div className={cx('film')}>
                <h1>{filmName}</h1>
                <img src={filmImage(filmId)} className={cx('film-image')} />
            </div>
        </div>
    );
}

export default ShowTimes;
