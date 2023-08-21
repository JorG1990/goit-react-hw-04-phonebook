
import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import { List } from "./ContactList.styled";
import { useEffect, useState } from "react";

const ContactList = ({ contacts, onDeleteContact }) => {
  const [contactList, setContactList] = useState(contacts);

  useEffect(() => {
    setContactList(contacts);
  }, [contacts]);

  const handleDeleteContact = (id) => {
    onDeleteContact(id);
    setContactList((prevState) => prevState.filter((contact) => contact.id !== id));
  };

  return (
    <List>
      { contactList.map(({ id, name, number }) => (
        <Contact
          key={ id }
          id={ id }
          name={ name }
          number={ number }
          onClick={ handleDeleteContact }
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
