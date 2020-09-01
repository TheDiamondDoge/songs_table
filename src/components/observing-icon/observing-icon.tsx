import React, {FunctionComponent, memo} from 'react';
import icon from './img/view.png';
import styles from './observing-icon.module.css';
import classNames from 'classnames';

interface ObservingIconProps {
    classname?: string
}

const ObservingIcon: FunctionComponent<ObservingIconProps> = memo(function ObservingIcon({classname}) {
    const classes = classNames(styles.icon, classname);
    return (
        <img
            alt={'observing'}
            src={icon}
            className={classes}
            title={'В списке отслеживаемых'}
        />
    )
});

export default ObservingIcon;