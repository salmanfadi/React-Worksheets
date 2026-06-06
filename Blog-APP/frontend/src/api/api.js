export async function GetPosts(){
    const res = await fetch("http://localhost:3000/blogs");
    const data = await res.json();
    return data;
};
export async function GetPost(id){
    const res = await fetch(`http://localhost:3000/blogs/${id}`);
    const data = await res.json();
    return data;
};
export async function CreatePosts(){
    const res = await fetch("http://localhost:3000/blogs",{
            method : "POST",
            body : JSON.stringify({title,content}),
            headers : {
                "Content-Type": "Application/json",
            },
    });
};
export async function UpdatePosts(id,title,content){
    const res = await fetch(`http://localhost:3000/blogs/${id}`,{
            method : "PUT",
            body : JSON.stringify({title,content}),
            headers : {
                "Content-Type": "Application/json",
            },
    });
}