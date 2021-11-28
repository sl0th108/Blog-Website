import { Link } from "react-router-dom";
import "./post.css";
import defaultContent from "../content/content";

export default function Post5({img}) {
  return (
  <Link to="/post5/abcde" className="link">
    <div className="post">
      
      <img
        className="postImg"
        src={img}
        alt=""
      />
      

      <div className="postInfo">
        <span className="postTitle">
            {defaultContent[4].title}
        </span>
        <p>
          {defaultContent[4].author}
        </p>
      </div>
      <p className="postDesc">
        {defaultContent[4].description}
      </p>
    </div>
    </Link>
  );
}

