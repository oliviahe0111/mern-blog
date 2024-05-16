import { useEffect } from "react";
import {useState} from "react";
import { Link } from "react-router-dom";

export default function Header(){
    const [username, setUsername] = useState(null);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        }).then(response =>{
            response.json().then(userInfo => {
                setUsername(userInfo.username);
            });
        });
    }, []);

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials:'include',
            method: "POST",
        })

    }


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
