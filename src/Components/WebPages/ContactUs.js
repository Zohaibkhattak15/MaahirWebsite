import React,{useState} from 'react';
import Footer from '../Footer/Footer';
import HeaderHeading from '../Header/HeaderHeading';
// import '../../App.css';
import './ContactUs.css';
import plumb from '../../assets/plumb.png';
import tl from '../../assets/tl.png';
import tld from '../../assets/tld.png';


const ContactUs = () => {

   const [alpha, setAlpha] = useState();


   const AlphaOnly = (e) =>{
    const useval = /^[a-zA-Z]*$/ ;
    if (e.target.value ==='' || useval.test(e.target.value)) {
        setAlpha(e.target.value);
    } 
} 



  return( 
    <>
              <HeaderHeading heading="Contact US" />
              <div className="col-12" style={{backgroundColor:"#fff7df"}}>
                    <img src={tl} className="img-style img-fluid " data-aos="fade-right" alt="Yellow pic"/>
                </div>
      <section className="get_in_touch">
          <div className="container-fluid ">
            <div className="row">

              <div className="col-md-6 ms-auto order-2 no-gutters" style={{background:"#F76300"}}>
                  <div className=" rightside"> 
                      <img src={plumb} data-aos="fade-right" id="plumber"  alt="Pic of worker" />
                  </div>
              </div>

              <div className="col-md-6 mb-5 mb-md-0 no-gutters" >
                
                    <h1 className="title" data-aos="fade-right" data-aos-delay="">
                          Get In Touch
                    </h1>
              <form>
                <div className="contact-form row"  >
                    
                    <div className="form-field col-md-6">
                        <input type="text" name="" id="name" className="input-text" value={alpha} onChange={AlphaOnly}  required />
                        <label for="name" className="label">Name</label> 
                    </div>

                    <div className="form-field col-md-6">
                        <input type="email" name="" id="email" className="input-text"  required />
                        <label for="email" className="label">Email</label> 
                    </div>

                    <div className="form-field col-md-6">
                        <input type="subject" name="" id="subject" className="input-text"  />
                        <label for="subject" className="label">Subject</label> 
                    </div>

                    <div className="form-field col-12">
                        <input type="message" name="" id="message" className="input-text" required />
                        <label for="message" className="label">Message</label> 
                    </div>

                    <div className="form-field col-12" >
                      <input type="Submit-btn" className="btn btn-primary d-block " name="" type="submit" value="Submit" />
                    </div>

                    

                    
              </div>
              
            </form>

                   

          </div>
        </div>
      </div>
    </section>

                    <div className=" rightside" style={{backgroundColor:"#fff7df"}}> 
                            <img src={tld} className="plumber"  alt="Pic of worker" />
                    </div>

    <Footer />
    </>
  );
}

export default ContactUs;