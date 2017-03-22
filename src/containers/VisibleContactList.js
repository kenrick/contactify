import React, { Component } from "react";
import { connect } from "react-redux";

import Paper from "material-ui/Paper";
import { Col, Row } from "react-flexbox-grid";
import Divider from "material-ui/Divider";
import ContactList from "../components/ContactList";
import Loading from "../components/Loading";
import SearchInput from "./SearchInput";

import { fetchContacts } from "../actions";
import { getVisibleContacts, getIsFetching } from "../reducers/contacts";

const styles = {
    container: {
        marginTop: 10,
        width: "100%",
        padding: 10,
        minHeight: 500
    },
    search: {
        paddingTop: 10
    }
};

class VisibleContactList extends Component {
    componentWillMount() {
        this.props.dispatch(fetchContacts());
    }

    renderContactList() {
        const { contactGroups } = this.props;
        return contactGroups.map((contacts, index) => (
            <div key={index}>
                <ContactList contacts={contacts} />
                <Divider inset={true} />
            </div>
        ));
    }

    render() {
        const { isFetching } = this.props;
        return (
            <Row>
                <Col xs={12}>
                    <Paper style={styles.container}>
                        <Row end="sm" center="xs">
                            <SearchInput />
                        </Row>

                        <Row>
                            <Col xs={12}>
                                {isFetching
                                    ? <Loading />
                                    : this.renderContactList()}
                            </Col>
                        </Row>
                    </Paper>
                </Col>
            </Row>
        );
    }
}

export default connect(state => {
    return {
        contactGroups: getVisibleContacts(state),
        isFetching: getIsFetching(state)
    };
})(VisibleContactList);
