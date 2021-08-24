import React, {  useEffect} from 'react';
import axios from 'axios'
// import './Category.css';
// import Agri from '../../assets/category/agriculture.png';
// import Brick from '../../assets/category/brickwall.png';
// import Fash from '../../assets/category/fashion.png';
// import Gard from '../../assets/category/gardening.png';
// import House from '../../assets/category/household.png';
// import Pub from '../../assets/category/public-transport.png';
// import Soc from '../../assets/category/socket.png';
// import Water from '../../assets/category/water-pipe.png';
// import cirlpic from '../../assets/Rect2.png';

const SubCat = () => {

    
    useEffect(() => {
        axios.get('https://maahirpro.com/maahir/index.php/api/get_category_list')
        
        .then(res => {
            console.log(res.data.category)
        })
        .catch(err =>  console.log(err))

       
    }, [])



    // const [Arr, setArr] = useState([
    //     {
    //         img : Agri,
    //         name: 'Agriculture',
    //         description: "Field is Futures."
    //     },
    //     {
    //         img : Brick,
    //         name: 'Construction',
    //         description: "Committed to superior quality and results."
    //     },
    //     {
    //         img : Fash,
    //         name: 'Laundary',
    //         description: "We caring Clothes better."
    //     },
    //     {
    //         img : Gard,
    //         name: 'Gardening',
    //         description: "The garden everyone loves."
    //     },
    //     {
    //         img : House,
    //         name: 'Cleaning',
    //         description: "Do you want your home or office to be neat and tidy?"
    //     },
    //     {
    //         img : Pub,
    //         name: 'Transport',
    //         description: "Excellence in motion."
    //     },
    //     {
    //         img : Soc,
    //         name: 'Electrician',
    //         description: "We'll get amp-ed up on your current electrical needs!"
    //     },
    //     {
    //         img : Water,
    //         name: 'Plumber',
    //         description: "Plumbing done right. Guaranteed."
    //     },
    //     {
    //         img : Agri,
    //         name: 'Agriculture',
    //         description: "Field is Futures."
    //     }
    // ])

    return (
            <div className="container-fluid whole-div">
                <div className="container">
                    <div className='row'>
                {/* {   
                    Arr.map(m => 
                    {
                        return(
                        <div className="col-md-4 col-sm-6 py-5" data-aos="fade-right"> 
                                    <img src={cirlpic} alt="Circle pic"/>
                               
                                    <img className="circle-div" src={m.img}/>
                                    <h4>{m.name}</h4>
                                    <p>{m.description}</p>
                               
                            

                        </div>
                        
                        )
                    })
                } */}
                </div>
            </div>
        </div>
    )
}

export default SubCat;