import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../styles/slider.css'
import React,{useState, useEffect} from 'react'
//import { sliderItems } from '../data'
import axios from 'axios'
const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {
        if(direction === "left" ){
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)  
          console.log(slideIndex)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)  
            console.log(slideIndex)
        }
    }
    
    const[slider, setSlider] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/slider');
        setSlider(result.data);
  
      }
      fetchData();
    }, []);

    return(
        <div className='s-container'>
        <div className='s-arrow left' onClick={() => handleClick("left")}>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </div>
        <div className="wrapper" >
            { slider.map((item) => (
            <div className="slide" key ={item._id}>
                <div className="img-container">
                 <img src={slider[slideIndex].image} className='s-img' alt=''/>  
                </div>
            </div>
            )) }
        </div>
        <div className='s-arrow right' onClick={() => handleClick("right")}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </div>
        
        </div>
    )
}

export default Slider