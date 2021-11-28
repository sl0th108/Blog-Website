import { Link } from "react-router-dom";
import "./post.css";

export default function Card1({img}) {
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
