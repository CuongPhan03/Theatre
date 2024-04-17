const connection = require('../config/database');
class customerQuery {
    async getCustomer(name, phone) {
        let [results] = await connection.query(
            `SELECT ma_khach_hang, diem_tich_luy FROM KHACHHANG
             WHERE ten = ? AND sdt = ?`,
            [name, phone],
        );
        return results;
    }
    async addCustomer(name, phone) {
        let [results] = await connection.query(
            `INSERT INTO KHACHHANG  (ten, sdt, diem_tich_luy)
             VALUES (?, ?, 0)`,
            [name, phone],
        );
        return results;
    }
    async getAllBill() {
        let [results] = await connection.query(
            `SELECT hoadon.ma_khach_hang, ten, sdt, ma_hoa_don, thoi_gian_giao_dich, ngay_giao_dich, tong_gia
             FROM hoadon INNER JOIN khachhang ON (hoadon.ma_khach_hang = khachhang.ma_khach_hang);`,
        );
        return results;
    }
    async getSomeBill(total, start, end) {
        let [results] = await connection.query(`CALL findKH(?, ?, ?)`, [total, start, end]);
        console.log(results);
        return results;
    }
    async createBill(theatreId) {
        let [results] = await connection.query(
            `INSERT INTO HOADON (tong_gia, trang_thai, rap_xuat) 
             VALUES (${0}, 'Chưa thanh toán', ?)`,
            [theatreId],
        );
        return results;
    }
    async getDiscount() {
        let [results] = await connection.query(
            `SELECT ma_dot_km, ten_dot, phan_tram_duoc_giam, tien_duoc_giam FROM KHUYENMAI
             WHERE so_luot_su_dung > 0 
             AND NOW() BETWEEN ngay_bat_dau AND ngay_ket_thuc`,
        );
        return results;
    }
    async setCusIdBill(billId, cusId) {
        await connection.query(
            `UPDATE HOADON SET ma_khach_hang = ? , trang_thai = 'Đã thanh toán', thoi_gian_giao_dich = CURTIME(), ngay_giao_dich = CURDATE()
             WHERE ma_hoa_don = ?`,
            [cusId, billId],
        );
    }
    async addChairBill(theatreId, screen, chairId, date, billId) {
        await connection.query(`CALL themvephim(?, ?, ?, ?, ?)`, [theatreId, screen, chairId, date, billId]);
    }
    async addFoodBill(billId, foodId, quantity) {
        await connection.query(`INSERT INTO HOADON_BAOGOM_SANPHAM VALUES (?, ?, ?)`, [billId, foodId, quantity]);
    }
    async useDiscount(billId, code, discMoney) {
        await connection.query(
            `UPDATE HOADON SET tong_gia = tong_gia - ?, ma_dot_km = ?
             WHERE ma_hoa_don = ?`,
            [discMoney, code, billId],
        );
        await connection.query(
            `UPDATE KHUYENMAI SET so_luot_su_dung = so_luot_su_dung - 1
             WHERE ma_dot_km = ?`,
            [code],
        );
    }
    async usePoints(billId, pointMoney, usePoints, cusId) {
        await connection.query(
            `UPDATE HOADON SET tong_gia = tong_gia - ? 
             WHERE ma_hoa_don = ?`,
            [pointMoney, billId],
        );
        await connection.query(
            `UPDATE KHACHHANG SET diem_tich_luy = diem_tich_luy - ?
             WHERE ma_khach_hang = ?`,
            [usePoints, cusId],
        );
    }
}
module.exports = new customerQuery();
