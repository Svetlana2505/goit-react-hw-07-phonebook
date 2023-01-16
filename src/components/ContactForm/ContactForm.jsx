import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectIsLoading } from 'components/redux/selectors.js';
import { Form, Input, Label, Button } from './ContactForm.styled.js';
import { addContact } from 'components/redux/contacts-operations.js';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contact = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);

  const handeleChange = ({ target: { name, value } }) => {
    name === 'name' ? setName(value) : setPhone(value);
  };

  const handeleSubmit = event => {
    event.preventDefault();

    const checkContacts = contact.some(contact => contact.name === name);

    checkContacts
      ? alert(`${name} is already in contacts`)
      : dispatch(
          addContact({
            name,
            phone,
          })
        );
    setName('');
    setPhone('');
  };

  return (
    <Form onSubmit={handeleSubmit}>
      <Label>
        Name:
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handeleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Phone:
        <Input
          type="tel"
          name="number"
          value={phone}
          onChange={handeleChange}
        />
      </Label>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Adding' : 'Add contact'}
      </Button>
    </Form>
  );
}
