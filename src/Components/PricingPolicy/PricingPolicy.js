import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Pricing.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import tl from '../../assets/tl.png';
import tld from '../../assets/tld.png';

const PricingPolicy = () => {


    /* This state is basically initilizing the animation on scroll */

    useEffect(() => {
        Aos.init({ duration: 2000 })
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
                                <h1 className="text-center py-5" data-aos="fade-left">Pricing Policy</h1>
                            </div>
                            <ol data-aos="fade-left" className="lsnone">
                                <li>The prices charged by Maahirs are based on market prices. We have no input in the
prices charged for jobs</li>
                            </ol>
                        </div>
                    </div>

                    {/* Div container for right side    */}


                </div>
            </div>


            <div className=" rightside " style={{ backgroundColor: "#fff7df", paddingTop: "7em" }}>
                <img src={tld} className="plumber" alt="Pic of worker" />
            </div>

            <Footer />
        </>
    )
}

export default PricingPolicy;
