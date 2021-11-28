import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts1 from "../../components/posts/Posts1";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <div className="home">
        <Posts1 />
      </div>
    </>
  );
}
