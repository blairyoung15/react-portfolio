import React from 'react'

function About() {

  return (
    <section className="my-5 space-between" >
      <h1 id="resume">Resume</h1>
      <div className="my-2">
        <p>
         Click the button to download resume.
      </p>
      <button data-testid="button" type="submit">Download Resume</button>
      </div>
    </section>
  )
}

export default About