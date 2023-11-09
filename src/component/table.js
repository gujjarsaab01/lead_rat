import { useSelector, useDispatch } from "react-redux";
import { selectseat, removeseat, submit } from "../redux/action";
import ChairIcon from "@mui/icons-material/Chair";
import { Fragment } from "react";

function Table({ proceed, setProceed, setConfirm }) {
  const dispatch = useDispatch();
  const seatData = useSelector((state) => state.seating_layout);
  const ticket = useSelector((state) => state.ticket);
  const Qty = useSelector((state) => state.Qty);
  const handleClick = (e) => {
    const seatArr = JSON.parse(localStorage.getItem("select")) || [];

    if (Qty < seatArr.length) {
      dispatch(removeseat(seatArr, seatData));
    } else {
      const id = e.substring(1).split("_");
      if (!ticket || !Qty) {
      } else {
        dispatch(selectseat(id, Qty, seatData));
      }
    }
  };

  const handersubmit = () => {
    const seatArr = JSON.parse(localStorage.getItem("select"));
    if (seatArr) {
      dispatch(submit(seatArr, seatData));
    }
  };
  if (proceed) {
    setTimeout(() => {
      handersubmit();
      setProceed(false);
    }, 0);
  }
  return (
    <>
      <div>

      <div className="container">
        <table>
          <tbody>
            {seatData.map(({ seats, label, row }, i) => {
              if (!seats) return null;
              return (
                <Fragment key={i}>
                  {i === 0 && (
                    <tr>
                      <td colSpan={seats.length + 1}>
                        <p className="letter-spacing">Premium : 400</p>
                        <hr />
                      </td>
                    </tr>
                  )}

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
                          onClick={() =>
                            handleClick(label + row + "_" + position)
                          }
                        >
                          <ChairIcon className="h a seat-hover" />
                        </td>
                      );
                    })}
                  </tr>
                  {i === 1 && (
                    <tr key={`line_${i}`}>
                      <td colSpan={seats.length + 1}>
                        {" "}
                         <p className="letter-spacing">Standard : 250</p><hr />
                      </td>
                    </tr>
                  )}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <button className="letter-spacing" onClick={() => setConfirm(true)}>PROCEED</button>
      </div>
    </>
  );
}

export default Table;
