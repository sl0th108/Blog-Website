import { Link } from "react-router-dom";
import "./post.css";
import defaultContent from "../content/content";

export default function Post4({img}) {
  return (
  <Link to="/post4/abcd" className="link">
    <div className="post">
      
      <img
        className="postImg"
        src={img}
        alt=""
      />
      

      <div className="postInfo">
        <span className="postTitle">
            {defaultContent[3].title}
        </span>
        <p>
          {defaultContent[3].author}
        </p>
      </div>
      <p className="postDesc">
        {defaultContent[3].description}
      </p>
    </div>
    </Link>
  );
}
