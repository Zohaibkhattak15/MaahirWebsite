import React ,{useEffect} from 'react';
import Footer from '../Footer/Footer';
import './Privacy.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import tl from '../../assets/tl.png';
import tld from '../../assets/tld.png';

const  PrivacyPolicy = () => {

    
 /* This state is basically initilizing the animation on scroll */
    
  useEffect(() => {
    Aos.init({duration : 2000})
  }, []);


    return (
        <>
            <div className="container-fluid g-0">
                <div className="row g-0">
                
                    {/* div container for left side  */}
                                <div className="col-12 ">
                    
                                    <div className="leftside" >
                                        <img src={tl} data-aos="fade-right" alt="left uper pic" id="upper-img"></img>
                                                <div className="page-heading">
                                                <h1 className="text-center py-5" data-aos="fade-left">Terms And Conditions </h1>
                                                </div>
                                        <ol data-aos="fade-left">
                                            <li>MAAHIR is a way forward, a convenience and the only source to connect local communities with the best technical manpower.</li>
                                            <li>Finding reliable technicians in any area of Pakistan is challenging. Pakistanis pay a heavy price to get the best service but most clients have unpleasent experiences, by either getting unsatisfactory work or by being overcharged.</li>
                                            <li>We bring you the only platform that is genuinely fair to clients as well as hard working technicians. We work very hard to find skilled labor and list them on MAAHIR for you to connect with them.</li>
                                            <li>Each MAAHIR has been fully screened and verified, trained for fair dealing and most importantly rated by all his clients to make sure our clients have multiple options and can make a good decision before hiring someone for any job.</li>
                                            <li>Download MAAHIR on your Android phone today and experience the real change.</li>
                                        </ol>
                                    </div>
                                </div>
                
                {/* Div container for right side    */}
                    
                       
                </div>
            </div>

            
                    <div className=" rightside " style={{backgroundColor:"#fff7df" , paddingTop : "7em"} }> 
                            <img src={tld} className="plumber"  alt="Pic of worker" />
                    </div>

            <Footer />
        </>
    )
}

export default PrivacyPolicy;
