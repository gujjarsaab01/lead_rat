export const SET_DATA = 'SET_DATA';

export const setData = (data) => {
    return {
      type: SET_DATA,
      seating_layout: data
    };
  };
export const setQty=(data)=>{
  return{
    type: "Qty",
    Qty: data
  };
};
export const setticket=(data)=>{
  return{
    type: "ticket",
    ticket: data
  }
}
export const selectseat = (data, Qty, seatdata) => {
  const arrseat=[...seatdata];
  const seatarr = JSON.parse(localStorage.getItem('select')) || [];
  const arr = seatdata[+data[0]-1].seats;
  console.log(seatarr.length)
  Qty=+Qty-seatarr.length;

  for (let i = +data[1] - 1; i < arr.length; i++) {
    if (Qty <= 0 || arr[i].status==='empty') {
      break;
    }

    if (arr[i].status === 'available' && !arr[i].isSelected) {
      arr[i].isSelected = true;
      const value = seatdata[+data[0]-1].label + seatdata[+data[0]-1].row + '_' + arr[i].position;
      seatarr.push(value);
      localStorage.setItem('select', JSON.stringify(seatarr));
      Qty--;
    }
  }

  return {
    type: 'seatselect',
    seating_layout: arrseat,
  };
};

export const removeseat=(arr,data)=>{
  const arrseat=[...data];
  arr.forEach(element => {
    const el=element.substring(1).split("_")
    data[+el[0]-1].seats[+el[1]-1].isSelected=false;
  });
  localStorage.clear()
  return {
    type: 'removeseat',
    seating_layout: arrseat,
  };

}

export const submit=(arr,data)=>{
  const arrseat=[...data];
  arr.forEach(element => {
    const el=element.substring(1).split("_")
    data[+el[0]-1].seats[+el[1]-1].isSelected=false;
    data[+el[0]-1].seats[+el[1]-1].status="unavailable";
  });
  localStorage.clear()
  return {
    type: 'submit',
    seating_layout: arrseat,
  };

}


