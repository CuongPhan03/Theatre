import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { adminRoutes, userRoutes } from '../../routes/routes';
import { UserContext } from '../../utils/userContext';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);

function Header() {
    const { user, login } = useContext(UserContext);
    const appRoutes = user.isAdmin ? adminRoutes : userRoutes;
    return (
        <div className={cx('wrapper')}>
            <div className={cx('pages')}>
                {appRoutes.map(
                    (route, index) =>
                        route.hasOwnProperty('title') && (
                            <NavLink
                                to={route.path}
                                key={index}
                                className={(nav) => cx('link', 'btn', { active: nav.isActive })}
                            >
                                {route.title}
                            </NavLink>
                        ),
                )}
            </div>
            <div className={cx('login')}>
                <button
                    className={cx('btn', !user.isAdmin && 'active')}
                    onClick={() => {
                        login(false);
                    }}
                >
                    User
                </button>
                <button
                    className={cx('btn', user.isAdmin && 'active')}
                    onClick={() => {
                        login(true);
                    }}
                >
                    Admin
                </button>
            </div>
        </div>
    );
}

export default Header;
