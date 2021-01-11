import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { getQuery, setQuery } from 'helpers';
import Tab from './Tab';
import Content from './Content';

import styles from './styles.module.scss';

const Tabs = (props) => {
    const { tabs, animation, enableUrlParams, activeTabIndex, ...rest } = props;
    const { location, history } = rest;

    const [activeTab, setActiveTab] = useState(enableUrlParams
        ? (getQuery(location).activeTab || activeTabIndex)
        : activeTabIndex);

    const onClick = (index) => (
        enableUrlParams
            ? history.replace(setQuery(location, { activeTab: index + 1 }))
            : setActiveTab(index)
    );

    const getIsActiveTab = (index) => {
        if (enableUrlParams) {
            const queryActiveTab = getQuery(location).activeTab;
            return (queryActiveTab ? queryActiveTab - 1 : activeTabIndex) === index;
        }

        return activeTab === index;
    };

    const renderTabs = () => tabs.map(({ label }, index) => (
        <Tab
            key={label}
            label={label}
            onClick={() => onClick(index)}
            isActive={getIsActiveTab(index)}
        />
    ));

    const renderContent = () => tabs.map(({ label, Component }, index) => (
        <Content key={label} animation={animation} isActive={getIsActiveTab(index)}>
            <Component {...rest} />
        </Content>
    ));

    return (
        <div>
            <div className={styles.tabs}>{renderTabs()}</div>
            {renderContent()}
        </div>
    );
};

Tabs.DEFAULT = 'default';
Tabs.FADE_IN = 'fadeIn';
Tabs.SLIDE_IN_BOTTOM = 'slideInBottom';
Tabs.SLIDE_IN_LEFT = 'slideInLeft';
Tabs.SLIDE_IN_RIGHT = 'slideInRight';

Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })).isRequired,
    animation: PropTypes.string,
    enableUrlParams: PropTypes.bool,
    activeTabIndex: PropTypes.number,
};

Tabs.defaultProps = {
    animation: Tabs.SLIDE_IN_RIGHT,
    enableUrlParams: false,
    activeTabIndex: 0,
};

export default withRouter(Tabs);
