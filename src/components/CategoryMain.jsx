import axios from 'axios'
import React, {useState, useEffect} from 'react'
//import { category } from '../data'
import '../styles/categorymain.css'
const CategoryMain = () => {

    const[category, setCategory] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get('/api/category');
        setCategory(result.data);
  
      }
      fetchData();
    }, []);
    return(
        <div className='c-container'>
        <div className="c-row">
            {category.map((item)=>(
                
                    <div className="c-col">
                    <img src={item.image} alt={item._id} />
                    <div className='category-content'>
                        <p>{item.title}</p>
                        <button  className='c-btn'>Shop Now</button>
                    </div>
                    </div>
            ))}
        </div>
        </div>
    )
}
export default CategoryMain