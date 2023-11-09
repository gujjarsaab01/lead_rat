import './App.css';

import Table from './component/table';
import ConfirmationModal from "./component/confirm"
import Select from './component/select';
import { useEffect, useState} from 'react';
import Seatinfo from './component/seatinfo';
import { useDispatch } from 'react-redux';
import { setData } from './redux/action';
import jsonData from"./data.json";

function App() {
  const[confirm,setConfirm]=useState(false)
  const[proceed,setProceed]=useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setData(jsonData.seating_layout));
  }, [dispatch]);

 if(confirm){
    return(
      <ConfirmationModal isopen={setConfirm} onConfirm={setProceed}/>
    )
  }
  return (
    <>
     
      <Select />
      <div className='app'>
        
        <Table proceed={proceed} setProceed={setProceed} setConfirm={setConfirm}/>
        <Seatinfo/>
      </div>
      </>
  );
}

export default App;
