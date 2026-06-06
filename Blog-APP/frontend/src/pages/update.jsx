import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function UpdatePost(){
    const {id} = useParams();
    const[loading,setLoading] = useState(true);
    const[post,setPost] = useState();
    const load = async() => {
        const res = await fetch(`http://localhost:3000/blogs/${id}`)
        const data = await res.json();
        setPost(data);
        setLoading(false);
    };

    useEffect(()=>{
        load();
    },[]);

    const navigate = useNavigate();
    const update = async (e) => {
        console.log(e);
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const res = await fetch(`http://localhost:3000/blogs/${id}`,{
            method : "PUT",
            body : JSON.stringify({title,content}),
            headers : {
                "Content-Type": "Application/json",
            },
        });
        navigate("/");
    };

    if(loading) return <div>Loading...</div>;
    return (
        <div>
            <h1>Update Post</h1>
            <hr />
            <Link to="/"><button>Home</button></Link>
            <form onSubmit={update}>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" defaultValue={post.title} />
                <br />
                <label htmlFor="content">Content</label>
                <br />
                <textarea name="content" id="" defaultValue={post.content}></textarea>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}