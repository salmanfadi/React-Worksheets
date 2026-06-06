import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetPost, GetPosts } from "../api/api";


export function Home(){
    const[loading,setLoading] = useState(true);
    const[posts,setPosts] = useState([]);
    const load = async() =>{
        const data = await GetPosts();
        setLoading(false);
        setPosts(data);
    };

    useEffect(() =>{
        load();
    },[]);

    if(loading) return <div>Loading...</div>;
    return(
        <div>
            <h1>Blogs</h1>
            <hr />
            <Link to="/create"><button>Create Post</button></Link>
            <ol>
                {posts.map((post)=>(
                    <li key={post.ID}>
                        <Link to={`${post.ID}/`}>{post.title}</Link>
                    </li>
                ))}
            </ol>
        </div>
    );
}
