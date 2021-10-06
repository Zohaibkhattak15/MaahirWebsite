import React, { useState, useEffect} from 'react';
import axios from 'axios'
import './Category.scss';
import cirlpic from '../../assets/Rect2.png';
import { Container, Row , Image , Col , Button} from 'react-bootstrap';
// import InfiniteCarousel from 'react-leaf-carousel';


const SubCat = () => {

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
            <Container fluid className="whole-div">
                 <Container >
                     <Row>
                  {   
                    services.map(service => 
                    {
                        return(
                                <Col md={4} sm={6} className="py-5" data-aos="fade-right"> 
                                    <Image src={cirlpic} alt="Circle pic"/>
                                    <Image className="circle-div" src={service.img} alt='circle ' />
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <Button id='booknowservice'>Book Now</Button>
                                </Col>
                        )
                    })
                }

                    
                 </Row>
            </Container>
         </Container>
        </>
    )
}

export default SubCat;