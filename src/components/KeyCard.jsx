import React from 'react'

const KeyCard = ({ImgSrc, heading, paragraph}) => {
  return (
    <div className="w-full">
    <div className="flex items-start mt-8 space-x-5">
      <figure className="flex items-center justify-center py-8 rounded-md w-14 h-14">
        <img src={`Key/${ImgSrc}.svg`} alt="key" />
      </figure>
      <article>
        <h4 className="text-xl text-start font-semibold text-black">{heading}</h4>
        <p className="mt-1 text-start text-slate-500 italic">{paragraph}</p>
      </article>
    </div>
    <hr className="w-4/5 opacity-25 mt-7" />
   </div>
  )
}

export default KeyCard;