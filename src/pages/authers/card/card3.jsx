import { Link } from "react-router-dom";
import "./post.css";
import defaultContent from "../content/content";

export default function Card3({img}) {
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
            f
        </span>
        <p>
          f
        </p>
      </div>
      <p className="postDesc">
        f
      </p>
    </div>
    </Link>
  );
}
