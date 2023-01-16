import { Button, List, Item } from './ContactList.styled.js';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/contacts-operations.js';
import {
  selectContacts,
  selectFilterName,
} from 'components/redux/selectors.js';

export const ContactList = () => {
  const contact = useSelector(selectContacts);
  const filterName = useSelector(selectFilterName);
  const dispatch = useDispatch();

  return (
    <List>
      {contact
        .filter(({ name }) =>
          name.toLowerCase().includes(filterName.toLowerCase())
        )
        .map(({ name, id, phone }) => {
          return (
            <Item key={id}>
              <p>{name} : </p>
              <p>{phone} : </p>
              <Button type="button" onClick={() => dispatch(deleteContact(id))}>
                delete
              </Button>
            </Item>
          );
        })}
    </List>
  );
};
