import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="name" required placeholder="Ім'я мага" />
      <input type="tel" name="number" required placeholder="Номер чарівника" />
      <button type="submit">Додати мага</button>
    </form>
  );
}
