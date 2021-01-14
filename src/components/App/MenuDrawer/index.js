import React from 'react';
import PropTypes from 'prop-types';

import { Drawer } from 'components/index';

import connect from './connect';

const MenuDrawer = ({ isOpen, openMenuDrawer }) => (
    <Drawer position={Drawer.LEFT} isOpen={isOpen} onClose={() => openMenuDrawer({ isOpen: false })}>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
            <li>Point 5</li>
            <li>Point 6</li>
        </ul>
    </Drawer>
);

MenuDrawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openMenuDrawer: PropTypes.func.isRequired,
};

export default connect(MenuDrawer);
