import { useSelector } from "react-redux"


export default function Navbar() {
    const { amount } = useSelector((state) => state.cart)
  return (
    <div>
        <ul className="navbar">
            <li className="list">home</li>
            <li className="list">home</li>
            <li className="list">home</li>
            <li className="list">basket { amount }</li>
        </ul>
    </div>
  )
}
