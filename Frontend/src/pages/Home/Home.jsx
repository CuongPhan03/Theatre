import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faFileShield, faGaugeHigh } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top')}>
                <div>
                    <ul>
                        <li>
                            <p>VÉ PHIM SIÊU RẺ</p>
                        </li>
                        <li>
                            <p>ĐỒ ĂN ĐA DẠNG</p>
                        </li>
                    </ul>
                    <p className={cx('hotline')} href="tel:028 7300 8881">
                        028 7300 8881
                    </p>
                </div>
            </div>
            <div className={cx('welcome')}>
                <h1>CHÀO MỪNG ĐẾN</h1>
                <div></div>
            </div>
            <div className={cx('HomepageSlide')}></div>
            <div className={cx('content')}>
                <div className={cx('film-area', 'wrap')}>
                    <h1>PHIM ĐANG HOT</h1>
                    <div className={cx('films', 'hot')}>
                        <div className={cx('film-card')}>
                            <img
                                src="https://dcine.vn/Areas/Admin/Content/Fileuploads/images/POSTER/cogiaoemlaso1POSTER-01.jpg"
                                alt=""
                            />
                            <h1>CÔ GIÁO EM LÀ SỐ 1</h1>
                        </div>
                        <div className={cx('film-card')}>
                            <img
                                src="https://www.cgv.vn/media/catalog/product/cache/1/image/c5f0a1eff4c394a251036189ccddaacd/6/7/675wx1000h-chiem-doat.jpg"
                                alt=""
                            />
                            <h1>CHIẾM ĐOẠT</h1>
                        </div>
                        <div className={cx('film-card')}>
                            <img
                                src="https://www.cgv.vn/media/catalog/product/cache/1/image/1800x/71252117777b696995f01934522c402d/n/v/nvcc_firstlook_digital_1_.jpg"
                                alt=""
                            />
                            <h1>NGƯỜI VỢ CUỐI CÙNG</h1>
                        </div>
                    </div>
                    <h1>NGƯỢC DÒNG THỜI GIAN</h1>
                    <div className={cx('films', 'old')}>
                        <div className={cx('film-card')}>
                            <img
                                src="https://upload.wikimedia.org/wikipedia/vi/d/d0/Spider-Man-_Homecoming.JPG"
                                alt=""
                            />
                            <h1>NGƯỜI NHỆN: TRỞ VỀ NHÀ</h1>
                        </div>
                        <div className={cx('film-card')}>
                            <img
                                src="https://m.media-amazon.com/images/M/MV5BMGUzOWMyYjAtYTE3OS00Njc0LWJiMTEtMDNiNjA0MTI1N2E3XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
                                alt=""
                            />
                            <h1>BỐ GIÀ</h1>
                        </div>
                        <div className={cx('film-card')}>
                            <img src="https://popcornusa.s3.amazonaws.com/movies/650/12326-5847-Titanicjpg" alt="" />
                            <h1>TITANIC (REMAKE)</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('promotion-area', 'wrap')}>
                    <h1>KHUYẾN MÃI</h1>
                    <div className={cx('promotion-card')}>
                        <img
                            src="https://homepage.momocdn.net/blogscontents/momo-upload-api-230623095701-638231110218957566.jpg"
                            alt=""
                        />
                        <h1>NHẬP MÃ PHIMT6 GIẢM 5K !!!</h1>
                    </div>
                    <div className={cx('bottom')}>
                        <div className={cx('promotion-card')}>
                            <img src="https://stc.shopiness.vn/deal/2020/09/11/3/f/4/b/1599798243650_540.png" alt="" />
                            <h1>COMBO GIÁ RẺ NHẤT !!!</h1>
                        </div>
                        <div className={cx('promotion-card')}>
                            <img src="https://cinestar.com.vn/pictures/popup/popup-18-26.jpg" alt="" />
                            <h1>MỜI BẠN MUA VÉ ONLINE !!!</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('advantage')}>
                    <h1>LÝ DO NÊN XEM PHIM TẠI CINESTAR ?</h1>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faSchool} size="6x" color="#fff780" className={cx('icon')} />
                            <div>
                                <h2>Giá rẻ nhất</h2>
                                <p>
                                    Chúng tôi ưu đãi mức giá hợp lý cho học sinh, sinh viên không đâu có được. Tuy vậy,
                                    chất lượng không vì vậy mà giảm sút.
                                </p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faFileShield} size="6x" color="#fff780" className={cx('icon')} />
                            <div>
                                <h2>Bảo vệ môi trường</h2>
                                <p>
                                    Các thức ăn, đồ uống đều được bọc trong vật liệu dễ tái chế, dễ phân hủy. Bạn sử
                                    dụng những sản phẩm này sẽ hạn chế tối đa tác động đến môi trường.
                                </p>
                            </div>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGaugeHigh} size="6x" color="#fff780" className={cx('icon')} />
                            <div>
                                <h2>Tối ưu thời gian</h2>
                                <p>
                                    Nhân viên được đào tạo bài bản đảm bảo không làm mất thời gian của khách. Dây chuyền
                                    phục vụ tinh tế, chu đáo, chuyên nghiệp.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Home;
