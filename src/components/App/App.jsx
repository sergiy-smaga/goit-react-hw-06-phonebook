import { useState, useEffect } from 'react';
import { StyledApp } from './StyledApp';
import { nanoid } from 'nanoid';
import { ContactForm } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';

const LS_KEY = 'contacts';
const testingContactsList = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [filter, setFilter] = useState('');

  const handleChange = e => setFilter(e.target.value);

  return (
    <StyledApp>
      <h1>Phone book</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChange} />
      <ContactList filter={filter} />
    </StyledApp>
  );
};
