import { Link } from "react-router-dom";
import "./singlePost.css";
import defaultContent from "../content/content";



export default function SinglePost4() {
  
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://shorthand-social.imgix.net/prod/story/u2j2BAWopn/media/b3be5250c27b11e7a61c7318cab86c92/original.jpg?w=1100&h=1100&fit=clip&fm=jpg&q=70&auto=format"
          alt=""
        />
        <h1 className="singlePostTitle">
          {defaultContent[3].title}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {defaultContent[3].author}
              </Link>
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          {defaultContent[3].story}
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
