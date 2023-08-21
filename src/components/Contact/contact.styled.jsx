
import styled from "styled-components";

//Lista de Contacto

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 15px;
  font-weight: 600;
`;


//Botones Delete

export const Button = styled.button`
  font-size: 13px;
  border-radius: 4px;
  border: 2px solid #e8e8e8;
  cursor: pointer;

  &:hover {
    background-color: #2e6fdf;
    color: white;
  }
`;
