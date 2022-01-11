import styled from "styled-components";

export const Button = styled.button`
  background-color: white;
  border: none;
  border-radius: 12px;
  color: #282c34;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  margin: 0px 20px;
  padding: 6px 12px;

  ${props => props.hidden && "hidden"} :focus {
    border: none;
    outline: none;
  }
`;
