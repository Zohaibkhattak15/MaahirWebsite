import React, { useState, useEffect} from 'react';
import axios from 'axios'
import './Category.css';
import cirlpic from '../../assets/Rect2.png';
import { Container, Row , Image , Col , Button} from 'react-bootstrap';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


const SubCat = () => {

    const [services, setServices] = useState([]);
    const [loading, setloading] = useState(false);
    
     useEffect(() => {
        getServices();
    }, [])

    const getServices = async () => {
        try {
         const data = await axios.get('https://maahirpro.com/maahir/index.php/api/get_category_list')
        .then( res => {
            setServices(res.data.category);
        }) 
        setloading(true);
        }
        catch(err){ console.log(err)} 
    }
   

    return (
        <>
            <Container fluid className="whole-div">
                 <Container >
                     <Row>
                  {   loading ? 
                        services.map(service => 
                    
                                <Col lg={4} md={6} sm={12} className="py-5 text-center" data-aos="fade-right"> 
                                    <Image src={cirlpic} alt="Circle pic"/>
                                    {service.icon ? <Image className="circle-div" src={"https://maahirpro.com/maahir/images/categories/" + service.icon} width='70px' height='70px' alt='circle ' /> : null }
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <Button id='booknowservice'>Book Now</Button>
                                </Col>
                      )
                      :       
                        <Stack className='d-flex justify-content-center' sx={{ color: 'grey.500' }} spacing={2} direction="row">  
                            <CircularProgress style={{color:'orange'}} />
                        </Stack>
                } 
                 </Row>
            </Container>
         </Container>
        </>
    )
}

export default SubCat;