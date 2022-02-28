import React from "react";
import styles from './About.module.css'
class About extends React.Component {

    render() {
      return (
<>
<div className="d-flex vh-100">
          <div className="container d-flex">
        <div className="d-flex  row text-center  align-content justify-content-center align-self-center">  
        <div className={styles.about}> 
        <h1>All About GRIP</h1>
            <p>The Graduate Rotational Internship Program is a unique offer for students and recent graduates 
                to experience and join The Sparks Foundation. In addition to skills-specific tasks, we 
                encourage interns to build a credible professional profile.</p>
                </div>       

                </div>
                </div>
                </div>


</>

        ) ;
    }
  }
  
      export default About