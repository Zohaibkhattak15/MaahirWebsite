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
    const [searchService, setsearchService] = useState();
    const [allData, setallData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);

    
     useEffect(() => {
        getServices();
    }, [])

    const getServices = async () => {
        try {
         const data = await axios.get('https://maahirpro.com/maahir/index.php/api/get_category_list')
        .then( res => {
            setServices(res.data.category);
            setallData(res.data.category);
        }) 
        setloading(true);
        }
        catch(err){ console.log(err)} 
    }

    const onSearchClick = () => {
       setServices(searchService === ''  ? allData : services.filter( service => searchService === service.title ));
    }

    const onChnageHandler = (searchService) => {
        let matches = [] ;
        if(searchService.length > 0) {
            matches = services.filter(ser => {
                const regex = new RegExp(`${searchService}`, 'gi');
                return ser.title.match(regex)
            })
        }
        console.log(matches)
        setSuggestions(matches)
        setsearchService(searchService)
    }
   

    return (
        <>
            <Container fluid className="whole-div">
                 <Container>
                        <Row>
                            <Col sm={12} >
                            <Container>
                                <Row class="height d-flex justify-content-center align-items-center">
                                    <Col>
                                        <div class="search"> 
                                            <i class="fa fa-search"></i> 
                                            <input 
                                                type="all" 
                                                className="form-control" 
                                                placeholder="Search for Servcies" 
                                                onChange={event => onChnageHandler(event.target.value)}
                                                value={searchService}
                                            />
                                            {suggestions && suggestions.map((suggestions , i) => {
                                                <div key={i} className='suggest col-md-12 justify-content-md-center'>
                                                    {suggestions?.description}
                                                </div>
                                            })} 
                                            <button className="btn btn-primary" onClick={onSearchClick}>Search</button> 
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                            </Col> 
                        </Row>
                     <Row>

                  { loading ? 
                        services.map((service , index) => 
                    
                                <Col lg={4} md={6} sm={12} className="py-5 text-center" data-aos="fade-right"> 
                                    <Image src={cirlpic} className="circle-div" alt="Circle pic"/>
                                    {service.icon ? <Image className="services-pics" src={"https://maahirpro.com/maahir/images/categories/" + service.icon} width='70px' height='70px' alt='circle ' /> : null }
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