import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../ContactForms/ContactForms.styled';
import { StyledContactList, StyledContactItem } from './ContactList.styled';

const ContactList = ({ dataUsers, deleteContact }) => {
  return (
    <>
      <StyledContactList>
        {dataUsers.map(dataUser => (
          <StyledContactItem key={dataUser.id}>
            {dataUser.name} : {dataUser.number}
            <StyledButton onClick={() => deleteContact(dataUser.id)}>
              Delete
            </StyledButton>
          </StyledContactItem>
        ))}
      </StyledContactList>
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  dataUsers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
