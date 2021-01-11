import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { getQuery, setQuery } from 'helpers';
import Tab from './Tab';
import Content from './Content';

import styles from './styles.module.scss';

const Tabs = (props) => {
    const { tabs, animation, enableUrlParams, activeTabIndex, wrapperClassName, direction, ...rest } = props;
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
            direction={direction}
        />
    ));

    const renderContent = () => tabs.map(({ label, Component }, index) => (
        <Content key={label} animation={animation} isActive={getIsActiveTab(index)} direction={direction}>
            <Component {...rest} />
        </Content>
    ));

    return (
        <div className={classNames(styles.wrapper, styles[direction], wrapperClassName)}>
            <div className={classNames(styles.tabs)}>{renderTabs()}</div>
            {renderContent()}
        </div>
    );
};

Tabs.DEFAULT = 'default';
Tabs.FADE_IN = 'fadeIn';
Tabs.SLIDE_IN_BOTTOM = 'slideInBottom';
Tabs.SLIDE_IN_LEFT = 'slideInLeft';
Tabs.SLIDE_IN_RIGHT = 'slideInRight';

Tabs.DIRECTION_HORIZONTAL = 'horizontal';
Tabs.DIRECTION_VERTICAL = 'vertical';

Tabs.propTypes = {
    wrapperClassName: PropTypes.string,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
    })).isRequired,
    animation: PropTypes.string,
    enableUrlParams: PropTypes.bool,
    activeTabIndex: PropTypes.number,
    direction: PropTypes.string,
};

Tabs.defaultProps = {
    wrapperClassName: '',
    animation: Tabs.SLIDE_IN_RIGHT,
    enableUrlParams: false,
    activeTabIndex: 0,
    direction: Tabs.DIRECTION_HORIZONTAL,
};

export default withRouter(Tabs);
