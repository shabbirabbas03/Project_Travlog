import TravelCard from "../components/TravelCard" 
import { Travelpoint } from "../constant"

const Travel = () => {
  return (
    <section className="container ">
  <div className="hero-content mx-auto xl:px-0 flex flex-wrap lg:gap-10 lg:flex-nowrap justify-around items-center">
    <div className="max-w-xl lg:w-1/2">
  <img
      src="/Travelpoint/point-1.svg"
      className="rounded-3xl" />
    </div>
  <div className="text-start max-w-md lg:w-1/2">
  <h1>
      <div className="font-bold text-pink-500">_-_ TRAVEL POINT _-_</div>
      <div className="text-4xl text-black font-semibold">We help you find your dream destination.</div>
    </h1>
      <p className="py-6 text-slate-500">It’s a carefully curated blend of adventure, relaxation, cultural immersion, and personal growth.</p>
  <div className="grid grid-cols-2 gap-6">
  {Travelpoint.map((items)=> (
        <TravelCard key={items.heading} {...items}/>
      ))}
</div>
  </div>
  </div>
</section>
  )
}

export default Travel