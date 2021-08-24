import React, { useEffect } from 'react';
import Footer from '../Footer/Footer';
import './Refund.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import tl from '../../assets/tl.png';
import tld from '../../assets/tld.png';

const RefundPolicy = () => {


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
                                <h1 className="text-center py-5" data-aos="fade-left">Refund Policy</h1>
                            </div>
                            <ol data-aos="fade-left" className="lsnone">
                                <li>All services are non-refundable. We take no responsibility for any refunds from Maahirs. 
Please make sure you have carefully read our policies prior to purchasing any services.</li>
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

export default RefundPolicy;
