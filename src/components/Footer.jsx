import { FooterContent } from "../constant";

const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <figure className="flex items-center gap-2">
          <img src="/Icon/icon-1.svg" alt="icon-1" />
          <a className="text-2xl text-black font-serif">Travlog</a>
        </figure>
        <p className=" max-w-[278px] leading-[160%] text-[23px] text-[#191825] text-opacity-50">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
      </aside>
      {FooterContent.map((item) => (
        <nav className="gap-8 max-w-32 text-[#191825]" id={item.title}>
          <h6 className="footer-title">{item.title}</h6>
          {item.content.map((subItem) => (
            <a href="#" key={subItem} className="link link-hover h-7">{subItem}</a>
          ))}
        </nav>
      ))}
    </footer>
  );
};

export default Footer;
