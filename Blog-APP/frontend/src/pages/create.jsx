import { Link, Navigate, useNavigate } from "react-router-dom";
import { CreatePosts } from "../api/api";

export function CreatePost(){
    const navigate = useNavigate();
    const create = async (e) => {
        console.log(e);
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const res = await CreatePosts();
        navigate("/");
    };
    return (
        <div>
            <h1>Update Post</h1>
            <hr />
            <Link to="/"><button>Home</button></Link>
            <form onSubmit={create}>
                <label htmlFor="title">Title</label>
                <br />
                <input type="text" name="title" />
                <br />
                <label htmlFor="content">Content</label>
                <br />
                <textarea name="content" id=""></textarea>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
}