import React from 'react'

const CardComp = ({ImgSrc, heading, paragraph}) => {
  return (
    // <div className="card shadow-sm shadow-gray-600 hover:shadow-gray-800 rounded-3xl">
    // <figure className="bg-slate-300 px-20 py-16 rounded-t-3xl">
    //   <img src={`Service/${ImgSrc}.svg`} alt="service" className="object-contain size-20" />
    //   </figure>
    //   <article className="card-body items-center text-center rounded-b-full">
    //   <h1 className="font-bold text-lg">{heading}</h1>
    //   <p className="italic text-slate-500">{paragraph}</p>
    //   </article>
    // </div>
    /* From Uiverse.io by Javierrocadev */ 
<div className="group before:hover:scale-95 before:hover:h-80 before:hover:w-80 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-['']
 before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-gray-300 via-slate-200 to-gray-700 before:absolute before:top-0 w-80 h-80 relative
  bg-slate-200 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
  <div className="bg-gray-900 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500">
  <img src={`Service/${ImgSrc}.svg`} alt="service" className="w-24 h-24 bg-slate-900 rounded-full px-2" />
  </div>
  <div className="z-10 group-hover:-translate-y-10 transition-all duration-500">
    <h1 className="text-2xl text-black font-semibold">{heading}</h1>
    <p className="text-gray-800 italic py-3">{paragraph}</p>
  </div>
  <a className="btn-ghost bg-slate-500 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500" href="#">View</a>
</div>
  )
}

export default CardComp;