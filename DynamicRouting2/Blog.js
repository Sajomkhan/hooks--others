import React, {useState, useEffect} from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { Data } from './Data'


const Blog = () => {  
  const navigate = useNavigate();
  const location = useLocation(); 
  // const {title} = useParams();
  
  // const [bodyData, setBodyData] = useState("");

  // useEffect(()=>{
  //   Data.filter((blog)=> blog.title===title);
  //   setBodyData(Data[0].body)
  // }, [])
  
  return (
    <div>
      <article>
        <h3>{location.state.title} Page</h3>
        <p>{location.state.body.slice(0, 500)}</p>
        <p>{location.state.body.slice(501, 1000)}</p>
      </article>
      <button onClick={()=>{navigate('/blogs')}} >Blogs</button>
    </div>
  )
}

export default Blog