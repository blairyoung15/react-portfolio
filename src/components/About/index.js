import React from 'react'
import headshot from "../../assets/headshot/headshot.jpg";

function About() {

  return (
      
    <section className="my-5 flex-row" >
      <h1 id="about">h e l l o . I'm Blair Young.</h1>
      <div className="my-2">
      
        <p>
       Junior Full Stack developer with a background in building and designing websites that cater to a user's experience. Proficient in the following technologies: javascript, NodeJs, CSS, HTML, MongoDB, MySQL, ReactJS.
       I also have a background in designing with Adobe photoshop, InDesign and Illustrator.
      </p>
      <img src={headshot} className="my-2" style={{ width: "8%" }} alt="headshot" />
      <p>
       I have a background working in professional sports, engineering and a passion for working with people with severe physical impairments. All of these paths have allowed me to get a greater insight into the world of technology and its advantages to our world.
      </p>
    
      </div>
    </section>
  )
}

export default About