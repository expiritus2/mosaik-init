import React from 'react';
import { useFormik } from 'formik';
import { Button, ButtonGroup, Checkbox, DatePicker, Input, Select, Textarea } from 'components';
import { Logger } from 'services';
import styles from './styles.module.scss';

const options = [
    { value: 'chocolate', name: 'Chocolate' },
    { value: 'strawberry', name: 'Strawberry' },
    { value: 'vanilla', name: 'Vanilla' },
];

const buttons = [
    { id: 'any', label: 'Any' },
    { id: 'button2', label: 'Button2' },
    { id: 'button3', label: 'Button3' },
    { id: 'button4', label: 'Button4' },
];

const Form = () => {
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

    return (
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
    );
};

export default Form;
