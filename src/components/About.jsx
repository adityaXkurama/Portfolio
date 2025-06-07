import React from 'react'

const About = () => {

    const aboutItems = [
        {
          label: 'Project done',
          number: 6
        },
      ];

  return (
    <section
    id='about'
    className='section'
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-6 rounded-2xl md:p-12 ">
                <p className="text-zinc-100 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]">
                Welcome! I&apos;m Aditya D R, a web developer at the beginning of my professional journey. I have a solid understanding of web development fundamentals and practical experience through academic projects and personal work. I'm focused on improving my skills, adapting to real-world workflows, and contributing to reliable, well-structured websites that meet user and business needs.

                </p>
                <div className="flex flex-wrap gap-5 items-center ">
                    {
                        aboutItems.map(({label,number},key)=>(
                          <div key={key}>
                              <div className="flex items-center md:mb-2">
                                <span className='text-2xl font-semibold md:text-4xl'>{number}</span>
                                <span className='font-semibold text-sky-400 md:text-3xl'>+</span>
                              </div>
                              <p>{label}</p>
                          </div>
                        )) 
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default About
