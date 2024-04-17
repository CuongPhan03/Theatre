function theatreImage(theatreID) {
    let src;
    switch (theatreID) {
        case 'BD':
            src = 'https://cinestar.com.vn/pictures/Tin%20t%E1%BB%A9c/cinestar-insight/cinestar-sinh-vien.jpg';
            break;
        case 'HCM':
            src = 'https://cinestar.com.vn/pictures/webimages/6GioiThieu/cinestar-hbt-new-2-03.jpg';
            break;
        case 'TTH':
            src = 'https://cinestar.com.vn/pictures/Cinestar/CMT/cmt-web.jpg';
            break;
        case 'DL':
            src = 'https://du-lich-da-lat.com/wp-content/uploads/2021/07/Cinestar-Da-Lat-1024x1024.jpg';
            break;
        case 'TG':
            src = 'https://cinestar.com.vn/pictures/Tin%20t%E1%BB%A9c/cinestar-insight/52bdebd4335ef100a84f.jpg';
            break;
        default:
            src = 'https://cinestar.com.vn/pictures/H%C3%ACnh%20n%E1%BB%81n%20CTKM/hssv.jpg';
    }
    return src;
}

export default theatreImage;
