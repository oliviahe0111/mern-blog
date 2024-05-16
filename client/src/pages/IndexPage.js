import { useEffect } from "react";
import {useState} from "react";

import Post from "../Post";

export default function IndexPage(){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts =>{
                setPosts(posts);
                console.log(posts);
            });
        })
    },[]);
    return(
        <div>
            {posts.length > 0 && posts.map(post => (
                <Post{...post}></Post>
            ))}
        </div>



    );
}