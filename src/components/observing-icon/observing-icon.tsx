import React, {FC, memo} from 'react';
import icon from './img/view.png';
import styles from './observing-icon.module.css';
import classNames from 'classnames';

interface ObservingIconProps {
    classname?: string
}

const ObservingIcon: FC<ObservingIconProps> = memo(({classname}) => {
    const classes = classNames(styles.icon, classname);
    return (
        <img
            alt='observing'
            src={icon}
            className={classes}
            title='В списке отслеживаемых'
        />
    )
});

export default ObservingIcon;