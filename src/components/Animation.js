import React from 'react'
import { useInView } from 'react-intersection-observer';


export default function Animation() {
    const [ref, inView] = useInView({
        triggerOnce: true, 
      });
  return (
    <section
      ref={ref}
      className={`animate__animated ${inView ? 'animate__fadeIn' : ''}`}
    >
    </section>
  )
}