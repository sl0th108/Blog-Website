import { Link } from "react-router-dom";
import "./post.css";
import defaultContent from "../content/content";

export default function Post3({img}) {
  return (
  <Link to="/post3/abc" className="link">
    <div className="post">
      
      <img
        className="postImg"
        src={img}
        alt=""
      />
      

      <div className="postInfo">
        <span className="postTitle">
            {defaultContent[2].title}
        </span>
        <p>
          {defaultContent[2].author}
        </p>
      </div>
      <p className="postDesc">
        {defaultContent[2].description}
      </p>
    </div>
    </Link>
  );
}
