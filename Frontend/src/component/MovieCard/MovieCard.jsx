import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from '../../utils/axios';
import filmImage from '../../utils/filmImage';

import classNames from 'classnames/bind';
import styles from './MovieCard.module.scss';
const cx = classNames.bind(styles);

function MovieCard({ filmId }) {
    const [filmInfo, setFilmInfo] = useState([]);
    useEffect(() => {
        const getFilmInfo = async () => {
            const res = await axios.get('/movies/getinfo', { params: { filmId: filmId } });
            if (res) setFilmInfo(res);
        };
        getFilmInfo();
    }, [filmId]);

    return (
        <div className={cx('wrapper')}>
            <NavLink
                to={`/movies/${filmId}`}
                style={{
                    backgroundImage: `url(${filmImage(filmId)})`,
                }}
                className={cx('image')}
            ></NavLink>
            <div className={cx('content')}>
                <div className={cx('film-info')}>
                    <NavLink to="/movies/filmId" className={cx('name')}>
                        {filmInfo.ten}
                    </NavLink>
                    <p>{filmInfo.mo_ta}</p>
                    <hr />
                    <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/2d-label-icon.png"
                        alt=" "
                    />
                </div>
                <div className={cx('buttons')}>
                    <button className={cx('trailer')}>TRAILER</button>
                    <NavLink to={`/showtimes/${filmId}`} className={cx('book')}>
                        MUA VÉ
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
