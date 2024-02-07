import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.medicineName}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>₹ {props.item.medicinePrice}</span>
          <span className={classes.amount}>x {props.item.quantity}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.onDeleteCartItem(props.item.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default CartItem;
