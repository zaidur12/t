import footer from '../../assets/Images/footer.jpg'
import logo from "../../assets/Images/logo1.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <>
    <div className='relative h-[300px] bg-black items-center flex'>
        <div className='absolute inset-0 w-full h-[300px] bg-cover bg-center opacity-30 flex' style={{ backgroundImage: `url(${footer})` }}>
        </div>
          <div className='flex gap-36 z-40'>
          <div >
          <img src={logo} className='w-48 h-32' alt="" />
          </div>
          <div className='flex flex-col text-white text-2xl leading-loose'>
           <h3 className='font-bold'>About The site</h3>
           <h3>About Us </h3>
           <h3>Terms of us </h3>
           <h3>Privacy Policy</h3>
          </div>
          <div className='flex flex-col text-white text-2xl leading-loose'>
          <h3  className='font-bold'>About The site</h3>
          <h3>About Us </h3>
           <h3>Terms of us </h3>
           <h3>Privacy Policy</h3>
          </div>
          <div  className='flex flex-col text-white text-2xl leading-loose'>
          <h3  className='font-bold'>Follow Us</h3>
          <div className='flex gap-4'>
          <FaInstagram />
          <FaFacebook />
          <FaSquareTwitter />
          </div>
          </div>
          </div>
        </div>
   
    </>
  )
}

export default Footer
