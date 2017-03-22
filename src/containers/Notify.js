import React from "react";
import Snackbar from "material-ui/Snackbar";
import { connect } from "react-redux";
import { getNotifications } from "../reducers/notify";

class Notify extends React.Component {
    render() {
        const { notifications } = this.props;
        return (
            <div>
                {notifications.map((notification, index) => (
                    <Snackbar
                        key={index}
                        open={true}
                        message={notification.message}
                        autoHideDuration={2000}
                    />
                ))}

            </div>
        );
    }
}

export default connect(state => {
    return {
        notifications: getNotifications(state)
    };
})(Notify);
