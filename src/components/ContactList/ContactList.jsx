import { selectFilteredContacts } from "../../redux/contactsSlice";

import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  // const filter = useSelector(selectFilteredContacts);
  // const rightFilter = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <ul className={css.ulList}>
      {contacts.map((contact) => (
        <li className={css.list} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
