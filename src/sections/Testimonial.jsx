import TestimonialCard from "../components/TestimonialCard";
import { TestimonialClient } from "../constant";

const Testimonial = () => {
  return (
    <div className="container bg-radial">
      <center>
        <h1 className="text-base font-semibold text-pink-500">-_TESTIMONIALS_-</h1>
        <p className="text-2xl tracking-wide font-semibold text-black">Trust Our Clients</p>
      </center>
      <div className="carousel relative">
        {TestimonialClient.map((items) => (
          <div
            id={`slide${items.id}`}
            key={items.id}
            className="carousel-item relative w-full"
          >
            <TestimonialCard key={items.heading} {...items} />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform sm:justify-around justify-between">
              <a
                href={`#slide${items.id - 1}`}
                aria-disabled={items.id === 0}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${items.id + 1}`}
                aria-disabled={items.id === 3}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
