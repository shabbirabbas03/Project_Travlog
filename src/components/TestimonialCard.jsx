import React from 'react'

const TestimonialCard = ({ImgSrc, heading, paragraph}) => {
  return (
    <div className="card max-w-3xl mx-auto border-none py-6">
    <figure>
      <img
        src={`Client/${ImgSrc}.png`}
        alt=""
        className="rounded-full mix-blend-multiply h-28 w-28 " />
    </figure>
    <article className="card-body items-center text-center">
      <h1 className="card-title text-xl font-semibold text-gray-700">{heading}</h1>
      <p className="text-base text-slate-500 italic">{paragraph}</p>
    </article>
    <center> 
     <img src="/Client/client-3.svg" className="max-w-36" alt="client" />
    </center>
    </div>
  
  )
}

export default TestimonialCard