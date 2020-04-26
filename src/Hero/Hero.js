import React from 'react';
import './Hero.css'

const hero = (props) => {
  return (
    <section className="section-container">
  <h1>{props.header}</h1>
    </section>
  )
}

export default hero;