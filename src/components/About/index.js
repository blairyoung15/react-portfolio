import React from 'react'
import headshot from "../../assets/headshot/headshot.jpg";

function About() {

  return (
      
    <section className="my-5 flex-row" >
        <img src={headshot} className="my-2" style={{ width: "10%" }} alt="headshot" />
      <h1 id="about">h e l l o .</h1>
      <br></br>
      <h3>I'm Blair Young</h3>
      <div className="my-2">
      
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
      </p>
    
      </div>
    </section>
  )
}

export default About