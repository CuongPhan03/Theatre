const connection = require('../config/database');

class employeeQuery {
    async getAllRole() {
        let [results] = await connection.query(
            `SELECT loai_nhan_vien FROM nhanvien 
             GROUP BY loai_nhan_vien`,
        );
        return results;
    }
    async getRole(empId) {
        let [results] = await connection.query(
            `SELECT loai_nhan_vien FROM nhanvien 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        return results;
    }
    async getByRole(role) {
        let results = null;
        switch (role) {
            case 'Nhà quản lý':
                results = await connection.query('SELECT * FROM nhaquanly ');
                break;
            case 'Nhân viên điều phối':
                results = await connection.query('SELECT * FROM nhanviendieuphoi ');
                break;
            case 'Nhân viên quầy':
                results = await connection.query('SELECT * FROM nhanvienquay ');
                break;
            case 'Nhân viên kỹ thuật':
                results = await connection.query('SELECT * FROM nhanvienkythuat ');
                break;
        }
        return results[0];
    }
    async getName(empId) {
        let [results] = await connection.query(
            `SELECT ten FROM nhanvien 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        return results;
    }
    async getSomeInfo(empId) {
        let [results] = await connection.query(
            `SELECT ma_nhan_vien, ten, gioi_tinh, sdt, rap_phu_trach, trang_thai FROM nhanvien  
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        return results;
    }
    async getAllInfo(empId) {
        let [result1] = await connection.query(
            `SELECT * FROM nhanvien 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        let [result2] = await connection.query(
            `SELECT * FROM nhanvien_bangcap 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        let [result3] = await connection.query(
            `SELECT * FROM nhanvien_diachi 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        let [result4] = await connection.query(
            `SELECT * FROM nhanvien_thoigianlamviec 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        return { ...result1[0], ...result2[0], ...result3[0], ...result4[0] };
    }
    async insertEmployee(
        cccd,
        ten,
        gioi_tinh,
        nam_sinh,
        sdt,
        dia_chi,
        loai_nhan_vien,
        luong,
        rap_phu_trach,
        bang_cap,
        thu_trong_tuan,
        tg_bat_dau,
        tg_ket_thuc,
    ) {
        let [results] = await connection.query(`CALL ThemNhanVien(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, [
            cccd,
            ten,
            gioi_tinh,
            nam_sinh,
            sdt,
            dia_chi,
            loai_nhan_vien,
            luong,
            rap_phu_trach,
            bang_cap,
            thu_trong_tuan,
            tg_bat_dau,
            tg_ket_thuc,
        ]);
        return results;
    }
    async updateEmployee(empData, certData, addrData, timeData) {
        await connection.query(`CALL CapnhatNhanVien(?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`, empData);
        const [result1] = await connection.query(`SELECT * FROM nhanvien_bangcap WHERE ma_nhan_vien = ?`, [empData[0]]);
        if (result1.length === 0)
            await connection.query(`INSERT INTO nhanvien_bangcap VALUES(?, ?)`, [empData[0], certData]);
        else
            await connection.query(
                `UPDATE nhanvien_bangcap 
                SET bang_cap = ?
                WHERE ma_nhan_vien = ?`,
                [certData, empData[0]],
            );
        const [result2] = await connection.query(`SELECT * FROM nhanvien_diachi WHERE ma_nhan_vien = ?`, [empData[0]]);
        if (result2.length === 0)
            await connection.query(`INSERT INTO nhanvien_diachi VALUES(?, ?)`, [empData[0], addrData]);
        else
            await connection.query(
                `UPDATE nhanvien_diachi
                SET dia_chi = ?
                WHERE ma_nhan_vien = ?`,
                [addrData, empData[0]],
            );
        const [result3] = await connection.query(`SELECT * FROM nhanvien_thoigianlamviec WHERE ma_nhan_vien = ?`, [
            empData[0],
        ]);
        if (result3.length === 0)
            await connection.query(`INSERT INTO nhanvien_thoigianlamviec VALUES(?, ?, ?, ?)`, [
                empData[0],
                ...timeData,
            ]);
        else
            await connection.query(
                `UPDATE nhanvien_thoigianlamviec
                SET thu_trong_tuan = ?, tg_bat_dau = ?, tg_ket_thuc = ?
                WHERE ma_nhan_vien = ?`,
                [...timeData, empData[0]],
            );
    }
    async deleteEmployee(empId) {
        await connection.query(
            `DELETE FROM nhanvien_bangcap 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        await connection.query(
            `DELETE FROM nhanvien_diachi 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        await connection.query(
            `DELETE FROM nhanvien_thoigianlamviec 
             WHERE ma_nhan_vien = ?`,
            [empId],
        );
        let [results] = await connection.query(`CALL XoaNhanvien(?)`, [empId]);
        return results;
    }
}
module.exports = new employeeQuery();
