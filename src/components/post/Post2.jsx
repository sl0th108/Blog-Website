import { Link } from "react-router-dom";
import "./post.css";
import defaultContent from "../content/content";

export default function Post2({img}) {
  return (
  <Link to="/post2/ab" className="link">
    <div className="post">
      
      <img
        className="postImg"
        src={img}
        alt=""
      />
      

      <div className="postInfo">
        <span className="postTitle">
            {defaultContent[1].title}
        </span>
        <p>
          {defaultContent[1].author}
        </p>
      </div>
      <p className="postDesc">
        {defaultContent[1].description}
      </p>
    </div>
    </Link>
  );
}
