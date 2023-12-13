import { Contacts } from "../../components/Contacts/Contacts.tsx";
import { Navbar } from "../../components/Navbar/Navbar.tsx";
import { Products } from "../../components/Products/Products.tsx";

export const Index = () => {
  return (
    <>
      <Navbar/>
      <Products/>
      <Contacts/>
    </>
  );
};
