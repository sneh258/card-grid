import React, { useEffect,useState } from 'react';
import axios from 'axios';
import './App.css';

function AppOne() {
  
    const[post,setPosts]=useState([]);

    const handlePost=async()=>{
        const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
    }

    useEffect(()=>{
     handlePost();
    },[])

  return (
    <>
    <div className='post-container'>
        {post.map((post)=>{
            return <div key={post.id} className='card-container'>
             <div className='title'><strong>{post.title}</strong></div>
             <div className='body'>{post.body}</div>
            </div>
        })}
    </div>
    </>
  );
}

export default AppOne;
