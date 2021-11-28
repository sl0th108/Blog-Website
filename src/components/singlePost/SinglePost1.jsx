import { Link } from "react-router-dom";
import "./singlePost.css";
import defaultContent from "../content/content";
import { useLocation } from "react-router";



export default function SinglePost1() {
  const location = useLocation();
    console.log(location); 
  return (
    
     

    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://m.media-amazon.com/images/I/51tl5B4NstL._SL500_.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {defaultContent[0].title}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {defaultContent[0].author}
              </Link>
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          {defaultContent[0].story}
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
