import { assets } from "../assets/assets";
import Title from "../Component/Title";
import NewsLetterBox  from "../Component/NewsLetterBox"

const About = () => {
  return (
    <div className="text-2xl  text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="text-sm">
            Welcome to Ambassador Suit, where sophistication meets timeless
            elegance. Our story began with a passion for crafting impeccable
            suits that reflect the individuality and confidence of those who
            wear them. Each piece is meticulously designed, tailored, and
            finished to perfection, combining traditional craftsmanship with
            modern flair.
          </p>
          <p className="text-sm">
            At Ambassador Suit, we believe a suit is more than just
            clothing—it’s a statement of purpose, a symbol of success, and a
            mark of distinction. From bespoke tailoring to ready-to-wear
            collections, we strive to deliver garments that fit as impeccably as
            they feel, offering unparalleled comfort and a sharp, refined look
            for every occasion.
          </p>
          <p className="text-sm">
            Our commitment to excellence extends beyond our products; it’s woven
            into every interaction with our customers. Whether you’re stepping
            into a boardroom, celebrating a milestone, or simply dressing to
            impress, Ambassador Suit is here to ensure you leave a lasting
            impression.
          </p>
          <p className="text-sm">
            Welcome to a world where elegance is standard, and you are always
            the center of attention.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p className="text-sm">
            At Ambassador Suit, our mission is to provide an unparalleled blend
            of luxury, comfort, and exceptional service, creating a sanctuary
            where every guest feels cherished and valued.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            At Ambassador Suit, we are committed to excellence. Every detail is
            meticulously crafted to ensure the highest standards of quality,
            guaranteeing an exceptional experience for our guests.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            At Ambassador Suites, we prioritize your convenience. From seamless
            booking to exceptional service, we ensure every step is hassle-free.
            Our team is dedicated to making your stay comfortable and
            stress-free. Experience the ease and care you deserve with us
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer service:</b>
          <p className="text-gray-600">
            At Ambassador Suites, exceptional customer service is at the heart
            of everything we do. Our team is committed to exceeding your
            expectations with personalized attention. From the moment you
            arrive, we ensure every detail of your stay is perfect. Your
            satisfaction is our priority, and we are here to make your
            experience unforgettable
          </p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  );
};

export default About;
