import React from 'react';
import PropTypes from 'prop-types';

import { Button, Tabs } from 'components';

import connect from './connect';
import Posts from './Posts';
import SearchDrawer from './SearchDrawer';

const Main = ({ loadInner, logout, loadPins, openMenuDrawer, openSearchDrawer, login }) => {
    const tabs = [
        { label: 'Posts', Component: Posts },
        { label: 'Other', Component: () => <div>Other Component</div> },
        { label: 'Other2', Component: () => <div>Other Component2</div> },
    ];

    return (
        <div>
            <Button title="Click me" onClick={() => loadInner()} />
            <Button title="Logout" onClick={() => logout()} />
            <Button title="Login" onClick={() => login()} />
            <Button title="Load Pins" onClick={() => loadPins()} />
            <Button title="Open Menu Drawer" onClick={() => openMenuDrawer({ isOpen: true })} />
            <Button title="Open Search Drawer" onClick={() => openSearchDrawer({ isOpen: true })} />
            <Tabs enableQueryParams queryParamName="testActiveTab" tabs={tabs} />
            <SearchDrawer />
        </div>
    );
};

Main.propTypes = {
    loadInner: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    loadPins: PropTypes.func.isRequired,
    openSearchDrawer: PropTypes.func.isRequired,
    openMenuDrawer: PropTypes.func.isRequired,
};

export default connect(Main);
