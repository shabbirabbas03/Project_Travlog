const Hero = () => {
  return (
    <section className="container">
      <div className="flex justify-evenly items-center text-slate-400 flex-wrap">
        <article className="max-w-lg md:px-12 xl:px-6 md:py-12 lg:w-1/2">
        <div className="py-8">
          <a className="text-pink-500 font-semibold rounded-full bg-slate-50 px-4 py-2 shadow-inner sm:shadow-slate-200">_Explore the world_!</a>
        </div>
          <h1 className="text-black tracking-wide font-bold text-2xl md:text-4xl xl:text-6xl">
            Travelling<span className="text-gray-400"> top destination</span>{" "}
            of the world.
          </h1>
          <p className="mt-8 text-gray-700 dark:text-gray-400">
            We always make our customer happy by providing as many choices as
            possible.
          </p>
          <button className="btn bg-violet-900 hover:bg-violet-600 border-none shadow-lg shadow-slate-500/50 text-white py-1 px-5 mr-3 rounded-full my-8">
            Get started
          </button>
          <button className="btn btn-ghost border shadow-lg shadow-slate-500/50 text-black py-1 px-5 rounded-full">
            Watch Demo
          </button>
        </article>
        <figure className="flex max-w-2xl md:px-12 xl:px-6 md:py-12 gap-7 lg:w-1/2 relative">
          <div className="absolute right-14 top-1 overflow-x-clip">
            <img src="/Travel/travel-4.svg" alt="travel-4" className="mix-blend-luminosity" />
          </div>
          <div className="col space-y-7 relative">
             <div className="absolute top-72 my-4 right-20">
            <img src="/Social/social-2.svg" alt="social-2" />
            </div>
            <img src="/Travel/travel-1.svg" alt="travel-1" />
            <img src="/Travel/travel-2.svg" alt="trvael-2" />
          </div>
          <div className="carousel rounded-box w-64 gap-3 relative scroll-smooth">
            <div className="carousel-item w-full">
              <img
                src="/Travel/travel-3.svg"
                className="w-full"
                alt="travel-3"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/Travel/travel-2.svg"
                className="w-full"
                alt="travel-2"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="/Travel/travel-1.svg"
                className="h-full"
                alt="travel-1"
              />
            </div>
          {/* <div>
            <img src="/Social/social-1.svg" alt="social-1" />
          </div> */}
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
