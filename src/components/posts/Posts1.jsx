import Post1 from "../post/Post1";
import Post2 from "../post/Post2";
import Post3 from "../post/Post3";
import Post4 from "../post/Post4";
import Post5 from "../post/Post5";
import "./posts.css";

export default function Posts1() {
  return (
    <div className="posts">
      <Post1 img="https://s3.amazonaws.com/books-that-grow/public/books/1402339535/covers/TellTaleHeart_Cover_336.png" />
      <Post2 img="https://miro.medium.com/max/1400/1*Pjqg3T7bik_6Qf2o4oxC_A.jpeg" />
      <Post3 img="https://assets.americanliterature.com/al/images/story/the-little-match-girl.jpg"/>
      <Post4 img="https://media.istockphoto.com/videos/rope-noose-hanging-on-black-background-video-id661954882?s=640x640"/>
      <Post5 img="https://cdn.americanliterature.com/al/images/story/a_dark_brown_dog_1.jpg"/>
    </div>
  );
}
