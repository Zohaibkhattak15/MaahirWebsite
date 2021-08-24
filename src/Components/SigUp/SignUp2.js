import React,{useState , useEffect} from 'react';
import './SignUp2.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



function SignUp2() {

    const [Num, setNum] = useState('')
    
    const setNumber = (e) => {
        console.log("function is running")
        if(Num === ''){
            setNum('03');  
        }
        
    }

    const NumOnly = (e) =>{
        const useval = /^[0-9.\b]+$/ ;
        if (e.target.value ==='' || useval.test(e.target.value)) {
            setNum(e.target.value);
        } 
    } 

    
    const removevalue = () =>{
        console.log("function is running so fast")
        if(Num === '03'){
            setNum('');
        }
    }

    const Proceed=(e)=>{

        if(!Num){
            alert('PLease Enter your Mobile Number');
            e.preventDefault();
            return
        }
        

        // console.log( Num , Pass);
        

    }

    /* This state is basically initilizing the animation on scroll */
    
    useEffect(() => {
       Aos.init({duration : 2000})
    }, []);

    return (
        <>

           
            <div className="container-fluid g-0">
                <div className="row g-0">
                
                    {/* div container for left side  */}
                    <div className="col-6 ">
                    
                        <div className="leftside" >
                                        <img src="./images/tl.png" data-aos="fade-right" alt="left uper pic" id="upper-img"></img>
                                    
                                        
                                <form className="form-div" data-aos="fade-right">

                                        <img src="./images/logo-black.png" id="web-logo" alt="logo pic of png"></img>
                                        <p id="logo-below-text">Please enter your phone number.<br></br>
                                         You will reveice a code to create a new password via sms.
                                        </p>
                                        <input type="text" placeholder="Phone" id="Number" maxLength="11"  onBlur={removevalue} value={Num} onChange={NumOnly}  onClick={setNumber} ></input>
                                        <input type="submit" id="button-sigin"  value="Proceed" onClick={Proceed}></input>  

                                </form>
                            </div>
                    </div>
                {/* Div container for right side    */}
                    
                    <div className="col-6 " >
                            
                            <div className="rightside " >
                                <img src="./images/drive3.png" id="right-side-img" data-aos="fade-left" height="450px" alt="plumber png pic" />
                            </div>

                                
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp2;
