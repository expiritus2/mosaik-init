import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { Logger } from 'services';
import { Input, Button, Wrapper, Header } from 'components';
import { PENDING } from 'settings/constants/apiState';
import { routes } from 'settings/navigation/routes';

import connect from './connect';

import styles from './styles.module.scss';

const Login = ({ user, login }) => {
    const history = useHistory();

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
};

Login.defaultProps = {
    user: {},
};

export default connect(Login);
