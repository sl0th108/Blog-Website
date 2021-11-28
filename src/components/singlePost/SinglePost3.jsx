import { Link } from "react-router-dom";
import "./singlePost.css";
import defaultContent from "../content/content";



export default function SinglePost3() {
  
  return (
    
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1610953169i/30715368._SY540_.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
          {defaultContent[2].title}
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {defaultContent[2].author}
              </Link>
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          {defaultContent[2].story}
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
