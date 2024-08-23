import CardComp from "../components/CardComp";
import { CardContent } from "../constant";

const Cards = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-center items-center">
        <article className="max-w-md md:px-12 xl:px-6 md:py-12">
        <h3 className="font-medium text-pink-500 text-base">_-SERVICE-_</h3>
        <p className="font-bold text-4xl text-black">Our top value categories for you.</p>
        </article>
      <div className="max-w-5xl md:px-12 md:py-12 flex justify-between items-center gap-10 mx-auto xl:px-0 flex-wrap lg:gap-10 lg:flex-nowrap">
      {CardContent.map((items)=> (
        <CardComp key={items.paragraph} {...items} />
      ))}
    </div>
  </div>
  </div>
  )
}

export default Cards