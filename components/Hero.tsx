import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import Button from './Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row  border-2 border-red-500">
      <div className="hero-map" />

      {/* LEFT SIDE */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camping.svg"
          alt="camping"
          width={50}
          height={50}
          className="absolute left-[5px] top-[-40px] w-10 lg:w-[-50px]"
        />

        <h1 className="bold-52 lg:bold-88">
          Sweetwater Campground Allatoona Lake
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          "Escape to the Great Outdoors: Your Ultimate Camping Adventure Awaits!
          Discover Nature, Find Serenity, and Create Memories with Our Premium
          Camping Gear and Expert Tips. Embrace the Wilderness – Start Your
          Journey Here!"
        </p>
      </div>
      <div className="my-1 flex flex-wrap gap-5">
        <div className="flex items-center gap-2">
          {Array(5)
            .fill(1)
            .map((_, index) => (
              <FaStar key={index} className="text-yellow-500 text-2xl" />
            ))}
        </div>
        <p className="bold-16 lg:bold-20 text-blue-70">
          423k
          <span className="regular-16 lg:regular-20 ml-1">
            {' '}
            Perfect Reviews
          </span>
        </p>
      </div>
      <div className="flex w-full gap-3 sm:flex-row">
        <Button type="button" title="Get the App" variant="btn_green" />
      </div>
    </section>
  );
};

export default Hero;
