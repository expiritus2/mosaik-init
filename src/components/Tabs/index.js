import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

import { UrlService } from 'services';

import Tab from './Tab';
import Content from './Content';

import styles from './styles.module.scss';

const urlSrv = new UrlService();

const Tabs = (props) => {
    const { tabs, animation, enableQueryParams, activeTabIndex, wrapperClassName, direction, ...rest } = props;
    const { queryParamName, ...passedProps } = rest;
    const { location, history } = passedProps;

    urlSrv.setLocation(location);

    const [activeTab, setActiveTab] = useState(enableQueryParams
        ? (urlSrv.getQuery()[queryParamName] || activeTabIndex)
        : activeTabIndex);

    const onClick = (index) => (
        enableQueryParams
            ? history.replace(urlSrv.setQuery({ [queryParamName]: index + 1 }))
            : setActiveTab(index)
    );

    const getIsActiveTab = (index) => {
        if (enableQueryParams) {
            const queryActiveTab = urlSrv.getQuery(location)[queryParamName];
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
            <Component {...passedProps} />
        </Content>
    ));

    return (
        <div className={classNames(styles.wrapper, styles[direction], wrapperClassName)}>
            <div className={classNames(styles.tabs)}>{renderTabs()}</div>
            <div className={styles.contentWrapper}>{renderContent()}</div>
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
    enableQueryParams: PropTypes.bool,
    activeTabIndex: PropTypes.number,
    direction: PropTypes.string,
    queryParamName: PropTypes.string,
};

Tabs.defaultProps = {
    wrapperClassName: '',
    animation: Tabs.SLIDE_IN_RIGHT,
    enableQueryParams: false,
    activeTabIndex: 0,
    direction: Tabs.DIRECTION_HORIZONTAL,
    queryParamName: 'activeTab',
};

export default withRouter(Tabs);
