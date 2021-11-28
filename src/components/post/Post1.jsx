import { Link } from "react-router-dom";
import "./post.css";
import defaultContent from "../content/content";

export default function Post1({img}) {
  return (
  <Link to="/post1/a" className="link">
    <div className="post">
      
      <img
        className="postImg"
        src={img}
        alt=""
      />
      

      <div className="postInfo">
        <span className="postTitle">
            {defaultContent[0].title}
        </span>
        <p>
          {defaultContent[0].author}
        </p>
      </div>
      <p className="postDesc">
        {defaultContent[0].description}
      </p>
    </div>
    
    </Link>
    
  );
}
