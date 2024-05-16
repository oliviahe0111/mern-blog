import {formatISO9075} from "date-fns"

export default function Post({title, summary, cover,content, createdAt, author}){
    return(
        <div className='post'>
            <div className='image'>
            <img src='https://images.lifestyleasia.com/wp-content/uploads/sites/6/2024/01/31141627/south-korean-singer-actress-iu-boyfriend-personal-life-lee-jong-suk-bts-v.jpg'/>
            </div>
            <div className="texts">
            <h2>{title}</h2>
            <p className='info'>
                <a className='author'>{author.username}</a>
                <time>{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className='summary'>{summary}</p>
            </div>
        </div>
    );
}

