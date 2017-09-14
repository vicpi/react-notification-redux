// @flow

import {
    SHOW_NOTIFICATION
} from '../actions/notification-actions';

const initialNotificationState = {
    notification: null
};

const defaultNotificationState = {
    key: 'some UID',
    message: `Notification ipsum...`,
    dismissAfter: 4000
};

const notificationReducer = (state = initialNotificationState,
                             action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {
                ...defaultNotificationState,
                message: action.props
            };
    }
    return state;
};

export default notificationReducer;
