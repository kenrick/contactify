import React from "react";
import { List } from "material-ui/List";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
    return (
        <List>
            {contacts.map((contact, index) => (
                <ContactItem key={index} contact={contact} index={index} />
            ))}
        </List>
    );
};

export default ContactList;
