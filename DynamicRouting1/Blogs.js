import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Data } from "./Data";

const Blogs = () => {
  const [blogs, setBlogs] = useState(Data);
  const navigation = useNavigate(); //navigation button
  
  //slicing the articles
  const truncateString = (str, num)=>{
    if(str.length > num){
      return str.slice(0, num) + "..."
    }else{
      return str;
    }
  }  
  return (
    <div>
      <h1>Blogs Page</h1>
      <section>
        {blogs.map((blog) => {
          const { id, title, body } = blog;
          return (
            <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body, 100)}</p>
              <Link to={title}>Learn more</Link>
            </article>
          );
        })}
      </section><br/>
      <button onClick={()=>{navigation('/contact')}}>Contact</button>
    </div>
  );
};

export default Blogs;
