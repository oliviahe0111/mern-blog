import {useEffect} from "react";
import {useState} from "react";
import {formatISO9075} from "date-fns"

import Post from "../Post";
import { useParams } from "react-router-dom";

export default function PostPage(){
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
        // console.log(id);

        fetch(`http://localhost:4000/post/${id}`).then(response => {
            response.json().then(postInfo =>{
                setPostInfo(postInfo);
                console.log(postInfo);
            });
        })
    },[]);

    if(!postInfo) return '';

    return(
        <div className="post-page">
            <div className="image">
                <img src={`http://localhost:4000/${postInfo.cover}`} alt=''/>
            </div>
            <h1>{postInfo.title}</h1>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by @{postInfo.author.username}</div>
            <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}}/>
            {/* dangerouslySetInnerHTML is used because we want to keep the variouse HTML tags in content from DB*/}
        </div>

    );
}