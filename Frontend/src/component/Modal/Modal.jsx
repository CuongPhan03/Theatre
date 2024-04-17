import { useState, useEffect } from 'react';
import axios from '../../utils/axios';

import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
const cx = classNames.bind(styles);

function Modal({ onCancel, empId, empName, action }) {
    const [empInfo, setEmpInfo] = useState({
        cccd: '',
        ten: '',
        gioi_tinh: 'Nam',
        nam_sinh: '',
        sdt: '',
        dia_chi: '',
        ma_nhan_vien: '',
        loai_nhan_vien: 'Nhân viên quầy',
        luong: '',
        rap_phu_trach: 'HCM',
        trang_thai: 1,
        bang_cap: '',
        thu_trong_tuan: '2-4-6',
        tg_bat_dau: '08:00',
        tg_ket_thuc: '17:00',
    });
    const [submitInfo, setSubmitInfo] = useState({ ...empInfo });
    const [theatres, setTheatres] = useState([]);
    const [roles, setRoles] = useState([]);
    useEffect(() => {
        if (action !== 'delete') {
            if (action !== 'insert') {
                const getEmpInfo = async () => {
                    const res = await axios.get(`/employee/${empId}`);
                    if (res) {
                        setEmpInfo(res);
                        setSubmitInfo(res);
                    }
                };
                getEmpInfo(empId);
            }
            const getInputSelects = async () => {
                const res1 = await axios.get('/theatres/getinfo');
                const res2 = await axios.get('/employee/getallrole');
                if (res1) setTheatres(res1);
                if (res2) setRoles(res2);
            };
            getInputSelects();
        }
    }, []);

    const handleInsert = async () => {
        let inserted = false;
        try {
            const postInfo = { ...submitInfo };
            delete postInfo.ma_nhan_vien;
            delete postInfo.trang_thai;
            await axios.post('/employee/insert', postInfo);
            alert('Thêm nhân viên thành công.');
            inserted = true;
        } catch {
            alert('Không thế thêm nhân viên !!!');
        }
        onCancel(inserted);
    };
    const handleUpdate = async () => {
        if (JSON.stringify(empInfo) !== JSON.stringify(submitInfo)) {
            let updated = false;
            try {
                await axios.put(`/employee/${empId}`, { ...submitInfo });
                alert(`Cập nhật nhân viên "${empInfo.ten}" thành công.`);
                updated = true;
            } catch {
                alert(`Không thế cập nhật nhân viên "${empInfo.ten}" !!!`);
            }
            onCancel(updated);
        }
    };
    const handleDelete = async () => {
        try {
            await axios.delete(`/employee/${empId}`);
            alert(`Xóa nhân viên "${empName}" thành công.`);
        } catch {
            alert(`Không thế xóa nhân viên "${empName}" !!!`);
        }
        onCancel(true);
    };

    const header =
        action === 'read'
            ? 'Thông tin'
            : action === 'insert'
            ? 'Thêm nhân viên'
            : action === 'edit'
            ? 'Chỉnh sửa'
            : 'Xoá';

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <header
                    className={cx(
                        action === 'read'
                            ? 'read'
                            : action === 'insert'
                            ? 'insert'
                            : action === 'edit'
                            ? 'edit'
                            : 'delete',
                    )}
                >
                    <h2>{header}</h2>
                    <button onClick={onCancel}>&times;</button>
                </header>
                {action === 'delete' ? (
                    <div className={cx('content')}>
                        <p>Bạn có muốn xóa nhân viên "{empName}" không ?</p>
                    </div>
                ) : (
                    <div className={cx('form')}>
                        <h2>Thông tin cá nhân</h2>
                        <div className={cx('row')}>
                            <label htmlFor="cccd">CCCD</label>
                            <input
                                type="text"
                                id="cccd"
                                disabled={action === 'read'}
                                value={submitInfo.cccd}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, cccd: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="name">Tên</label>
                            <input
                                type="text"
                                id="name"
                                disabled={action === 'read'}
                                value={submitInfo.ten}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, ten: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label>Giới tính</label>
                            <div className={cx('gender')}>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        disabled={action === 'read'}
                                        checked={submitInfo.gioi_tinh === 'Nam'}
                                        onChange={() => {
                                            setSubmitInfo({ ...submitInfo, gioi_tinh: 'Nam' });
                                        }}
                                    />
                                    &nbsp; Nam
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        disabled={action === 'read'}
                                        checked={submitInfo.gioi_tinh === 'Nữ'}
                                        onChange={() => {
                                            setSubmitInfo({ ...submitInfo, gioi_tinh: 'Nữ' });
                                        }}
                                    />
                                    &nbsp; Nữ
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="gender"
                                        disabled={action === 'read'}
                                        checked={submitInfo.gioi_tinh === 'Khác'}
                                        onChange={() => {
                                            setSubmitInfo({ ...submitInfo, gioi_tinh: 'Khác' });
                                        }}
                                    />
                                    &nbsp; Khác
                                </label>
                            </div>
                            {/* <select
                                id="gender"
                                disabled={action === 'read'}
                                value={submitInfo.gioi_tinh}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, gioi_tinh: e.target.value });
                                }}
                            >
                                <option value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                                <option value="Khác">Khác</option>
                            </select> */}
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="birth">Năm sinh (mm/dd/yyyy)</label>
                            <input
                                type="date"
                                id="birth"
                                disabled={action === 'read'}
                                value={submitInfo.nam_sinh}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, nam_sinh: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="phone">Số điện thoại</label>
                            <input
                                type="text"
                                id="phone"
                                disabled={action === 'read'}
                                value={submitInfo.sdt}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, sdt: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="address">Địa chỉ</label>
                            <input
                                type="text"
                                id="address"
                                disabled={action === 'read'}
                                value={submitInfo.dia_chi}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, dia_chi: e.target.value });
                                }}
                            />
                        </div>
                        <h2>Thông tin việc làm</h2>
                        {action !== 'insert' && (
                            <div className={cx('row')}>
                                <label htmlFor="id">Mã nhân viên</label>
                                <input type="text" id="id" disabled value={submitInfo.ma_nhan_vien} />
                            </div>
                        )}
                        <div className={cx('row')}>
                            <label htmlFor="role">Loại nhân viên</label>
                            <select
                                id="role"
                                disabled={action === 'read' || empInfo.loai_nhan_vien === 'Nhà quản lý'}
                                value={submitInfo.loai_nhan_vien}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, loai_nhan_vien: e.target.value });
                                }}
                            >
                                {roles.map((role, index) => (
                                    <option key={index}>{role}</option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="salary">Lương</label>
                            <input
                                type="number"
                                id="salary"
                                min={0}
                                step={100000}
                                disabled={action === 'read'}
                                value={submitInfo.luong}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, luong: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="theatre">Rạp phụ trách</label>
                            <select
                                id="theatre"
                                disabled={
                                    action === 'read' ||
                                    (!empInfo.rap_phu_trach && empInfo.loai_nhan_vien === 'Nhà quản lý')
                                }
                                value={submitInfo.rap_phu_trach}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, rap_phu_trach: e.target.value });
                                }}
                            >
                                {submitInfo.loai_nhan_vien === 'Nhà quản lý' && (
                                    <option value={null}>Tổng quản lý</option>
                                )}
                                {theatres.map((theatre, index) => (
                                    <option key={index} value={theatre.ma_rap_phim}>
                                        {theatre.ten_rap}
                                    </option>
                                ))}
                            </select>
                        </div>
                        {action !== 'insert' && (
                            <div className={cx('row')}>
                                <label htmlFor="status">Trạng thái</label>
                                <select
                                    id="status"
                                    disabled={action === 'read'}
                                    value={submitInfo.trang_thai}
                                    onChange={(e) => {
                                        setSubmitInfo({ ...submitInfo, trang_thai: parseInt(e.target.value) });
                                    }}
                                >
                                    <option value={0}>Tạm nghỉ</option>
                                    <option value={1}>Đang làm</option>
                                </select>
                            </div>
                        )}
                        <div className={cx('row')}>
                            <label htmlFor="certificate">Bằng cấp</label>
                            <input
                                type="text"
                                id="certificate"
                                disabled={action === 'read'}
                                value={submitInfo.bang_cap}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, bang_cap: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="numday">Thứ trong tuần</label>
                            <select
                                id="numday"
                                disabled={action === 'read'}
                                value={submitInfo.thu_trong_tuan}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, thu_trong_tuan: e.target.value });
                                }}
                            >
                                <option value="2-4-6">Thứ 2 - 4 - 6</option>
                                <option value="3-5-7">Thứ 3 - 5 - 7</option>
                                <option value="2-4-6-CN">Thứ 2 - 4 - 6 - Chủ nhật</option>
                                <option value="3-5-7-CN">Thứ 3 - 5 - 7 - Chủ nhật</option>
                                <option value="FU">Cả tuần</option>
                            </select>
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="start">Thời gian bắt đầu</label>
                            <input
                                type="time"
                                id="start"
                                disabled={action === 'read'}
                                value={submitInfo.tg_bat_dau}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, tg_bat_dau: e.target.value });
                                }}
                            />
                        </div>
                        <div className={cx('row')}>
                            <label htmlFor="end">Thời gian kết thúc</label>
                            <input
                                type="time"
                                id="end"
                                disabled={action === 'read'}
                                value={submitInfo.tg_ket_thuc}
                                onChange={(e) => {
                                    setSubmitInfo({ ...submitInfo, tg_ket_thuc: e.target.value });
                                }}
                            />
                        </div>
                    </div>
                )}
                <footer>
                    <button className={cx(action === 'read' ? 'ok' : 'cancel')} onClick={() => onCancel(false)}>
                        {action === 'read' ? 'Ok' : action === 'delete' ? 'Không' : 'Hủy'}
                    </button>
                    {action === 'insert' && (
                        <button className={cx('insert')} onClick={handleInsert}>
                            Thêm
                        </button>
                    )}
                    {action === 'edit' && (
                        <button
                            className={cx(
                                'submit',
                                JSON.stringify(empInfo) === JSON.stringify(submitInfo) ? 'disable' : 'enable',
                            )}
                            onClick={handleUpdate}
                        >
                            Xác nhận
                        </button>
                    )}
                    {action === 'delete' && (
                        <button className={cx('delete')} onClick={handleDelete}>
                            Có
                        </button>
                    )}
                </footer>
            </div>
        </div>
    );
}

export default Modal;
