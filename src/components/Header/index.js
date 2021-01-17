import React from 'react';

import Actions from './Actions';

import styles from './styles.module.scss';

const Header = () => (
    <div className={styles.header}>
        <div>Logo</div>
        <Actions />
    </div>
);

export default Header;
