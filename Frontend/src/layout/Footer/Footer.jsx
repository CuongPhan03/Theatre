import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content', 'about')}>
                    <h4 className={cx('title')}>VỀ CINESTAR</h4>
                    <ul className={cx('anchor-list')}>
                        <li>
                            <a>Hệ thống rạp</a>
                        </li>
                        <li>
                            <a>Tuyển dụng</a>
                        </li>
                        <li>
                            <a>Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('content', 'terms')}>
                    <h4 className={cx('title')}>QUY ĐỊNH & ĐIỀU KHOẢN</h4>
                    <ul className={cx('anchor-list')}>
                        <li>
                            <a>Quy định thành viên</a>
                        </li>
                        <li>
                            <a>Điều khoản</a>
                        </li>
                        <li>
                            <a>Hướng dẫn đặt vé trực tuyến</a>
                        </li>
                        <li>
                            <a>Quy định và chính sách chung</a>
                        </li>
                        <li>
                            <a>Chính sách bảo vệ thông tin cá nhân của người tiêu dùng</a>
                        </li>
                    </ul>
                </div>
                <div className={cx('content', 'links')}>
                    <h4 className={cx('title')}>LIÊN KẾT</h4>
                    <ul className={cx('link-list')}>
                        <a>
                            <FontAwesomeIcon icon={faSquareFacebook} className={cx('icon', 'facebook')} />
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faInstagram} className={cx('icon', 'instagram')} />
                        </a>
                        <a>
                            <FontAwesomeIcon icon={faTiktok} className={cx('icon', 'tiktok')} />
                        </a>
                    </ul>
                    <h4 className={cx('title')}>HOTLINE</h4>
                    <p className={cx('hotline')}>0123 456 789</p>
                </div>
            </div>
            <p className={cx('copyright')}>2015 © CINESTAR. ALL RIGHTS RESERVED. </p>
        </div>
    );
}

export default Footer;
