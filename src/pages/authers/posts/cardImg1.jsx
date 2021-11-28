import Card1 from "../card/card1";
import Card2 from "../card/Card2";
import Card3 from "../card/Card3";
import Card4 from "../card/Card4";
import Card5 from "../card/Card5";
import "./posts.css";

export default function CardImg1() {
  return (
    <div className="posts">
      <Card1 img="https://s3.amazonaws.com/books-that-grow/public/books/1402339535/covers/TellTaleHeart_Cover_336.png" />
      <Card2 img="https://miro.medium.com/max/1400/1*Pjqg3T7bik_6Qf2o4oxC_A.jpeg" />
      <Card3 img="https://assets.americanliterature.com/al/images/story/the-little-match-girl.jpg"/>
      <Card4 img="https://media.istockphoto.com/videos/rope-noose-hanging-on-black-background-video-id661954882?s=640x640"/>
      <Card5 img="https://cdn.americanliterature.com/al/images/story/a_dark_brown_dog_1.jpg"/>
    </div>
  );
}
