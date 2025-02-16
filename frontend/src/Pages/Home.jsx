import Bestseller from "../Component/Bestseller"
import Footer from "../Component/Footer"
import Hero from "../Component/Hero"
import NewsLetterBox from "../Component/NewsLetterBox"
import Ourpolicy from "../Component/Ourpolicy"
import WhatsNew from "../Component/WhatsNew"


const Home = () => {
  return (
    <div className="bg-gray-100 p-4">
      <Hero/>
      <WhatsNew/>
      <Bestseller/>
      <Ourpolicy/>
      <NewsLetterBox/>
     
    </div>
  )
}

export default Home
