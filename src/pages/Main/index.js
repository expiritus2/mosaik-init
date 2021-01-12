import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { Logger } from 'helpers';

import { Button, Select, DatePicker, Input, Textarea, Checkbox, Tabs, ButtonGroup } from 'components';

import connect from './connect';
import Posts from './Posts';

import styles from './styles.module.scss';

const Main = ({ loadInner, logout, loadPins }) => {
    const onSubmit = (value) => {
        Logger.log(value);
    };

    const formik = useFormik({
        initialValues: {
            select: {},
            date: [new Date()],
            input: '',
            textarea: '',
            checkbox: false,
            buttonGroup: [],
        },
        onSubmit,
    });

    const options = [
        { value: 'chocolate', name: 'Chocolate' },
        { value: 'strawberry', name: 'Strawberry' },
        { value: 'vanilla', name: 'Vanilla' },
    ];

    const tabs = [
        { label: 'Posts', Component: Posts },
        { label: 'Other', Component: () => <div>Other Component</div> },
        { label: 'Other2', Component: () => <div>Other Component2</div> },
    ];

    const buttons = [
        { id: 'any', label: 'Any' },
        { id: 'button2', label: 'Button2' },
        { id: 'button3', label: 'Button3' },
        { id: 'button4', label: 'Button4' },
    ];

    return (
        <div>
            <Button title="Click me" onClick={() => loadInner()} />
            <Button title="Logout" onClick={() => logout()} />
            <Button title="Load Pins" onClick={() => loadPins()} />
            <form className={styles.form}>
                <Select
                    name="select"
                    options={options}
                    label="Select label"
                    onSelect={(event, value) => formik.setFieldValue('select', value)}
                    value={formik.values.select}
                />
                <DatePicker
                    name="date"
                    label="Date label"
                    onChange={formik.handleChange}
                    value={formik.values.date}
                />
                <Input
                    name="input"
                    label="Test input label"
                    placeholder="Input text"
                    onChange={formik.handleChange}
                    value={formik.values.input}
                />
                <Textarea
                    name="textarea"
                    label="Test textarea label"
                    placeholder="Text area input"
                    onChange={formik.handleChange}
                    value={formik.values.textarea}
                />
                <Checkbox
                    name="checkbox"
                    label="Test checkbox"
                    onChange={formik.handleChange}
                    checked={formik.values.checkbox}
                />
                <ButtonGroup
                    className={styles.buttonGroup}
                    buttons={buttons}
                    onChange={(values) => formik.setFieldValue('buttonGroup', values)}
                />
                <Button onClick={() => onSubmit(formik.values)} title="Submit" />
            </form>
            <Tabs tabs={tabs} />
        </div>
    );
};

Main.propTypes = {
    loadInner: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    loadPins: PropTypes.func.isRequired,
};

export default connect(Main);
