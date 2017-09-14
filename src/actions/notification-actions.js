export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION';

export const showNotification = props => {
    return {
        type: SHOW_NOTIFICATION,
        props
    };
};
