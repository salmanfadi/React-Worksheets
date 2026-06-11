import { useEffect, useState } from "react";

export function Home(){
    const [loading,setLoading] = useState(true);
    const [products,setProducts] = useState([]);

    const load = async() =>{
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setLoading(false);
        setProducts(data);
    };

    
    useEffect(()=>{
        load();
    },[]);

    console.log(products);

    if (loading) return <div>Loading...</div>;

    return(
        <>
            <h1>Home</h1>
            <hr />
            {
                products
                .map((product,index)=>(
                    <p key={index}>{product.title} - ${product.price}</p>
                ))
            }
        </>
    );

}