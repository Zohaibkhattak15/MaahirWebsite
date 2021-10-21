import React ,{useEffect , useState} from 'react';
import './login.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaEye } from "react-icons/fa";
import { Col, Container, Row ,Image } from 'react-bootstrap';
import t1image from '../../../assets/tl.png'
import logoblack from '../../../assets/logo-black.png';
import graphics9 from '../../../assets/graphics9.png'
import Footer from '../../Footer/Footer';
import { useHistory ,Link } from "react-router-dom";
import axios from 'axios';


const Login = () =>{

    let eyeicon = false ;
    const [Num, setNum] = useState('');
    const [Pass , setPass] = useState();
    // const [Name, setName] = useState();
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
        
        e.preventDefault();
        if(!Num){
            alert('Please Enter your Mobile Number');
            return
        }    
        else if(!Pass){
            alert('Kindly fill out the password');
            return
        }
        
        else {
            axios.post('https://maahirpro.com/maahir/index.php/api/signin' ,{
                mobile  : Num,
                password : Pass,
            })
            .then(res => 
                {
                    // history.push('/');
                    console.log(res);
                    // localStorage.setItem('token', res?.data?.token);
                    // localStorage.setItem('num' ,  res?.data?.num);
                }
                )
            .catch(err => console.log(err))
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
             <Container fluid className=" g-0">
                <Row className="g-0">    
                    {/* div container for left side  */}
                    <Col md={6}>
                        <Col className="leftside" >
                                        <Image src={t1image} data-aos="fade-right" alt="left uper pic" id="upper-img" />
                                                               
                                <form id="form-div" data-aos="fade-right">
                                        <Col>
                                            <Image src={logoblack} id="web-logo" alt="logo pic of png" />
                                        </Col>
                                        <Col>
                                            <h3 style={{color:'#32566c' , fontFamily:'sans-serif'}}>Customer Login</h3>
                                        </Col>
                                        <Col >
                                            <input
                                                className='loginInputs' 
                                                type="text" 
                                                placeholder="Phone" 
                                                id="Number" 
                                                maxLength="11" 
                                                value={Num} 
                                                onBlur={removevalue} 
                                                onChange={NumOnly}  
                                                onClick={NumInput}
                                            />
                                        </Col>
                                        <Col >
                                            <input
                                                className='loginInputs' 
                                                type="password" 
                                                placeholder="Password"
                                                value={Pass} 
                                                onChange={(e) => setPass(e.target.value)} 
                                                id="password" 
                                            />
                                            <Col>
                                                <FaEye id="eyeicon" onClick={toggleeye} /> 
                                            </Col>
                                        </Col>    
                                        <Col className="inner-link"> 
                                            Don't have an account? <Link to="/customersignup1">Create Account</Link>
                                        </Col>
                                        <Col className='py-3'>
                                            <input type="submit" id="buttonsigin"  value="Log in" onClick={onSubmitform}></input>  
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
export default Login;