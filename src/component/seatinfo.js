import ChairIcon from '@mui/icons-material/Chair';

function Seatinfo(){
    return(
        <div className="info">
        <h4>Key to Seat Layout:</h4>
        <ul>
          <li><ChairIcon className='h a'/> Available</li>
          <li><ChairIcon className='h e'/> Unavailable</li>
          <li><ChairIcon className='h s'/> Your Selection</li>
        </ul>
      </div>
    )
}
export default Seatinfo;