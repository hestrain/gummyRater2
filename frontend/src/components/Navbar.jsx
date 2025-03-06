import { Link } from "react-router-dom";
import { pageData } from "./pageData";

export function Navbar() {
  let x = 0;
  return (
    < div className ="navbar">


      {pageData.map((page) => {
        x = +1;
        return (
          <Link to={page.path} key={x}>
          <div className="tooltip">
            <img className="navImg" src={page.image}></img>
          <span className="tooltiptext">{page.linkName}</span>
        </div>
          </Link>
        );
      })}
    </div>
  );
}
