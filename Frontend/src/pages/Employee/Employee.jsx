import { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import Modal from '../../component/Modal/Modal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash, faCircleInfo, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Employee.module.scss';
const cx = classNames.bind(styles);

function Employee() {
    const [allEmployee, setAllEmployee] = useState([]);
    const [theatres, setTheatres] = useState([]);
    const getAllEmployee = async () => {
        const res1 = await axios.get('/employee');
        const res2 = await axios.get('/theatres/getinfo');
        if (res1) setAllEmployee(res1);
        if (res2) setTheatres(res2);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
        getAllEmployee();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const handleCancelModal = (isUpdate) => {
        setShowModal(false);
        if (isUpdate) getAllEmployee();
    };
    const [currEmpModal, setCurrEmpModal] = useState();
    const handleShowModal = (empId, empName, action) => {
        setCurrEmpModal({ empId: empId, empName: empName, action: action });
        setShowModal(true);
    };

    return (
        <div className={cx('wrapper')}>
            <button onClick={() => handleShowModal(0, '', 'insert')}>
                <FontAwesomeIcon icon={faPlus} /> &nbsp; Thêm nhân viên
            </button>
            {allEmployee.map((role, index) => (
                <div className={cx('role')} key={index}>
                    <h2>{role.role}</h2>
                    <div className={cx('wrap-table')}>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Tên</th>
                                    <th>Giới tính</th>
                                    <th>Số điện thoại</th>
                                    <th>Rạp phụ trách</th>
                                    <th>Trạng thái</th>
                                    <th></th>
                                </tr>
                                {role.employees.map((employee, id) => (
                                    <tr key={id}>
                                        <td>{employee.ten}</td>
                                        <td>{employee.gioi_tinh}</td>
                                        <td>{employee.sdt}</td>
                                        <td>
                                            {theatres.find((theatre) => theatre.ma_rap_phim === employee.rap_phu_trach)
                                                ?.ten_rap || 'Tổng quản lý'}
                                        </td>
                                        <td>{employee.trang_thai === 1 ? 'Đang làm' : 'Tạm nghỉ'}</td>
                                        <td>
                                            <button
                                                className={cx('btn', 'info')}
                                                title="Chi tiết"
                                                onClick={() => {
                                                    handleShowModal(employee.ma_nhan_vien, '', 'read');
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faCircleInfo} />
                                            </button>
                                            <button
                                                className={cx('btn', 'edit')}
                                                title="Sửa"
                                                onClick={() => {
                                                    handleShowModal(employee.ma_nhan_vien, '', 'edit');
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                            <button
                                                className={cx('btn', 'delete')}
                                                title="Xóa"
                                                onClick={() => {
                                                    handleShowModal(employee.ma_nhan_vien, employee.ten, 'delete');
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
            {showModal && <Modal onCancel={handleCancelModal} {...currEmpModal} />}
        </div>
    );
}

export default Employee;
