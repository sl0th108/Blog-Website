import "./header.css";


    let x = 1111111 + Math.floor(Math.random() * 7777777)


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <h1> Your Stories </h1>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src={"https://images.pexels.com/photos/" + x + "/pexels-photo-" + x + ".jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        alt=""
      />
    </div>
  );
}
