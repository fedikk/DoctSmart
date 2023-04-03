import './contactus.css'
import phone from '../images/contactus.png'
import { GrClose } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { RiFindReplaceLine } from "react-icons/ri";
import { BiPhone } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";
import { BsFillPinMapFill } from "react-icons/bs";

function Contactus() {
    return (
      <div className='contactus'>
        <div className='image'>
            <img src={phone}></img>
        </div>
        <div className='details'>
            <p> <RiFindReplaceLine className='find'/>    Contact us  <GrClose className='close'/>  </p>
        </div>
        <div className='moredet'>
        <p className='website'> <BiPhone className='phoneicon'/> +216 73 737 737  </p>
        <p className='website'> <TbWorld className='webicon'/>  www.docsmart.tn  </p>
        <p className='website'> <GrMail className='mailicon'/>  docsmarttn@gmail.com  </p>
        <p className='website'> <BsFillPinMapFill className='webicon'/>  Mannouba Tunisie  </p>
        </div>
      </div>
    );
  }
  
  export default Contactus;
  