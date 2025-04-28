import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import './App.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Книга Магів Хогвартсу</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
