import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
import Dialog from "material-ui/Dialog";
import { createContact } from "../actions";
import { connect } from "react-redux";
import ContactForm from "./ContactForm";

const styles = {
    fab: {
        position: "fixed",
        bottom: "2em",
        right: "2em",
        zIndex: 2
    }
};

class CreateContact extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSubmit(contact) {
        this.props.dispatch(createContact(contact));
        this.handleClose();
    }

    render() {
        return (
            <div>
                <FloatingActionButton
                    style={styles.fab}
                    onTouchTap={this.handleOpen}
                    secondary={true}
                >
                    <ContentAdd />
                </FloatingActionButton>
                <Dialog
                    title="Create contact"
                    modal={true}
                    open={this.state.open}
                >
                    <ContactForm
                        onSubmit={this.handleSubmit.bind(this)}
                        close={this.handleClose}
                    />
                </Dialog>
            </div>
        );
    }
}

export default connect()(CreateContact);
