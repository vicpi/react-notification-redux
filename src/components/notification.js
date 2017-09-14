import React from 'react';
import {connect} from 'react-redux';
import {NotificationStack} from 'react-notification';

class Notification extends React.Component {
    state = {
        notifications: []
    }

    componentWillReceiveProps(newProps) {
        if (newProps.notification !== null) {
            this.setState({
                notifications: [...this.state.notifications, newProps.notification]
            });
        } else {
            this.setState({
                notifications: []
            });
        }
    }

    render() {
        return (
            <NotificationStack
                notifications={this.state.notifications}
                onDismiss={notification => this.setState({
                    notifications: this.state.notifications.filter(item => item.key !== notification.key)
                })}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

