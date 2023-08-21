
import PropTypes from "prop-types";
import { ContactItem, Button } from "./Contact.styled";
import { useState, useEffect } from "react";

const Contact = ([ id, name, number, onClick ]) => {
  const [contactId, setContactId] = useState(id);

  useEffect(() => {
    setContactId(id);
  }, [id]);

  const handleClick = () => {
    onClick(contactId);
  };

  return (
    <ContactItem key={ contactId }>
      <p>
        { name }: { number }
      </p>
      <Button type="button" onClick={ handleClick }>
        Delete
      </Button>
    </ContactItem>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Contact;
