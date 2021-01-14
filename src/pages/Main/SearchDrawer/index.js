import React from 'react';
import PropTypes from 'prop-types';

import { Drawer } from 'components';

import connect from './connect';
import Form from './Form';

const SearchDrawer = ({ isOpen, openSearchDrawer }) => (
    <Drawer isOpen={isOpen} onClose={() => openSearchDrawer({ isOpen: false })}>
        <Form />
    </Drawer>
);

SearchDrawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openSearchDrawer: PropTypes.func.isRequired,
};

export default connect(SearchDrawer);
