const employeeQuery = require('../services/employeeQuery');
const theatresQuery = require('../services/theatresQuery');

class employeeController {
    async getAllEmployee(req, res) {
        try {
            const results = [];
            const roles = await employeeQuery.getAllRole();
            const newRoles = ['Nhà quản lý'];
            roles.forEach((role) => {
                if (role.loai_nhan_vien !== 'Nhà quản lý') newRoles.push(role.loai_nhan_vien);
            });
            for (const role of newRoles) {
                results.push({ role: role, employees: [] });
                const rawIds = await employeeQuery.getByRole(role);
                const ids = rawIds.map((id) => id.ma_nhan_vien || id.ma_quan_ly);
                for (const id of ids) {
                    const employees = await employeeQuery.getSomeInfo(id);
                    results[results.length - 1].employees.push(employees[0]);
                }
            }
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllInfo(req, res) {
        try {
            const raw = await employeeQuery.getAllInfo(req.params.empId);
            raw.nam_sinh = raw.nam_sinh.toISOString().split('T')[0];
            res.send(raw);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async getAllRole(req, res) {
        try {
            const raw = await employeeQuery.getAllRole();
            const results = ['Nhà quản lý'];
            raw.forEach((role) => {
                if (role.loai_nhan_vien !== 'Nhà quản lý') results.push(role.loai_nhan_vien);
            });
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async insertEmployee(req, res) {
        try {
            let {
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
            } = req.body;
            luong = parseInt(luong);
            const response = await employeeQuery.insertEmployee(
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
            );
            if (response) res.send('ok');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async updateEmployee(req, res) {
        try {
            let {
                ma_nhan_vien,
                cccd,
                ten,
                gioi_tinh,
                nam_sinh,
                sdt,
                dia_chi,
                loai_nhan_vien,
                trang_thai,
                luong,
                rap_phu_trach,
                bang_cap,
                thu_trong_tuan,
                tg_bat_dau,
                tg_ket_thuc,
            } = req.body;
            luong = parseInt(luong);
            const empData = [
                ma_nhan_vien,
                cccd,
                ten,
                gioi_tinh,
                nam_sinh,
                luong,
                sdt,
                rap_phu_trach,
                loai_nhan_vien,
                trang_thai,
            ];
            const certData = bang_cap;
            const addrData = dia_chi;
            const timeData = [thu_trong_tuan, tg_bat_dau, tg_ket_thuc];
            await employeeQuery.updateEmployee(empData, certData, addrData, timeData);
            res.send('ok');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
    async deleteEmployee(req, res) {
        try {
            const response = await employeeQuery.deleteEmployee(req.params.empId);
            if (response) res.send('ok');
        } catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
        }
    }
}

module.exports = new employeeController();
