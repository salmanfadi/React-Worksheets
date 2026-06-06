import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GetPost } from "../api/api";

export default function Post(){
    const {id} = useParams();
    const[loading,setLoading] = useState(true);
    const[post,setPost] = useState();
    const load = async() =>{
        const data = await GetPost(id);
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