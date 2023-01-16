import styled from 'styled-components';

export const Button = styled.button`
  background-color: red;
  border-radius: 5px;
  border: none;
  margin-left: 10px;
  color: white;
`;
export const List = styled.ul`
  margin-top: 10px;
`;

export const Item = styled.li`
  display: flex;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
