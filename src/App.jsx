import { useState } from "react";
import Cart from "./components/cart/Cart";
import MedicineForm from "./components/form/MedicineForm";
import CandyList from "./components/layout/MedicineList";
import Header from "./components/layout/Header";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [medicines, setMedicines] = useState([]);

  const handleShowCart = () => {
    setCartOpen(true);
  };

  const handleHideCart = () => {
    setCartOpen(false);
  };

  const handleAddMedicine = (medicines) => {
    setMedicines((prev) => [...prev, medicines]);
  };

  return (
    <>
      {cartOpen && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <MedicineForm onAddMedicine={handleAddMedicine} />
      {medicines.length && <CandyList medicines={medicines} />}
    </>
  );
}

export default App;
