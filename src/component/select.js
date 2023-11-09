import { useDispatch, useSelector } from "react-redux";
import { setQty, setticket } from "../redux/action";

function Select() {
  const ticket = useSelector((state) => state.ticket);
  const Qty = useSelector((state) => state.Qty);
  const dispatch = useDispatch();
  const opt = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>

      <div className="header">
        <h2>Book Your Show!</h2>
        <p>Title: Jawaan</p>
        <p>Show Time: 12:00 PM</p>
      </div>
    <div className="select ">
      <div className="s-div">
      <select
        className="custom-select  letter-spacing"
        onChange={(e) => dispatch(setticket(e.target.value))}
        value={ticket}
      >
        <option disabled >
          Ticket Type
        </option>
        <option>Standard</option>
        <option>Premium</option>
      </select>
      <select
        className="custom-select letter-spacing"
        onChange={(e) => dispatch(setQty(e.target.value))}
        value={Qty}
      >
        <option disabled defaultValue={Qty}>
          Qty
        </option>
        {opt.map((el) => {
          return <option key={el}>{el}</option>;
        })}
      </select>
     </div>
    </div>
    </div>
  );
}
export default Select;
