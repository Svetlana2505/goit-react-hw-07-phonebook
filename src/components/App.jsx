import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { fetchContacts } from './redux/contacts-operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { FcBusinesswoman } from 'react-icons/fc';

import { selectError, selectIsLoading } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>
        Phonebook <FcBusinesswoman />
      </h1>
      <ContactForm />

      <h2>Contacts</h2>

      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </>
  );
}
