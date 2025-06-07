import React from 'react'
import { ButtonPrimary } from './Button';

const Footer = () => {


    const sitemap = [
        {
          label1: 'Home',
          href: '#home'
        },
        {
          label1: 'About',
          href: '#about'
        },
        {
          label1: 'Work',
          href: '#work'
        },
        {
          label1: 'Reviews',
          href: '#reviews'
        },
        {
          label1: 'Contact me',
          href: '#contact'
        }
      ];
      
      const socials = [
        {
          label: 'GitHub',
          href: 'https://github.com/adityaXkurama'
        },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/aditya-raybandarkar/'
        },
        {
          label: 'Twitter X',
          href: 'https://x.com/RaybandarkarA'
        },
        {
          label: 'Instagram',
          href: 'https://www.instagram.com/__adiiitya_02_/'
        }
      ];


  return (
    <footer className='section'>
        <div className="container ">

            <div className="md:grid md:grid-cols-2">
            <div className="mb-10">
                <h2 className="headline-2 mb-8 max-w-[14ch]">Let&apos;s work together today!</h2>

                <ButtonPrimary href="mailto:adityadr009@gmail.com" label="Start Project" icon="chevron_right"/>

            </div>

            <div className="grid grid-cols-2 lg:pl-20">

                <div className="">
                    <p className="mb-2">
                        Sitemap
                    </p>

                    <ul>
                        {
                            sitemap.map(({label1,href},key)=>(
                              <li key={key} className='my-1 text-zinc-400  hover:text-zinc-200 transition-colors block text-sm'>
                                <a href={href}  className='' >
                                {label1}
                              </a>
                              </li>
                            ))
                        }
                    </ul>
                </div>


                <div className="">
                    <p className="mb-2">
                        Socials
                    </p>

                    <ul>
                        {
                            socials.map(({label,href},key)=>(
                              <li key={key} className='my-1 text-zinc-400  hover:text-zinc-200 transition-colors block text-sm'>
                                <a href={href}  className='' >
                                {label}
                              </a>
                              </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
            </div>

            <div className="mb-8 flex items-center justify-between pt-10">
              <a href=""
              className=''
              >
                <img src="/images/logo.svg" alt="logo" width={40} height={40} />
              </a>

              <p className='text-zinc-500 text-sm'>
                &copy; 2025 <span className='text-zinc-200'>Adityadr</span>
              </p>
            </div>



        </div>
    </footer>
  )
}

export default Footer
