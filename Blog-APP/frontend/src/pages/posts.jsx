import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Post(){
    const {id} = useParams();
    const[loading,setLoading] = useState(true);
    const[post,setPost] = useState();
    const load = async() =>{
    const res = await fetch(`http://localhost:3000/blogs/${id}`);
    const data = await res.json();
        setLoading(false);
        setPost(data);
    };
    
    useEffect(() =>{
        load();
    },[]);
    
    if(loading) return <div>Loading...</div>;
    return(
        
        <div>
            <h1>{post.title}</h1>
            <Link to={`update/`}><button>Update Post</button></Link>
            <hr />
            <p>{post.content}</p>
        </div>
    );
}