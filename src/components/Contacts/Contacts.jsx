import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import { Helmet } from 'react-helmet';
import './Contacts.css';

export default function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <div className="contacts-wrapper">
        <ContactForm />
        <ContactList />
      </div>
    </div>
  );
}
