import { useState, useEffect } from 'react';
import axios from '../../utils/axios';

import classNames from 'classnames/bind';
import styles from './Bill.module.scss';

const cx = classNames.bind(styles);

function Bill() {
    const [allBill, setAllBill] = useState([]);
    const [filterBill, setFilterBill] = useState([]);
    useEffect(() => {
        const getAllBill = async () => {
            const res = await axios.get('/customer/bill/all');
            if (res) {
                setAllBill(res);
                setFilterBill(res);
            }
        };
        getAllBill();
    }, []);

    const [filterValue, setFilterValue] = useState({ total: '', start: '', end: '' });
    const [submitValue, setSubmitValue] = useState(null);
    const handleFilter1 = async () => {
        if (filterValue.total !== '' && filterValue.start !== '' && filterValue.end !== '') {
            setSubmitValue({ ...filterValue });
            const res1 = await axios.get('/customer/bill/some', { params: { ...filterValue } });
            if (res1) setFilterBill(res1);
        }
    };
    const handleUnFilter1 = () => {
        if (submitValue) {
            setSubmitValue(null);
            setFilterValue({ total: '', start: '', end: '' });
            setFilterBill(allBill);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>KHÁCH HÀNG CÓ HÓA ĐƠN X(đ) TRỞ LÊN</h1>
            <div className={cx('filter')}>
                <div>
                    <label htmlFor="total">Tổng giá</label>
                    <input
                        id="total"
                        type="number"
                        value={filterValue.total}
                        placeholder="Nhập tổng giá(đ)"
                        onChange={(e) => {
                            setFilterValue({ ...filterValue, total: e.target.value });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="start">Từ ngày</label>
                    <input
                        type="date"
                        id="start"
                        value={filterValue.start}
                        onChange={(e) => {
                            setFilterValue({ ...filterValue, start: e.target.value });
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="end">Đến ngày</label>
                    <input
                        type="date"
                        id="end"
                        value={filterValue.end}
                        onChange={(e) => {
                            setFilterValue({ ...filterValue, end: e.target.value });
                        }}
                    />
                </div>
                <button
                    className={cx(
                        'filter',
                        filterValue.total != 0 && filterValue.start !== '' && filterValue.end !== ''
                            ? 'enable'
                            : 'disable',
                    )}
                    onClick={handleFilter1}
                >
                    ĐI
                </button>
                <button className={cx('unfilter', submitValue ? 'enable' : 'disable')} onClick={handleUnFilter1}>
                    HỦY
                </button>
            </div>
            {submitValue ? (
                <h1>
                    HÓA ĐƠN TRÊN <span>{submitValue.total}đ</span> TỪ <span>{submitValue.start}</span> ĐẾN{' '}
                    <span>{submitValue.end}</span>
                </h1>
            ) : (
                <h1>TẤT CẢ HÓA ĐƠN</h1>
            )}
            <div className={cx('content')}>
                <table>
                    <tbody>
                        <tr>
                            <th>Mã khách hàng</th>
                            <th>Tên</th>
                            <th>Số điện thoại</th>
                            <th>Mã hóa đơn</th>
                            <th>Thời gian giao dịch</th>
                            <th>Ngày giao dịch</th>
                            <th>Tổng giá</th>
                        </tr>
                        {filterBill.map((bill, index) => (
                            <tr key={index}>
                                <td>{bill.ma_khach_hang}</td>
                                <td>{bill.ten}</td>
                                <td>{bill.sdt}</td>
                                <td>{bill.ma_hoa_don}</td>
                                <td>{bill.thoi_gian_giao_dich}</td>
                                <td>{bill.ngay_giao_dich}</td>
                                <td>{bill.tong_gia}đ</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Bill;
