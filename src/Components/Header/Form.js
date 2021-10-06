import React , { useState ,useEffect} from 'react'
import axios from 'axios';
import { Container , Row , Col, Form, Button } from 'react-bootstrap';
import AutoComplete from './AutoComplete';

import './form.scss';

const FormComponent = ({address}) =>  {

    const [services, setServices] = useState([]);
    
     useEffect(() => {
        axios.get('https://maahirpro.com/maahir/index.php/api/get_category_list')
        .then( res => {
            setServices(res.data.category)
        })
        .catch(err =>  console.log(err)) 
    }, [])

    return (
        <>
          <Container>
            <Form id="form-styling" >
                    <Form.Label className='mb-4' style={{color:'white' , fontSize:'1.5em' , display:'flex' , justifyContent:'center'}}>
                        Book Your Service Now
                    </Form.Label>
                    <Col className="d-flex justify-content-center">
                        <hr  style={{height:"5px" , color:'#f76300' , marginTop:'-15px' , width:'70px'}}></hr>    
                    </Col>                      
                    <Row>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="Enter Your name" />
                        </Col>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control placeholder="0307 XXXXXXX" />
                        </Col>
                            <Col xs={12} md={12} className="mb-2">
                            <Form.Control as="select">...
                                <option>Select Service</option>
                                {   
                                    services.map(service => 
                                    {
                                        return(
                                            <option value={service.title}>{service.title}</option>
                                        )
                                    })
                                }
                                </Form.Control>
                            </Col>
                        <Col xs={12} md={12} className="mb-2">
                            <Form.Control as="select">...
                                <option>Select City</option>
                                <option value='Islamabad'>Islamabad</option>
                                <option value='Rawalpindi'>Rawalpindi</option>
                            </Form.Control>
                        </Col>
                        <Col xs={12} md={12} className="mb-2">
                                <AutoComplete
                                    address={address}
                                />
                        </Col>
                        <Col xs={12} md={12} className="mt-2">
                            <Button id='booknow'>Book Now</Button>
                        </Col>
                    </Row>
                </Form>
          </Container>  
        </>
    )
}

export default FormComponent;
