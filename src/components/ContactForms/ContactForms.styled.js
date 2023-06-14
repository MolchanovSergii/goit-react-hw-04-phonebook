import styled from 'styled-components';

export const StyledForm = styled.form`
  border: 1px solid black;
  padding-left: 5px;
  padding-top: 10px;
`;

export const StyledInput = styled.input`
  display: block;
  margin-top: 5px;
  margin-bottom: 20px;
  border: 1px solid grey;
  outline: none;
  :hover,
  :focus {
    border-color: blue;
  }
`;

export const StyledButton = styled.button`
  background-color: #fff;
  border: 1px solid blueviolet;
  border-radius: 3px;
  margin-bottom: 20px;
  transition: background-color 1s;
  :hover,
  :focus {
    background-color: blue;
  }
`;
