import React ,{useEffect , useState} from 'react';
import './SignUp1.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from "react-icons/fa";
import { Col, Container, Row ,Image } from 'react-bootstrap';
import t1image from '../../../assets/tl.png'
import logoblack from '../../../assets/logo-black.png';
import graphics9 from '../../../assets/graphics9.png'
import Footer from '../../Footer/Footer';
import { Link , useHistory } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel, Radio  , RadioGroup} from '@mui/material';


// import axios from 'axios';



const SignUp1 = () =>{

    let eyeicon = false ;
    const [Num, setNum] = useState('');
    const [Pass , setPass] = useState();
    const [Name, setName] = useState('');
    let history = useHistory();

    
    const NumInput = () => {
        if(Num === ''){
            setNum('92')  
        }
    }
    const NumOnly = (e) => {
        setNum(e.target.value)
        const useval = /^[0-9.\b]+$/ ;
        if (e.target.value ==='' || useval.test(e.target.value)) {
            setNum(e.target.value);
        } 
    } 
    const removevalue = () =>{
        if(Num === '03'){
            setNum('');
        }
    }
    const onSubmitform = (e) =>{

        if(!Name){
            alert('Please Enter your Name');
            e.preventDefault();
            return
        }  

        if(!Num){
            alert('Please Enter your Mobile Number');
            e.preventDefault();
            return
        }    
        else if(!Pass){
            alert('Kindly fill out the password');
            e.preventDefault();
            return
        }
        
        else {
                history.push('/customerOTP') 
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
    useEffect(() => {
       Aos.init({duration : 2000})
    }, []);


    return (
        <>
             <Container fluid className=" g-0">
                <Row className="g-0">    
                    <Col md={6}>
                        <Col id="leftside" >
                                        <Image src={t1image} data-aos="fade-right" alt="left uper pic" id="upper-img" />
                                                               
                                <form id="form-div" data-aos="fade-right">
                                        <Col>
                                            <Image src={logoblack} id="web-logo" alt="logo pic of png" />
                                        </Col>
                                        <Col>
                                            <h3 style={{color:'#32566c' , fontFamily:'sans-serif'}}>Customer Sign Up</h3>
                                        </Col>
                                        <Col  className='py-1'>
                                            <input 
                                                type="text" 
                                                placeholder="Name" 
                                                id="Name"
                                                onChange={(e) => setName(e.target.value)}
                                                value={Name} 
                                                required
                                            />
                                        </Col>
                                        <Col  className='py-1'>
                                            <input 
                                                type="text" 
                                                placeholder="Phone" 
                                                id="Number" 
                                                maxLength="11" 
                                                value={Num} 
                                                onBlur={removevalue} 
                                                onChange={NumOnly}
                                                onClick={NumInput}   
                                                required
                                            />
                                        </Col>
                                        <Col  className='py-1'>
                                            <input 
                                                type="text" 
                                                placeholder="Address" 
                                                id="Address" 
                                            />
                                        </Col>
                                        <Col  className='py-1'>
                                            <input 
                                                type="password" 
                                                placeholder="Password"
                                                value={Pass} 
                                                onChange={(e) => setPass(e.target.value)} 
                                                id="password" 
                                                required
                                            />
                                            <Col>
                                                <FaEye id="eye-icon" onClick={toggleeye} /> 
                                            </Col>
                                        </Col>
                                        <Col className='mt-2' style={{marginRight :'130px '}}>
                                        <RadioGroup
                                                row
                                                name="row-radio-buttons-group"
                                            >
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                        </RadioGroup>

                                        </Col>    
                                        <Row className='d-flex' style={{marginRight :'60px'}}>
                                            <Col className='mt-1' lg={2} sm={2}>
                                            <Checkbox
                                                    name='check1'
                                                    sx={{
                                                    color:' #32566c'[800],
                                                    '&.Mui-checked': {
                                                        color: '#32566c'[600],
                                                    },
                                                    }}
                                                />
                                            </Col>
                                            <Col lg={10} sm={10}>    
                                                <p className='mt-3'>I agree with our Terms and Conditions</p>   
                                            </Col>    
                                        </Row>
                                        <Col className='py-2'>
                                            <input type="submit" id="buttonsignup"  value="Register" onClick={onSubmitform}></input>  
                                        </Col>
                                        <Col id="inner-link"> 
                                            Already have an account <Link id='loginlink' to='/customerlogin'> Login</Link>
                                        </Col>
                                </form>
                            </Col>
                    </Col>
                {/* Div container for right side    */}
                        <Col lg={6}>
                            <Col className="rightside" >
                                <Image src={graphics9} id="right-side-img" data-aos="fade-left" height="450px" alt="plumber png pic" />
                            </Col>
                        </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}
export default SignUp1;
