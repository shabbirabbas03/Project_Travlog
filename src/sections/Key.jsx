import KeyCard from "../components/KeyCard";
import { keyFeatures } from "../constant";

const Key = () => {
  return (
    <section className="container px-6 md:px-12 xl:px-6 py-10">
      <div className="p-8 mx-auto xl:px-0 flex w-full flex-col mt-4 items-center justify-center text-center">
        <div className="text-sm font-bold tracking-wider text-pink-500 uppercase">
          -_Traveller Benefits_-
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-wide lg:leading-tight lg:text-4xl dark:text-black">
         let's explore your dream destination of the world.
        </h2>
        <div className="p-10 mx-auto xl:px-0 flex flex-wrap lg:gap-10 lg:flex-nowrap justify-around items-center">
          <div className="flex flex-wrap items-center lg:w-1/3 ">
            <div className="flex flex-col mt-4">
              <h2 className="mt-3 text-3xl text-start font-bold leading-snug lg:leading-tight lg:text-4xl text-pink-500">
                KEY FEATURES
              </h2>
              <p className="py-4 text-lg text-start leading-normal text-gray-500 lg:text-xl xl:text-base dark:text-gray-700">
                Our experienced writers travel the world to bring you
                informative and inspirational features, destination roundups,
                travel ideas, tips and beautiful photos in order to help you
                plan your next holiday.
              </p>
            </div>
            <div>
              {keyFeatures.map((items) => (
                <KeyCard key={items.heading} {...items} />
              ))}
            </div>
          </div>
          <div className="lg:w-2/5">
            <img
              src="/Key/key-4.png"
              className=""
              alt="key-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Key;
