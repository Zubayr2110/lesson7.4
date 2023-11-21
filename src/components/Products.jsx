import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import { clearCart } from "../fetures/cartSlice";

export default function Products() {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

  return (
    <div>
      {cart.map((item) => (
        <Product key={item.id} {...item} />
      ))}
      <button onClick={() => dispatch(clearCart())}>Clear All</button>
    </div>
  );
}
