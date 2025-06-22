import React from 'react'
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <main className='overflow-y-hidden app'>
        <NavBar/>
        <Hero/>
    </main>
  )
}

export default App
