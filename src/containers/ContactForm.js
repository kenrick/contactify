import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import phone from "phone";

const normalizePhone = value => {
    const number = phone(value);
    if (number.length > 1) {
        return number[0];
    }

    return value;
};

const validate = values => {
    const errors = {};
    const requiredFields = ["name", "number", "context"];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Required";
        }
    });
    if (values.number && phone(values.number).length < 1) {
        errors.number = "Invalid phone number. Make sure it looks like +15644208436";
    }
    return errors;
};

const renderTextField = field => {
    return (
        <TextField
            hintText={field.label}
            floatingLabelText={field.label}
            errorText={field.meta.touched && field.meta.error}
            fullWidth={true}
            {...field.input}
        />
    );
};

const ContactFrom = props => {
    const { handleSubmit, pristine, submitting, close } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="name"
                    component={renderTextField}
                    label="Name"
                    hintText="John Doe"
                />
            </div>
            <div>
                <Field
                    name="number"
                    component={renderTextField}
                    label="Phone Number"
                    hintText="+15644208436"
                    normalize={normalizePhone}
                />
            </div>

            <div>
                <Field
                    name="context"
                    component={renderTextField}
                    label="Context"
                    hintText="work"
                />
            </div>
            <div>

                <RaisedButton
                    type="submit"
                    disabled={pristine || submitting}
                    label="Save"
                    primary={true}
                />

                <FlatButton label="Cancel" onTouchTap={close} />
            </div>
        </form>
    );
};

export default reduxForm({
    form: "ContactFrom",
    validate
})(ContactFrom);
