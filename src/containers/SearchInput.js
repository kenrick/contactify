import React from "react";
import { connect } from "react-redux";
import ActionSearch from "material-ui/svg-icons/action/search";
import TextField from "material-ui/TextField";
import { Col } from "react-flexbox-grid";
import { getSearchInput } from "../reducers/search";
import { updateSearchInput } from "../actions";

const styles = {
    search: {
        paddingTop: 10
    }
};

const SearchInput = ({ inputValue, dispatch }) => {
    return (
        <Col xs={12} sm={6}>
            <ActionSearch style={styles.search} />
            <TextField
                value={inputValue}
                onChange={e => dispatch(updateSearchInput(e.target.value))}
                floatingLabelText="Search by Contact Name"
            />
        </Col>
    );
};

export default connect(state => {
    return {
        inputValue: getSearchInput(state)
    };
})(SearchInput);
