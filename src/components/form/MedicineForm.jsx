import React, { useRef } from "react";
import Input from "../UI/Input";
import Button from "../UI/Button";

const MedicineForm = (props) => {
  const medicineNameRef = useRef();
  const medicineDescriptionRef = useRef();
  const medicinePriceRef = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const medicineName = medicineNameRef.current.value;
    const medicineDescription = medicineDescriptionRef.current.value;
    const medicinePrice = medicinePriceRef.current.value;

    const medicine = {
      medicineName,
      medicineDescription,
      medicinePrice,
    };

    fetch(
      "https://react-auth-3257e-default-rtdb.firebaseio.com/pharmacy/medicines.json",
      {
        method: "POST",
        body: JSON.stringify(medicine),
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        props.onAddMedicine({ ...medicine, id: data.name });
      });

    medicineNameRef.current.value = "";
    medicineDescriptionRef.current.value = "";
    medicinePriceRef.current.value = "";
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex flex-row w-fit bg-slate-800 m-auto my-20 py-12 px-8 text-xl text-yellow-500 font-normal rounded-2xl "
    >
      <Input
        className="m-5"
        inputStyle="rounded-md ms-1 text-slate-800"
        label="Medicine Name"
        type="text"
        ref={medicineNameRef}
      />
      <Input
        className="m-5"
        inputStyle="rounded-md ms-1 text-slate-800"
        label="Description"
        type="text"
        ref={medicineDescriptionRef}
      />
      <Input
        className="m-5"
        inputStyle="rounded-md ms-1 text-slate-800"
        label="Price"
        type="number"
        ref={medicinePriceRef}
      />
      <Button
        type="submit"
        className=" bg-rose-400 text-slate-900  text-md px-10 mx-5 rounded-xl font-medium"
      >
        Add Product
      </Button>
    </form>
  );
};

export default MedicineForm;
