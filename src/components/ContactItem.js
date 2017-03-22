import React from "react";
import { ListItem } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import { pinkA200, transparent } from "material-ui/styles/colors";
import { capitalize } from "lodash";

const ContactItem = ({ contact, index }) => {
    const leftAvatar = index === 0
        ? <Avatar
              color={pinkA200}
              backgroundColor={transparent}
              style={{ left: 8 }}
          >
              {contact.name[0]}
          </Avatar>
        : null;

    return (
        <ListItem
            primaryText={contact.name}
            rightAvatar={<Avatar>{contact.name[0]}</Avatar>}
            leftAvatar={leftAvatar}
            insetChildren={true}
            secondaryText={
                <div>
                    <span>
                        {contact.number}
                    </span>
                    <span
                        style={{
                            fontSize: 12,
                            marginLeft: 5
                        }}
                    >
                        - {capitalize(contact.context)}
                    </span>
                </div>
            }
        />
    );
};

export default ContactItem;
