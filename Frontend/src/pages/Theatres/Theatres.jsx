import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../utils/userContext.jsx';
import axios from '../../utils/axios';

import theatreImage from '../../utils/theatreImage';
import styles from './Theatres.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Theatres() {
    const { user } = useContext(UserContext);

    const [allTheatre, setAllTheatre] = useState([]);
    const [filterInfo, setFilterInfo] = useState([]);
    const getTheatresInfo = async () => {
        const res = await axios.get('/theatres');
        res.forEach((theatre) => (theatre.doand_thu = null));
        setAllTheatre(res);
        setFilterInfo(res);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getTheatresInfo();
    }, [user.isAdmin]);

    const [filterValue, setFilterValue] = useState({ top: 0, month: 0, year: 0 });
    const [submitValue, setSubmitValue] = useState(null);
    const handleFilter = async () => {
        if (filterValue.top != 0 && filterValue.month != 0 && filterValue.year != 0) {
            setSubmitValue({ top: filterValue.top, month: filterValue.month, year: filterValue.year });
            const res = await axios.get('/theatres/gettoprev', { params: { ...filterValue } });
            if (res) {
                const filtered = [];
                res.forEach((item) => {
                    const theatre = allTheatre.find((theatre) => theatre.ma_rap_phim === item.ma_rap_phim);
                    if (theatre) {
                        delete theatre.doanh_thu;
                        theatre.tong_doanh_thu = item.tong_doanh_thu;
                        filtered.push(theatre);
                    }
                });
                setFilterInfo(filtered);
            }
        }
    };
    const handleUnFilter = () => {
        if (submitValue) {
            setSubmitValue(null);
            setFilterValue({ top: 0, month: 0, year: 0 });
            getTheatresInfo();
        }
    };

    return (
        <div className={cx('wrapper')}>
            {user.isAdmin && (
                <>
                    <h1>TOP N RẠP CÓ DOANH THU CAO NHẤT</h1>
                    <div className={cx('filter')}>
                        <select
                            id="top"
                            value={filterValue.top}
                            onChange={(e) => {
                                setFilterValue({ ...filterValue, top: e.target.value });
                            }}
                        >
                            <option value="0">Chọn top</option>
                            <option value="1">Top 1</option>
                            <option value="2">Top 2</option>
                            <option value="3">Top 3</option>
                        </select>
                        <select
                            id="month"
                            value={filterValue.month}
                            onChange={(e) => {
                                setFilterValue({ ...filterValue, month: e.target.value });
                            }}
                        >
                            <option value="0">Chọn tháng</option>
                            <option value="1">Tháng 1</option>
                            <option value="2">Tháng 2</option>
                            <option value="3">Tháng 3</option>
                            <option value="4">Tháng 4</option>
                            <option value="5">Tháng 5</option>
                            <option value="6">Tháng 6</option>
                            <option value="7">Tháng 7</option>
                            <option value="8">Tháng 8</option>
                            <option value="9">Tháng 9</option>
                            <option value="10">Tháng 10</option>
                            <option value="11">Tháng 11</option>
                            <option value="12">Tháng 12</option>
                        </select>
                        <select
                            id="year"
                            value={filterValue.year}
                            onChange={(e) => {
                                setFilterValue({ ...filterValue, year: e.target.value });
                            }}
                        >
                            <option value="0">Chọn năm</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                        <button
                            className={cx(
                                'filter',
                                filterValue.top != 0 && filterValue.month != 0 && filterValue.year != 0
                                    ? 'enable'
                                    : 'disable',
                            )}
                            onClick={handleFilter}
                        >
                            ĐI
                        </button>
                        <button className={cx('unfilter', submitValue ? 'enable' : 'disable')} onClick={handleUnFilter}>
                            HỦY
                        </button>
                    </div>
                </>
            )}
            {filterInfo.map((theatre, index) => (
                <div className={cx('theatre')} key={index}>
                    <img src={theatreImage(theatre.ma_rap_phim)} alt=" " />
                    <div className={cx('content')}>
                        <div className={cx('info')}>
                            <h1>CINESTAR {theatre.ten_rap}</h1>
                            <div>
                                <p className={cx('label')}>ĐỊA CHỈ:</p>
                                <p>{theatre.dia_chi}</p>
                            </div>
                            <div>
                                <p className={cx('label')}>TÊN QUẢN LÝ:</p>
                                <p>{theatre.ten_quan_ly}</p>
                            </div>
                            <div>
                                <p className={cx('label')}>HOTLINE:</p>
                                <p>{theatre.hotline}</p>
                            </div>
                            <div>
                                <p className={cx('label')}>THỜI GIAN MỞ:</p>
                                <p>
                                    {theatre.thoi_gian_mo} - {theatre.thoi_gian_dong}
                                </p>
                            </div>
                            {theatre.tong_doanh_thu && (
                                <div>
                                    <p className={cx('label')}>
                                        DOANH THU TRONG {submitValue?.month}/{submitValue?.year}:
                                    </p>
                                    <p>{theatre.tong_doanh_thu}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Theatres;
