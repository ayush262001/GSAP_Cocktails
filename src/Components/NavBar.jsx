import React from 'react'
import { navLinks } from '../Constants/index'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const NavBar = () => {

    useGSAP( ()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
            backgroundColor: '#00000',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut'
        })
    },[])

  return (
    <nav>
        <div>
            <a href='#home' className='flex items-center gap-2'>
                <img src='/images/logo.png' alt='logo'></img>
                <p>Valvet Pour</p>
            </a>
            <ul>
                {navLinks.map((ele)=>(
                    <li key={ele.id}>
                        <a href={`#${ele.id}`}>{ele.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar
