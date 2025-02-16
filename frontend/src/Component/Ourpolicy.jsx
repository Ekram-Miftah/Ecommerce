import { assets } from "../assets/assets"
const Ourpolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
    <div>
    <img src={assets.exchange_icon} className="w-12 m-auto mb-5"/>
      <p className="font-semibold">Exchange or Return?</p>
      <p className="text-gary-400"> No Problem,Hassle-Free Returns & Exchange</p>
    </div>
    <div>
    <img src={assets.quality_icon} className="w-12 m-auto mb-5"/>
      <p className="font-semibold">3 Day return Policy </p>
      <p className="text-gary-400"> We provide 3 days free return policy </p>
    </div>
    <div>
    <img src={assets.support_img} className="w-12 m-auto mb-5"/>
      <p className="font-semibold">Best customer Support</p>
      <p className="text-gary-400"> We provide 24/7 Customer Support </p>
    </div>
    </div>
  )
}

export default Ourpolicy
