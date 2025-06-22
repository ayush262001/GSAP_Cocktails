import React from 'react'
import { cocktailLists, mockTailLists } from '../Constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Cocktails = () => {

    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub:true
            }
        })

        parallaxTimeline.from('#c-left-leaf', {
            x: -100, y:100
        }).from('#c-right-leaf', {
            x:100, y:100
        })
    })

  return (
    <section className='noisy' id='cocktails'>
        <img src='/images/cocktail-left-leaf.png' alt='left-leaf' id='c-left-leaf'/>
        <img src='/images/cocktail-right-leaf.png' alt='right-leaf' id='c-right-leaf' />

        <div className='list px-10'>
            <div className='popular'>
                <h1>Most popular cocktails</h1>
                <ul>
                    {cocktailLists.map((drink)=>(
                        <li key={drink.name}>
                            <div className='md:me-28'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='loved'>
                <h1>Most loved mocktails</h1>
                <ul>
                    {mockTailLists.map((drink)=>(
                        <li key={drink.name}>
                            <div className='me-28 p'>
                                <h3>{drink.name}</h3>
                                <p>{drink.country} | {drink.detail}</p>
                            </div>
                            <span>{drink.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails
