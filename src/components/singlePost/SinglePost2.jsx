import { Link } from "react-router-dom";
import "./singlePost.css";
import defaultContent from "../content/content";



export default function SinglePost2() {
  
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://scranton.librarycalendar.com/sites/default/files/styles/large/public/2020-11/magi.jpg?itok=VnYoC02o"
          alt=""
        />
        <h1 className="singlePostTitle">
          {defaultContent[1].title}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {defaultContent[1].author}
              </Link>
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          {defaultContent[1].story}
        </p>
      </div>
        <h2>
          
        <form onSubmit={e => { e.preventDefault();}}>
          <textarea
            className="writeInput writeText2"
            placeholder="comment..."
            type="text"
            autoFocus={true}>
            
          </textarea>

          
          
          <button className="writeSubmit2" type="submit">
          Publish
        </button>
        </form>
      </h2>
    </div>
  );
}

