import React from 'react'

const PortfolioCard = ({imgSrc,title,tags,projectLink}) => {
  return (
    <div className="relative p-4 rounded-2xl ring1
    ring-inset ring-zinc-50/5  bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/70 transition-colors">

        <figure className="">
            <img 
            src={imgSrc} 
            alt={title} 
            loading='lazy'
            className='img-cover'
            
            />
        </figure>

        <div className="flex items-center justify-between gap-4">
            <div className="">
                <h3 className='title-1 mb-3'>{title}</h3>

                <div className="flex flex-wrap items-center gap-3">{
                    tags.map((label,key)=>(
                        <span className="h-8 text-sm text-zinc-400 bg-zinc-50/5 rounded-lg grid items-center px-3" key={key}>{label}</span>
                    ))
                    }</div>
            </div>
            <div className="">
                <span className='material-symbols-rounded'
                aria-hidden="true"
                >arrow_outward</span>
            </div>
        </div>

        <a 
        href={projectLink}
        className='absolute inset-0'
        target='_blank'
        ></a>
        
    </div>
  )
}

export default PortfolioCard
