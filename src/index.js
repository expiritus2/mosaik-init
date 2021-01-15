import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App, Wrapper } from 'components';

import reportWebVitals from './reportWebVitals';
import store from './store';
import { getCurrentUser } from './api/user';

import styles from './styles.module.scss';

const appRoot = (err, response) => (
    <React.StrictMode>
        <Provider store={store}>
            <App initialUser={{
                data: response?.data,
                meta: {
                    message: err?.message,
                    status: err?.response?.status || err?.networkError?.statusCode,
                },
            }}
            />
        </Provider>
    </React.StrictMode>
);

(() => {
    const root = document.getElementById('root');

    ReactDOM.render(<Wrapper className={styles.wrapper} isPending />, root);

    getCurrentUser()
        .then((response) => { ReactDOM.render(appRoot(null, response), root); })
        .catch((err) => { ReactDOM.render(appRoot(err), root); });
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
