import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.cartItem.reduce((value, item) => {
    return (value += parseInt(item.quantity) * parseInt(item.medicinePrice));
  }, 0);

  const handleDelete = (id) => {
    cartCtx.onDeleteFromCart(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.cartItem.map((item) => (
        <CartItem onDeleteCartItem={handleDelete} key={item.id} item={item} />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          Close
        </button>
        <button className={classes.button}>Generate Bill</button>
      </div>
    </Modal>
  );
};

export default Cart;
