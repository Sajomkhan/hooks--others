import React, {useState} from "react";
import { Data } from "./Data";
import {Link, useNavigate } from "react-router-dom";


const Blogs = () => {
  const navigate = useNavigate();    
  const [blogsData, setBlogsData] = useState(Data);

  const tranketString = (str, num) => {
    if(str.length > num) {
      return str.slice(0, num) + "...";
    }else{
      return str;
    }
  }
  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogsData.map((blogData) => {
          const { id, title, body } = blogData;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{tranketString (body, 100)}</p>
              <Link to={title} state={{id, title, body}} >Learn more</Link>            
            </article>
          );
        })}
         
      </section><br/>
      <button onClick={()=>{navigate('/contact')}} >Contact</button>  
    </div>
  );
};

export default Blogs;
