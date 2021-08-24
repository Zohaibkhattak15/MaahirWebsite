import React ,{useEffect , useState} from 'react';
import './SignUp1.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaArrowRight ,FaEye } from "react-icons/fa";



function SignUp1() {

    let eyeicon = false ;
    const [Num, setNum] = useState('');
    const [Pass, setPass] = useState();
    const [Name, setName] = useState();

    
    const NumInput = () => {
        
        if(Num === ''){
            setNum('03')  
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


    const onSubmitform = (e) =>{

        // if(!Name ) {
        //     alert('Kindly fill out the Name');
        //     e.preventDefault();
        //     return
        // }

        if(!Num){
            alert('Please Enter your Mobile Number');
            e.preventDefault();
            return
        }
        
        if(!Pass){
            alert('Kindly fill out the password');
            e.preventDefault();
            return
        }

    }

    const toggleeye = () => {
        if(eyeicon) {
            document.getElementById("password").setAttribute("type" , "password");
            eyeicon = false;
        } 
        else{
            document.getElementById("password").setAttribute("type" , "text");
            eyeicon = true;
        }
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
                                        
                                        <p id="logo-below-text">Please create new account here</p>
                                        
                                        <input type="text" placeholder="Name" id="name" ></input>
                                        <input type="text" placeholder="Phone" id="Number" maxLength="11" onBlur={removevalue} value={Num} onChange={NumOnly}  onClick={NumInput}></input>
                                        <input type="password" placeholder="Password" id="password" ></input> <FaEye id="eye-icon" onClick={toggleeye} /> 
                                        <input type="checkbox" id="Checkbox"></input>
                                        <p id="termsAndConditions">I agree with your <span style={{color : "#F76300" }}>Terms</span> and <span style={{color : "#F76300" }}>Conditions</span></p>

                                        {console.log(name)}
                                        <div className="inner-link"> 
                                            Already have an account? <a href="#Home">Sign in</a>
                                        </div>

                                        <input type="submit" id="button-sigin"  value="SingUp" onClick={onSubmitform}></input>  

                                        {/* <img src="./images/tld.png" data-aos="fade-right" alt="left lower pic" id="lower-img" /> */}
                                </form>
                            </div>
                    </div>
                {/* Div container for right side    */}
                    
                    <div className="col-6 " >
                            
                            <div className="rightside " >
                                <img src="./images/graphics9.png" id="right-side-img" data-aos="fade-left" height="450px" alt="plumber png pic" />
                            </div>

                                
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp1;
