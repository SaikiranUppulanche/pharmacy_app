import { useContext, useEffect, useState } from "react";
import Cart from "./components/cart/Cart";
import MedicineForm from "./components/form/MedicineForm";
import RootLayout from "./components/UI/RootLayout";
import MedicineList from "./components/layout/MedicineList";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetch(
      "https://react-auth-3257e-default-rtdb.firebaseio.com/pharmacy/medicines.json"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const medicinesArr = [];
        for (const key in data) {
          const medicine = data[key];
          medicinesArr.push({ ...medicine, id: key });
        }
        setMedicines(medicinesArr);
      });
  }, []);

  const handleShowCart = () => {
    setCartOpen(true);
  };

  const handleHideCart = () => {
    setCartOpen(false);
  };

  const handleAddMedicine = (medicines) => {
    setMedicines((prev) => [...prev, medicines]);
  };

  const routes = [
    {
      path: "/",
      element: <RootLayout onShowCart={handleShowCart} />,
      children: [
        {
          index: true,
          element: <MedicineForm onAddMedicine={handleAddMedicine} />,
        },
        {
          path: "/medicines",
          element: medicines.length && <MedicineList medicines={medicines} />,
        },
        {
          path: "/cart",
          element: cartOpen ? (
            <Cart onHideCart={handleHideCart} />
          ) : (
            <Navigate to="/medicines" />
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <RouterProvider router={router}>
      {/* {cartOpen && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <MedicineForm onAddMedicine={handleAddMedicine} />
      {medicines.length && <CandyList medicines={medicines} />} */}
    </RouterProvider>
  );
}

export default App;
