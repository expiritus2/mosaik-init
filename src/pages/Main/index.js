import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';

import { Button, Select, DatePicker, Input, Textarea } from 'components';

import connect from './connect';
import Posts from './Posts';

import styles from './styles.module.scss';

const Main = ({ loadInner, logout, loadPins }) => {
    const onSubmit = (value) => {
        console.log(value);
    };

    const formik = useFormik({
        initialValues: {
            select: '',
            date: [],
            input: '',
            textarea: '',
        },
        onSubmit,
    });

    const options = [
        { value: 'chocolate', name: 'Chocolate' },
        { value: 'strawberry', name: 'Strawberry' },
        { value: 'vanilla', name: 'Vanilla' },
    ];

    return (
        <div>
            <Button title="Click me" onClick={() => loadInner()} />
            <Button title="Logout" onClick={() => logout()} />
            <Button title="Load Pins" onClick={() => loadPins()} />
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <Select
                    name="select"
                    options={options}
                    label="Select label"
                    onSelect={formik.handleChange}
                />
                <DatePicker
                    name="date"
                    label="Date label"
                    onChange={formik.handleChange}
                />
                <Input
                    name="input"
                    label="Test input label"
                    placeholder="Input text"
                    onChange={formik.handleChange}
                />
                <Textarea
                    name="textarea"
                    label="Test textarea label"
                    placeholder="Text area input"
                    onChange={formik.handleChange}
                />
                <Button type={Button.TYPE_SUBMIT} title="Submit" />
            </form>
            <Posts className={styles.container} />
        </div>
    );
};

Main.propTypes = {
    loadInner: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    loadPins: PropTypes.func.isRequired,
};

export default connect(Main);
