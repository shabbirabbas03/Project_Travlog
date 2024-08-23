import CardComp from "./components/CardComp";
import Navbar from "./components/Navbar";
import Cards from "./sections/Cards";
import Explore from "./sections/Explore";
import Hero from "./sections/Hero";
import Socials from "./sections/Socials";
import Travel from "./sections/Travel";
import Key from "./sections/Key";
import Testimonial from "./sections/Testimonial";
import Newslater from "./sections/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container bg-white antialiased space-y-16">
        <div>
          <Navbar />
          <div className="blur-[106px] h-10 bg-gradient-to-r from-primary to-yellow-400 dark:from-red-700"></div>
        </div>
        <Hero />
        <div>
          <div className="blur-[106px] h-10 bg-gradient-to-l from-primary to-yellow-400 dark:from-orange-700"></div>
          <Socials />
        </div>
        <Cards />
        <Explore />
        <Travel />
        <Key />
        <Testimonial />
        <Newslater />
        <Footer/>
      </div>
    </>
  );
}

export default App;
