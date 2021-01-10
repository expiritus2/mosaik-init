import React from 'react';
import PropTypes from 'prop-types';

import { Button, Select, DatePicker, Input, Textarea } from 'components';

import connect from './connect';
import Posts from './Posts';

import styles from './styles.module.scss';

const Main = ({ loadInner, logout }) => {
    const onClick = () => {
        loadInner({});
    };

    const options = [
        { value: 'chocolate', name: 'Chocolate' },
        { value: 'strawberry', name: 'Strawberry' },
        { value: 'vanilla', name: 'Vanilla' },
    ];

    return (
        <div>
            <Button title="Click me" onClick={onClick} />
            <Button title="Logout" onClick={logout} />
            <form className={styles.form}>
                <Select options={options} label="Select label" error="Required" />
                <DatePicker label="Date label" error="Required" />
                <Input label="Test input label" placeholder="Input text" error="Required" />
                <Textarea label="Test textarea label" placeholder="Text area input" error="Required" />
            </form>
            <Posts className={styles.container} />
        </div>
    );
};

Main.propTypes = {
    loadInner: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
};

export default connect(Main);
