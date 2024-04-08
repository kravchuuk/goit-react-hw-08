import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectFilteredContacts } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  return (
    <div className="wrap">
      <PageTitle>Your Contacts</PageTitle>
      <ContactForm />
      {contacts.length === 0 ? <p>Add your first contact</p> : <SearchBox />}
      <ContactList />
    </div>
  );
};

export default Contacts;
