import { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from '../../../utils/axios';
import filmImage from '../../../utils/filmImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './MovieInfo.module.scss';
const cx = classNames.bind(styles);

function MovieInfo() {
    const { filmId } = useParams();

    const [filmInfo, setFilmInfo] = useState([]);
    const [filmCategories, setFilmCategories] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const getFilmInfo = async () => {
            const res1 = await axios.get('/movies/getallinfo', { params: { filmId: filmId } });
            const res2 = await axios.get(`/movies/categories/${filmId}`);
            if (res1) setFilmInfo(res1);
            if (res2) setFilmCategories(res2);
        };
        getFilmInfo();
    }, [filmId]);

    return (
        <div className={cx('wrapper')}>
            <img src={filmImage(filmId)} className={cx('film-image')} />
            <div className={cx('content')}>
                <div className={cx('film-info')}>
                    <h1>{filmInfo.ten}</h1>
                    <div className={cx('info')}>
                        <p className={cx('label')}>Thể loại:</p>
                        <p className={cx('value')}>{filmCategories.join(', ')}</p>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('label')}>Nhà sản xuất:</p>
                        <p className={cx('value')}>{filmInfo.nha_san_xuat}</p>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('label')}>Quốc gia:</p>
                        <p className={cx('value')}>{filmInfo.quoc_gia}</p>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('label')}>Khởi chiếu:</p>
                        <p className={cx('value')}>{filmInfo.ngay_khoi_chieu}</p>
                    </div>
                    <div className={cx('info')}>
                        <p className={cx('label')}>Thời lượng</p>
                        <p className={cx('value')}>{filmInfo.thoi_luong}</p>
                    </div>
                    <img
                        src="https://uxwing.com/wp-content/themes/uxwing/download/video-photography-multimedia/2d-label-icon.png"
                        alt=" "
                    />
                    <p className={cx('description')}>{filmInfo.mo_ta}</p>
                    <hr />
                </div>
                <div className={cx('buttons')}>
                    <button className={cx('trailer')}>
                        <FontAwesomeIcon icon={faYoutube} />
                        &nbsp; TRAILER
                    </button>
                    <NavLink to={`/showtimes/${filmId}`} className={cx('book')}>
                        MUA VÉ
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MovieInfo;
