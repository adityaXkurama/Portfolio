import React from 'react'

function SkillCard({imgSrc,label,desc,classes}) {
  return (
    <div className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ">
      <figure className="bg-zinc-700/50 w-12 h-12 p-2 rounded-lg overflow-hidden group-hover:bg-zinc-900 transition-colors">
        <img 
        src={imgSrc} 
        alt={label}
        width={32}
        height={32}
        
        />
      </figure>

      <div className="">
        <h3>{label}</h3>

        <p className="">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default SkillCard
