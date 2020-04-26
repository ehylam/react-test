import React from 'react';
import './SingleContent.scss'

const SingleContent = props => {
  return (
    <section className="single_content--container">
      <div className="content--wrapper">
        <h3>{props.contentHeader}</h3>
        <p>{props.singleContent}</p>
      </div>
    <div className="content-editor--wrapper">
     <input type="text" onChange={props.userInput} value={props.singleContent} />
    </div>
    </section>
  )
}

export default SingleContent;