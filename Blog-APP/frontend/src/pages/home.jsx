import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Home(){
    const[loading,setLoading] = useState(true);
    const[posts,setPosts] = useState([]);
    const load = async() =>{
        const res = await fetch("http://localhost:3000/blogs");
        const data = await res.json();
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
