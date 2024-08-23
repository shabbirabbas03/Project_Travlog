import React from 'react'

const TravelCard = ({heading, paragraph}) => {
  return (
    <div className="flex-wrap">
      <div className="text-center py-8 px-3 border-y-2 border-y-slate-500 shadow-sm shadow-slate-900 btn-ghost rounded-3xl">
     <h1 className="text-2xl text-slate-700 font-mono">{heading}</h1>
     <p className="text-lg text-slate-400">{paragraph}</p>
      </div>
</div>
    
  )
}

export default TravelCard