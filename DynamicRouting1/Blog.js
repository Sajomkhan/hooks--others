import React, { useState, useEffect } from "react";
import { Data } from "./Data";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {

  const navigation = useNavigate();
  const { title } = useParams();
  const [bodyData, setBodyData] = useState("");

  useEffect(() => {
    Data.filter((blog) => blog.title === title);
    setBodyData(Data[0].body);
  }, []);

  return (
    <div>
      <h2>{title} Page</h2>
      <p>{bodyData}</p>
      <button onClick={()=>{navigation('/blogs')}}>Back</button>
    </div>    
  );
};

export default Blog;
