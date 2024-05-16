import { useEffect } from "react";
import { useContext } from "react";
import {useState} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header(){
    const {setUserInfo, userInfo} = useContext(UserContext);
    //useState is a hook in React, username is a state variable and setUsername is a setter function
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response =>{
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials:'include',
            method: "POST",
        });
        setUserInfo(null); //automatically refreshes the header part once we logout

    }

    const username = userInfo?.username; //? allows us to safely access username even tho user name is undefined

    return(
        <header>
        <Link to="/" className='logo'>MyBlog</Link>
        <nav>
            {/* if we have username */}
            {username &&(
                <>
                    <Link to = "/create">Create new post</Link>
                    <a onClick={logout}>Logout</a>
                </>
            )}
            {/* if we dont have a username login */}
            {!username &&(
                <>
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </>
            )}

        </nav>
        </header>
    );
}
