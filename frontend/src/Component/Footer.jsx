// import {assets} from '../../public/assets/assets'


const Footer = () => {

  const scrollToNavbar = () => {
    const navbar = document.getElementById("navbar");
    navbar.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm font-bold ">
        <div>
            <img onClick={scrollToNavbar} src="/assets/logo.png" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>
            A perfect suit isn’t just clothing; it’s a statement..<br/> Ambassador Suit – Where elegance meets precision
            </p>

        </div>
        <div>
            <p className='text-xl font-bold mb-5 text-gray-800 '>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>

            </ul>
        </div>
        <div>
            <p className='text-xl font-bold mb-5 text-gray-800'>Contact Us </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+251934422559</li>
                <li>Amabsador@gmail.com</li>

            </ul>
        </div>

      </div>
      <div>
        <hr className='text-gray-500' />
        <p className='py-5 text-sm text-center text-gray-600 font-bold'>© 2024 Ambassador Suit..<br/> 
        All Rights Reserved.
Elegance tailored for every moment.

.</p>
      </div>
    </div>
  )
}

export default Footer
