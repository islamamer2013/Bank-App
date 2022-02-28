import React from "react";
import styles from './Footer.module.css'

class Footer extends React.Component {
    render() {
      return (
          <>
          <div className={styles.mainfooter}>
        <div className={styles.footer}>
        <div className="col-md-6">
          <p>This project is made by islam-salaheldin-amer at GRIP.</p>
          
        </div>
        <div className="col-md-6 text-center">
            <ul className="social-icons">
              Contact Me:
              <li><a target="_blank" className={styles.github} href="https://github.com/islamamer2013"><i className="fab fa-github fa-2x"></i></a></li>
              
              <li><a target="_blank" className={styles.linkedin} href="https://www.linkedin.com/in/islam-salaheldin-amer/"><i className="fab fa-linkedin fa-2x"></i></a></li> 
                
            </ul>
        </div>
        
  
      </div>
            <div className={styles.copyright}>
            <div className="container">
                <p>Copyright &copy; 2022 by Islam Amer</p>
            </div>
        </div>
        </div>
        </>

      );
    }
  }
  
  export default Footer;