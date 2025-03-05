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
            <button>{page.linkName}</button>
          </Link>
        );
      })}
    </div>
  );
}
