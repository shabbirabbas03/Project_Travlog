import { NavItems } from "../constant";
const Navbar = () => {
  return (
    <div className="navbar p-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden">
            </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content italic text-base rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
            <li>
              <a>Holiday Deals</a>
            </li>
            <li>
              <a>Packages</a>
            </li>
            <li>
              <a>Luxuary Hotels</a>
            </li>
            <li>
              <a>Destination</a>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-2">
        <img src="/Icon/icon-1.svg" alt="icon-1" />
        <a className="text-3xl text-black font-serif">Travlog</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal italic mx-auto gap-8">
          {NavItems.map((items) => (
            <li className="btn-ghost rounded-box italic font-semibold" key={items.title}>
              <a href={items.href}>{items.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end gap-1">
        <a className="btn btn-ghost rounded-full px-6 py-1 text-black text-base shadow-md shadow-slate-500/50">Login</a>
        <a className="btn bg-violet-900 hover:bg-violet-600 border-none rounded-full text-white text-base px-5 py-1 shadow-lg shadow-slate-500/50">Sign up</a>
      </div>
    </div>
  );
};

export default Navbar;
