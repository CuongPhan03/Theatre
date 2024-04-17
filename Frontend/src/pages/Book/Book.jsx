import { useState, useEffect } from 'react';
import { NavLink, useParams, useSearchParams } from 'react-router-dom';
import axios from '../../utils/axios';
import filmImage from '../../utils/filmImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './Book.module.scss';
const cx = classNames.bind(styles);

function Book() {
    const [progress, setProgress] = useState(1);

    const { filmId } = useParams();

    const [searchParams] = useSearchParams();
    const theatreId = searchParams.get('theatre');
    const date = searchParams.get('date');
    const time = searchParams.get('time');

    const [filmInfo, setFilmInfo] = useState({ filmName: '', theatreName: '', screen: 0 });
    const [info1, setInfo1] = useState([]);
    const [info2, setInfo2] = useState([]);
    useEffect(() => {
        window.scrollTo(0, 0);
        const getInfos = async () => {
            const res1 = await axios.get('/movies/getname', { params: { filmId: filmId } });
            const res2 = await axios.get('/theatres/getname', { params: { theatreId: theatreId } });
            const res3 = await axios.get('/screen', {
                params: { theatreId: theatreId, filmId: filmId, date: date, time: time },
            });
            const res4 = await axios.get('/screen/chairs/info', {
                params: { theatreId: theatreId, screenId: res3.ma_so_phong },
            });
            const res5 = await axios.get('/screen/foods');
            if (res1 && res2 && res3) setFilmInfo({ filmName: res1, theatreName: res2, screen: res3.ma_so_phong });
            if (res4) setInfo1(res4);
            if (res5) setInfo2(res5);
        };
        getInfos();
    }, []);

    const [normal, setNormal] = useState(0);
    const [vip, setVip] = useState(0);
    const [corn, setCorn] = useState(0);
    const [coca, setCoca] = useState(0);
    const [sprite, setSprite] = useState(0);
    const [lays, setLays] = useState(0);

    const chairInfo = info1.map((info, index) => {
        const newInfo = { ...info };
        if (index === 0) {
            newInfo.quantity = normal;
            newInfo.setQuantity = setNormal;
        } else {
            newInfo.quantity = vip;
            newInfo.setQuantity = setVip;
        }
        return newInfo;
    });
    const foodInfo = info2.map((info, index) => {
        const newInfo = { ...info };
        if (index === 0) {
            newInfo.quantity = corn;
            newInfo.setQuantity = setCorn;
        } else if (index === 1) {
            newInfo.quantity = coca;
            newInfo.setQuantity = setCoca;
        } else if (index === 2) {
            newInfo.quantity = sprite;
            newInfo.setQuantity = setSprite;
        } else {
            newInfo.quantity = lays;
            newInfo.setQuantity = setLays;
        }
        return newInfo;
    });

    const chairTotal = chairInfo.reduce((result, product) => result + product.quantity * product.gia, 0);
    const foodTotal = foodInfo.reduce((result, product) => result + product.quantity * product.gia, 0);
    const subTotal = chairTotal + foodTotal;
    const renderTable = (productInfo) => {
        return (
            <div className={cx('wrap-table')}>
                <table>
                    <tbody>
                        <tr>
                            <th>Loại</th>
                            <th>Giá (vnd)</th>
                            <th>Số lượng</th>
                        </tr>
                        {productInfo.map((product, index) => (
                            <tr key={index}>
                                <td>{product.loai_ghe || product.ten}</td>
                                <td>{product.gia}</td>
                                <td>
                                    <div>
                                        <button
                                            onClick={() => {
                                                if (product.quantity > 0) product.setQuantity(product.quantity - 1);
                                            }}
                                        >
                                            &minus;
                                        </button>
                                        <input type="number" value={product.quantity} disabled name="quantity" />
                                        <button onClick={() => product.setQuantity(product.quantity + 1)}>+</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    const [chairs, setChairs] = useState({ normal: [], vip: [] });
    useEffect(() => {
        if (progress === 1) {
            const getChairs = async () => {
                const res1 = await axios.get('/screen', {
                    params: { theatreId: theatreId, filmId: filmId, date: date, time: time },
                });
                const res2 = await axios.get('/screen/chairs/all', {
                    params: { theatreId: theatreId, screenId: res1.ma_so_phong },
                });
                setChairs(res2);
            };
            getChairs();
        }
    }, [progress]);

    const handleSelect = (index, chair, type) => {
        if (chair.tinh_trang_ghe !== 'sold') {
            const chairsClone = structuredClone(chairs);
            let typeArr, chairType;
            if (type === 'normal') {
                typeArr = chairsClone.normal;
                chairType = chairInfo[0];
            } else if (type === 'vip') {
                typeArr = chairsClone.vip;
                chairType = chairInfo[1];
            }
            const selectedNum = typeArr.reduce(
                (result, chair) => result + (chair.tinh_trang_ghe === 'selected' ? 1 : 0),
                0,
            );
            if (chair.tinh_trang_ghe === 'available') {
                if (selectedNum < chairType.quantity) {
                    typeArr[index].tinh_trang_ghe = 'selected';
                }
            } else {
                typeArr[index].tinh_trang_ghe = 'available';
            }
            setChairs(chairsClone);
        }
    };

    const [myChairs, setMyChairs] = useState({ normal: [], vip: [] });
    const checkNumChairs = () => {
        const normalNum = chairs.normal.filter((chair) => chair.tinh_trang_ghe === 'selected').length;
        const vipNum = chairs.vip.filter((chair) => chair.tinh_trang_ghe === 'selected').length;
        if (normalNum === normal && vipNum === vip) return true;
        else return false;
    };
    const [discounts, setDiscounts] = useState([]);
    const [discSelect, setDiscSelect] = useState('');
    const toPayPage = async () => {
        if (checkNumChairs()) {
            const mySelect = { normal: [], vip: [] };
            chairs.normal.forEach(
                (chair) => chair.tinh_trang_ghe === 'selected' && mySelect.normal.push(chair.ma_so_ghe),
            );
            chairs.vip.forEach((chair) => chair.tinh_trang_ghe === 'selected' && mySelect.vip.push(chair.ma_so_ghe));
            const res = await axios.get('/customer/discount', { params: { subTotal: subTotal } });
            if (res) setDiscounts(res);
            setMyChairs(mySelect);
            window.scrollTo(0, 0);
            setProgress(3);
        }
    };

    const [cusInfo, setCusInfo] = useState({ ma_khach_hang: null, ten: '', sdt: '', diem_tich_luy: null });
    const checkCustomer = async () => {
        if (cusInfo.ten !== '' && cusInfo.sdt !== '') {
            const res = await axios.get('/customer', { params: { name: cusInfo.ten, phone: cusInfo.sdt } });
            setCusInfo({ ...cusInfo, ...res });
        }
    };
    const [usePoints, setUsePoints] = useState(false);
    const pointMoney = usePoints ? cusInfo?.diem_tich_luy * 10 : 0;
    const discMoney = discSelect !== '' ? discounts.find((disc) => disc.ma_dot_km === discSelect).duoc_giam : 0;
    const total = subTotal - pointMoney - discMoney;
    const [billId, setBillId] = useState(0);
    const handlePaySubmit = async () => {
        if (cusInfo.diem_tich_luy !== null) {
            const res = await axios.post('/customer/bill/create', { theatreId: theatreId });
            if (res) setBillId(res.billId);
            const postFood = [];
            foodInfo.forEach((food) => {
                if (food.quantity > 0) {
                    postFood.push({ id: food.id_doan, quantity: food.quantity });
                }
            });
            await axios.post('/customer/bill/submit', {
                chairs: [...myChairs.normal, ...myChairs.vip],
                foods: postFood,
                billId: res.billId,
                cusId: cusInfo.ma_khach_hang,
                usePoints: usePoints ? cusInfo.diem_tich_luy : 0,
                pointMoney: usePoints && pointMoney <= total - discMoney ? cusInfo.diem_tich_luy * 10 : 0,
                code: discSelect === '' ? null : discSelect,
                discMoney: discMoney,
                theatreId: theatreId,
                screen: filmInfo.screen,
                date: date + ' ' + time,
            });
            window.scrollTo(0, 0);
            setProgress(4);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ol className={cx('breadcrumb')}>
                <li className={cx(progress === 4 && 'current')}>Thành công</li>
                <li className={cx(progress === 3 && 'current', progress > 3 && 'done')}>Thanh toán</li>
                <li className={cx(progress === 2 && 'current', progress > 2 && 'done')}>Chọn ghế</li>
                <li className={cx(progress === 1 && 'current', progress > 1 && 'done')}>Chọn vé</li>
            </ol>
            <div className={cx('container')}>
                {progress === 1 && (
                    <div className={cx('content1')}>
                        <div className={cx('book-area')}>
                            <div className={cx('film')}>
                                <img src={filmImage(filmId)} className={cx('film-image')} />
                                <div className={cx('film-info')}>
                                    <h1>{filmInfo.filmName}</h1>
                                    <div>
                                        <p className={cx('label')}>Rạp:</p>
                                        <p>{filmInfo.theatreName}</p>
                                    </div>
                                    <div>
                                        <p className={cx('label')}>Phòng chiếu:</p>
                                        <p>{filmInfo.screen}</p>
                                    </div>
                                    <div>
                                        <p className={cx('label')}>Ngày chiếu:</p>
                                        <p>{date}</p>
                                    </div>
                                    <div>
                                        <p className={cx('label')}>Suất chiếu:</p>
                                        <p>{time}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('tables')}>
                                <div className={cx('book', 'chair')}>
                                    <h3>Ghế</h3>
                                    {renderTable(chairInfo)}
                                </div>
                                <div className={cx('book', 'food')}>
                                    <h3>Đồ ăn</h3>
                                    {renderTable(foodInfo)}
                                </div>
                            </div>
                        </div>
                        <div className={cx('cart')}>
                            <h2>Giỏ hàng</h2>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Vé</th>
                                            <th>Số lượng</th>
                                            <th>Tổng cộng</th>
                                        </tr>
                                        {chairInfo.map(
                                            (product, index) =>
                                                product.quantity > 0 && (
                                                    <tr key={index}>
                                                        <td>{filmInfo.filmName}</td>
                                                        <td>
                                                            {product.loai_ghe} x {product.quantity}
                                                        </td>
                                                        <td>{product.quantity * product.gia}</td>
                                                    </tr>
                                                ),
                                        )}
                                        {foodInfo.map(
                                            (product, index) =>
                                                product.quantity > 0 && (
                                                    <tr key={index}>
                                                        <td>{product.ten}</td>
                                                        <td>x {product.quantity}</td>
                                                        <td>{product.quantity * product.gia}</td>
                                                    </tr>
                                                ),
                                        )}
                                    </tbody>
                                </table>
                                <p> Tổng cộng : {subTotal} vnd</p>
                            </div>
                            <button
                                onClick={() => {
                                    if (chairTotal > 0) {
                                        window.scrollTo(0, 0);
                                        setProgress(2);
                                    }
                                }}
                                className={cx(chairTotal > 0 ? 'enable' : 'disable')}
                            >
                                CHỌN GHẾ
                            </button>
                        </div>
                    </div>
                )}
                {progress === 2 && (
                    <div className={cx('content2')}>
                        <div className={cx('room')}>
                            <h1>Màn Hình</h1>
                            <div className={cx('chairs-area')}>
                                <div className={cx('chairs', 'normal')}>
                                    {chairs.normal.map((chair, index) => (
                                        <button
                                            key={index}
                                            className={cx(chair.tinh_trang_ghe)}
                                            onClick={() => {
                                                handleSelect(index, chair, 'normal');
                                            }}
                                        >
                                            {chair.ma_so_ghe}
                                        </button>
                                    ))}
                                </div>
                                <div className={cx('chairs', 'vip')}>
                                    {chairs.vip.map((chair, index) => (
                                        <button
                                            key={index}
                                            className={cx(chair.tinh_trang_ghe)}
                                            onClick={() => {
                                                handleSelect(index, chair, 'vip');
                                            }}
                                        >
                                            {chair.ma_so_ghe}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('film')}>
                                <h2>{filmInfo.filmName}</h2>
                                <p>Phòng chiếu: {filmInfo.screen}</p>
                                <p>
                                    Chọn {chairInfo[0].quantity} "ghế Thường" và {chairInfo[1].quantity} "ghế VIP"
                                </p>
                            </div>
                            <p>Trạng thái ghế: </p>
                            <div className={cx('status')}>
                                <p>Ghế trống</p>
                                <p className={cx('sold')}>Ghế đã bán</p>
                                <p className={cx('selected')}>Ghế đang chọn</p>
                            </div>
                            <div className={cx('buttons')}>
                                <button
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        setProgress(1);
                                    }}
                                >
                                    Quay lại
                                </button>
                                <button onClick={toPayPage} className={cx(checkNumChairs() ? 'enable' : 'disable')}>
                                    Thanh toán
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {progress === 3 && (
                    <div className={cx('content3')}>
                        <div className={cx('cart')}>
                            <h2>Giỏ hàng</h2>
                            <div>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>Vé</th>
                                            <th>Số lượng</th>
                                            <th>Số ghế</th>
                                            <th>Tổng cộng</th>
                                        </tr>
                                        {chairInfo.map(
                                            (product, index) =>
                                                product.quantity > 0 && (
                                                    <tr key={index}>
                                                        <td>{filmInfo.filmName}</td>
                                                        <td>
                                                            {product.loai_ghe} x {product.quantity}
                                                        </td>
                                                        <td>
                                                            {(index === 0 ? myChairs.normal : myChairs.vip).toString()}
                                                        </td>
                                                        <td>{product.quantity * product.gia}</td>
                                                    </tr>
                                                ),
                                        )}
                                        {foodInfo.map(
                                            (product, index) =>
                                                product.quantity > 0 && (
                                                    <tr key={index}>
                                                        <td>{product.ten}</td>
                                                        <td>x {product.quantity}</td>
                                                        <td></td>
                                                        <td>{product.quantity * product.gia}</td>
                                                    </tr>
                                                ),
                                        )}
                                    </tbody>
                                </table>
                                <p className={cx('subtotal')}>Tổng: {subTotal} vnd</p>
                                {usePoints && cusInfo.diem_tich_luy !== 0 && cusInfo.diem_tich_luy !== null && (
                                    <p>Điểm stích lũy : -{pointMoney} vnd</p>
                                )}
                                {discSelect !== '' && (
                                    <p>
                                        Khuyến mãi '{discSelect}' : -{discMoney} vnd
                                    </p>
                                )}
                                <p className={cx('total')}>Tổng cộng : {total} vnd</p>
                            </div>
                        </div>
                        <div className={cx('form')}>
                            <h2>Thông tin khách hàng</h2>
                            <div className={cx('customer')}>
                                <div>
                                    <div className={cx('row')}>
                                        <label htmlFor="name">Họ và tên:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={cusInfo.ten}
                                            onChange={(e) => {
                                                setCusInfo({
                                                    ...cusInfo,
                                                    ten: e.target.value,
                                                    diem_tich_luy: null,
                                                    ma_khach_hang: null,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className={cx('row')}>
                                        <label htmlFor="phone">Số điện thoại:</label>
                                        <input
                                            type="text"
                                            id="phone"
                                            value={cusInfo.sdt}
                                            onChange={(e) => {
                                                setCusInfo({
                                                    ...cusInfo,
                                                    sdt: e.target.value,
                                                    diem_tich_luy: null,
                                                    ma_khach_hang: null,
                                                });
                                            }}
                                        />
                                    </div>
                                </div>
                                <button
                                    className={cx(cusInfo.ten != '' && cusInfo.sdt != '' ? 'enable' : 'disable')}
                                    onClick={checkCustomer}
                                >
                                    Kiểm tra
                                </button>
                            </div>
                            <div className={cx('row', 'points')}>
                                <label>Điểm tích lũy:</label>
                                {cusInfo.diem_tich_luy !== null && pointMoney <= total - discMoney && (
                                    <>
                                        <p>{cusInfo.diem_tich_luy} điểm</p>
                                        {cusInfo.diem_tich_luy !== 0 && (
                                            <button
                                                onClick={() => setUsePoints(!usePoints)}
                                                className={cx(usePoints && 'noselect')}
                                            >
                                                Sử dụng
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                            <div className={cx('row')}>
                                <label htmlFor="discount">Khuyến mãi: </label>
                                <select
                                    id="discount"
                                    value={discSelect}
                                    onChange={(e) => setDiscSelect(e.target.value)}
                                >
                                    <option value="">---- select ----</option>
                                    {discounts.map((disc, index) => (
                                        <option value={disc.ma_dot_km} key={index}>
                                            {disc.ten_dot}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className={cx('row')}>
                                <label htmlFor="method">Phương thức thanh toán: </label>
                                <select id="method">
                                    <option value="0">---- select ----</option>
                                    <option value="1">Ví điện tử Momo</option>
                                    <option value="2">Internet Banking</option>
                                </select>
                            </div>
                            <div className={cx('buttons')}>
                                <button
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                        setProgress(2);
                                    }}
                                >
                                    Quay lại
                                </button>
                                <button
                                    onClick={handlePaySubmit}
                                    className={cx(cusInfo.diem_tich_luy !== null ? 'enable' : 'disable')}
                                >
                                    Xác Nhận
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {progress === 4 && (
                    <div className={cx('content4')}>
                        <div className={cx('wrap-content')}>
                            <FontAwesomeIcon icon={faCircleCheck} className={cx('icon')} />
                            <h1>Đặt vé thành công !</h1>
                            <div className={cx('film-info')}>
                                <h2>{filmInfo.filmName}</h2>
                                <div>
                                    <p className={cx('label')}>Rạp:</p>
                                    <p>{filmInfo.theatreName}</p>
                                </div>
                                <div>
                                    <p className={cx('label')}>Phòng chiếu:</p>
                                    <p>{filmInfo.screen}</p>
                                </div>
                                <div>
                                    <p className={cx('label')}>Ngày:</p>
                                    <p>{date}</p>
                                </div>
                                <div>
                                    <p className={cx('label')}>Suất chiếu:</p>
                                    <p>{time}</p>
                                </div>
                            </div>
                            <div className={cx('cart')}>
                                <h2>Mã hóa đơn: #{billId}</h2>
                                <div>
                                    <table>
                                        <tbody>
                                            {chairInfo.map(
                                                (product, index) =>
                                                    product.quantity > 0 && (
                                                        <tr key={index}>
                                                            <td>Ghế {product.loai_ghe}</td>
                                                            <td>
                                                                {(index === 0 ? myChairs.normal : myChairs.vip).join(
                                                                    ', ',
                                                                )}
                                                            </td>
                                                            <td>{product.quantity * product.gia}</td>
                                                        </tr>
                                                    ),
                                            )}
                                            {foodInfo.map(
                                                (product, index) =>
                                                    product.quantity > 0 && (
                                                        <tr key={index}>
                                                            <td>{product.ten}</td>
                                                            <td>x {product.quantity}</td>
                                                            <td>{product.quantity * product.gia}</td>
                                                        </tr>
                                                    ),
                                            )}
                                        </tbody>
                                    </table>
                                    <p className={cx('subtotal')}>Tổng: {subTotal} vnd</p>
                                    {usePoints && cusInfo.diem_tich_luy !== 0 && cusInfo.diem_tich_luy !== null && (
                                        <p>Điểm stích lũy : -{pointMoney} vnd</p>
                                    )}
                                    {discSelect !== '' && (
                                        <p>
                                            Khuyến mãi '{discSelect}' : -{discMoney} vnd
                                        </p>
                                    )}
                                    <p className={cx('total')}>Tổng cộng : {total} vnd</p>
                                </div>
                            </div>
                            <NavLink to="/" className={cx('home-link')}>
                                VỀ TRANG CHỦ
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>{' '}
        </div>
    );
}

export default Book;
