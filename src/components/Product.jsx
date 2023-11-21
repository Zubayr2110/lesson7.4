import { useDispatch } from "react-redux";
import { dec, inc } from "../fetures/cartSlice";



export default function Product({ title, id, amount, img, price }) {
    const dispatch = useDispatch()
  return (
    <div>
        <img src={img} alt="" />
        <h2>{ title }</h2>
        <p>{ price }</p>
        <p>{ amount }</p>
        <button>del</button>
        <button onClick={() => dispatch(inc())}>inc</button>
        <button onClick={() => dispatch(dec())}>dec</button>
    </div>
  )
}
