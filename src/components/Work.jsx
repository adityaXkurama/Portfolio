import React from 'react'
import PortfolioCard from './PortfolioCard.jsx';

const Work = () => {
    const works = [
        {
          imgSrc: '/images/project-3.jpg',
          title: 'Rectify-Code | code editor',
          tags: ['API', 'MVC', 'Development'],
          projectLink: 'https://rectify-codee.vercel.app/'
        },
        {
          imgSrc: '/images/project-2.jpg',
          title: 'Nike Landing Page',
          tags: ['API', 'SPA'],
          projectLink: 'https://adityaxkurama.github.io/Nike-Landing-Page/'
        },
        {
          imgSrc: '/images/project-1.jpg',
          title: 'Advanced MERN AUTH',
          tags: ['Authentication', 'API'],
          projectLink: '#'
        },
        {
          imgSrc: '/images/project-4.jpg',
          title: 'Zentry Gaming Website',
          tags: ['Web-design', 'Gaming'],
          projectLink: 'https://zentry-clone-pearl.vercel.app/'
        },
        {
          imgSrc: '/images/project-5.jpg',
          title: 'Netflix UI Clone',
          tags: ['Entertainment', 'Development'],
          projectLink: '#'
        },
      ];
  return (
    <section className="section" id="work">
        <div className="container">
            <h2 className="headline-2 mb-8">
            My portfolio highlights
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {
                    works.map(({imgSrc,title,tags,projectLink},key)=>(
                        <PortfolioCard 
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        key={key}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work
