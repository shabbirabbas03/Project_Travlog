const Newsletter = () => {
  return (
    <center className="container items-center justify-center">
      <div className="w-full max-w-4xl bg-yellow-50 rounded-3xl shadow-md p-14 px-16">
        <h2 className="font-semibold tracking-widest text-pink-500 mb-4">
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-wide lg:leading-tight lg:text-4xl dark:text-black">
          Prepare yourself & let's explore the beauty of the world
        </p>
        <form className="flex items-center justify-center gap-16 mt-10">
          <label className="input input-bordered input-lg w-full flex items-center gap-2 rounded-[2rem]">
            <img src="/Icon/email.svg" width="28" height="32" className="opacity-70 object-fill" alt="email-icon" />
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button type="submit" width="235" height="96" className="btn bg-[#5D50C6] hover:bg-[#6358b7] object-fill text-white btn-lg">Subscribe</button>
        </form>

        <div className="flex justify-center mt-4">
          <a className="text-sm text-gray-500 hover:underline" href="#">
            Privacy Policy
          </a>
        </div>
      </div>
    </center>
  );
};

export default Newsletter;
