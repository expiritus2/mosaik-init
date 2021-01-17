import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useFormik } from 'formik';

import { Logger } from 'services';
import { Input, Button, Wrapper, Header, DatePicker } from 'components';
import { PENDING } from 'settings/constants/apiState';
import { routes } from 'settings/navigation/routes';

import connect from './connect';

import styles from './styles.module.scss';

const Login = ({ user, login, history }) => {
    const onSubmit = (values) => {
        Logger.log(values);
        login(values, {}, (err) => {
            if (!err) { history.push(routes.index); }
        });
    };

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        onSubmit,
    });

    return (
        <div>
            <Header />
            <Wrapper className={styles.wrapper} isPending={user.state === PENDING}>
                <div className={styles.formWrapper}>
                    <form onSubmit={formik.handleSubmit}>
                        <Input
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            placeholder="Email"
                        />
                        <Input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Password"
                        />
                        <Button type="submit" title="Submit" />
                        <DatePicker />
                    </form>
                </div>
            </Wrapper>
        </div>
    );
};

Login.propTypes = {
    user: PropTypes.shape({
        state: PropTypes.string,
    }),
    login: PropTypes.func.isRequired,
    history: ReactRouterPropTypes.history.isRequired,
};

Login.defaultProps = {
    user: {},
};

export default connect(Login);
