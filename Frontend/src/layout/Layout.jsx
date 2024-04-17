import classNames from 'classnames/bind';
import styles from './Layout.module.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const cx = classNames.bind(styles);

function Layout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('background')}
                src="https://cdn.esahubble.org/archives/images/screen/heic1620a.jpg"
                alt="background"
            />
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
