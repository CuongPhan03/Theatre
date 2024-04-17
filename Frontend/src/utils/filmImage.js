function filmImage(filmID) {
    let src;
    switch (filmID) {
        case 'BDMV_2023' || 'BĐMV_2023':
            src =
                'https://upload.wikimedia.org/wikipedia/vi/1/13/BI%E1%BB%86T_%C4%90%E1%BB%98I_MARVEL_-_Vietnam_poster.jpg';
            break;
        case 'BG_2021':
            src =
                'https://m.media-amazon.com/images/M/MV5BMGUzOWMyYjAtYTE3OS00Njc0LWJiMTEtMDNiNjA0MTI1N2E3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg';
            break;
        case 'BNN_2022':
            src = 'https://i.pinimg.com/originals/e1/b0/89/e1b08971b3c5cf9b29496fed4449bcae.jpg';
            break;
        case 'CD_2023':
        case 'CĐ_2023':
            src =
                'https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/6/7/675wx1000h-chiem-doat.jpg';
            break;
        case 'CN_2022':
            src =
                'https://product.hstatic.net/1000296517/product/chu_nguuyeenf_14c61be74f584e369d2239698f0b2dae_master.jpg';
            break;
        case 'DHDMH_2023':
        case 'ĐHĐMH_2023':
            src =
                'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/_/n/_ng_h_m_t_i_m_a_h_-_payoff_poster_-_d_ki_n_kh_i_chi_u_01.12.2023.jpg';
            break;
        case 'DHHDM_2023':
        case 'ĐHHĐM_2023':
            src = 'https://boxofficevietnam.com/wp-content/uploads/2023/11/651ab99ca215b340632299.jpeg';
            break;
        case 'DVVH_2022':
        case 'ĐVVH_2022':
            src =
                'https://m.media-amazon.com/images/M/MV5BOTJkMWYwN2EtYjAxZC00Y2NkLTg1NzYtMjRlMTBkZDFlODFjXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg';
            break;
        case 'GDBH_2022':
        case 'GĐBH_2022':
            src = 'https://static1.dienanh.net/upload/202202/c7378482-785a-414e-8a57-35e06d586168.jpg';
            break;
        case 'GGLCV_2021':
            src =
                'https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/g/g/gglcv_70x100_coming_soon_1_.jpg';
            break;
        case 'GPD_2021':
            src = 'https://www.themoviedb.org/t/p/original/qdc2pzHRrSBBRuUsRaDxS6NGJVp.jpg';
            break;
        case 'LM48_2021':
            src = 'https://upload.wikimedia.org/wikipedia/vi/6/62/L%E1%BA%ADt_m%E1%BA%B7t_48h_poster.jpg';
            break;
        case 'NNTVN_2021':
            src = 'https://static.vieon.vn/vieplay-image/poster_v4/2021/06/29/wpg7yuon_660x946-nguoinhentrovenha.jpg';
            break;
        case 'NVCC_2023':
            src = 'https://baocantho.com.vn/image/fckeditor/upload/2023/20231006/images/nguoi%20vo%20cuoi%20cung.webp';
            break;
        case 'OL_2023':
            src = 'https://starlight.vn/Areas/Admin/Content/Fileuploads/images/POSTER/oan-linh.jpg';
            break;
        case 'OPFR_2022':
            src = 'https://media.viez.vn/prod/2022/10/18/medium_12_f40c84e5fd.jpeg';
            break;
        case 'RTM_2021':
            src =
                'https://media.viez.vn/prod/2021/11/16/257563148_10223883285502708_5652029646573415190_n_c0b97bc8f1.jpg';
            break;
        case 'TNK_2019':
            src = 'https://fwcdn.pl/fpo/70/43/817043/7932859.3.jpg';
            break;
        case 'TTN_2023':
            src = 'https://popcornusa.s3.amazonaws.com/movies/650/12326-5847-Titanicjpg';
            break;
        case 'YLVN_2023':
            src = 'https://media.viez.vn/prod/2023/11/1/large_LR_Hong_Na_Ra_ddd5f5e43e.jpg';
            break;
        default:
            src = 'https://cinestar.com.vn/pictures/H%C3%ACnh%20n%E1%BB%81n%20CTKM/hssv.jpg';
    }
    return src;
}

export default filmImage;
