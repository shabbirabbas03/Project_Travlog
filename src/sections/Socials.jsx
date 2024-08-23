import { SocialsMedia } from "../constant";

const Socials = () => {
  return (
    <section className="container py-12">
      <div className="flex justify-evenly *:cursor-pointer flex-wrap">
        {SocialsMedia.map((item) => (
          <figure className="p-14 content-center shadow-lg shadow-gray-600 hover:shadow-gray-950 bg-slate-200 rounded-full px-6 py-3" key={item.ImgSrc} >
            <img src={item.ImgSrc} href={item.href} className="object-contain max-w-[150px]" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Socials;
