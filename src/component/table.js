import { useSelector, useDispatch } from "react-redux";
import { selectseat, removeseat, submit } from "../redux/action";
import ChairIcon from "@mui/icons-material/Chair";


function Table({ proceed, setProceed, setConfirm }) {
  const dispatch = useDispatch();
  const seatData = useSelector((state) => state.seating_layout);
  const ticket = useSelector((state) => state.ticket);
  const Qty = useSelector((state) => state.Qty);
  const handerclick = (e) => {
    const seatArr = JSON.parse(localStorage.getItem("select")) || [];

    if (Qty <= seatArr.length) {
      dispatch(removeseat(seatArr, seatData));
    }
    const id = e.substring(1).split("_");
    dispatch(selectseat(id, Qty, seatData));
  };
  const handersubmit = () => {
    const seatArr = JSON.parse(localStorage.getItem("select"));
    if (seatArr) {
      dispatch(submit(seatArr, seatData));
    }
  };
  if (proceed) {
    handersubmit();
    setProceed(false);
  }
  return (
    <div style={{ width: '80%' }}>
      
      <table>
        <tbody>
          {seatData.map(({ seats, label, row }) => {
            return (
              <tr>
                <td>{label}</td>
                {seats.map(({ position, isSelected, type, status }) => {
                  if (status === "empty")
                    return (
                      <td
                        id={label + row + "_" + position}
                        key={label + row + "_" + position}
                      ></td>
                    );
                  else if (status === "unavailable" || type !== ticket)
                    return (
                      <td
                        id={label + row + "_" + position}
                        key={label + row + "_" + position}
                      >
                        <ChairIcon className="h e" />
                      </td>
                    );
                  else if (isSelected)
                    return (
                      <td
                        id={label + row + "_" + position}
                        key={label + row + "_" + position}
                      >
                        <ChairIcon className="h s" />
                      </td>
                    );
                  return (
                    <td
                      id={label + row + "_" + position}
                      key={label + row + "_" + position}
                      onClick={() => handerclick(label + row + "_" + position)}
                    >
                      <ChairIcon className="h a" />
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => setConfirm(true)}>PROCEED</button>
    </div>
  );
}

export default Table;
