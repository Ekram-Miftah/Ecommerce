//import { assets } from "../../public/assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 ">
      {/*Hero Left side*/}
      <div className=" w-full sm:w-1/2  flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#1E3A5F]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414114]"></p>
            <p>Upgrade your Lifestyle</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            አምባሳደር
          </h1>
          <div className="flex items-center gap-2">
            <p> ለእርሶ ይገባዎታል!</p>
            <p className="w-8 md:w-11 h-[2px] bg-[#414114]"></p>
          </div>
        </div>
      </div>
      {/*Hero Right side*/}
      <video
        className="w-full sm:w-1/2"
        src="/assets/hero_img.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </div>
  );
};

export default Hero;
