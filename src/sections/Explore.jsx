import ExploreCard from "../components/ExploreCard"
import { ExploresTop } from "../constant"

const Explore = () => {
  return (
    <section className="container py-8 px-8">
      <article className="max-w-3xl px-20 text-start">
            <h3 className="font-medium text-pink-500 text-lg">_-_ TOP DESTINATION _-_</h3>
            <p className="font-bold text-5xl text-black">Explore <span className="text-gray-500">top</span> destination :-</p>
        </article>
        
      <div className="">
    <div className="flex max-w-7xl justify-center items-center gap-10 md:px-12 md:py-12 xl:px-0 flex-wrap lg:gap-10 lg:flex-nowrap">
      {ExploresTop.map((items)=> (
        <ExploreCard key={items.heading} {...items} />
      ))}
    </div>
    </div>
  
  </section>
  )
}

export default Explore