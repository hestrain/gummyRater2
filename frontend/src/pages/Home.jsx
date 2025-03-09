import { getGummys } from "../api";
import { useState, useEffect } from "react";
import { GummyCard } from "../components/GummyCard";

export default function Home() {
  const [gummys, setGummys] = useState([]);
  const [sort, setSort] = useState("date");

  const sorting = (data) => {
    console.log(`sorting by ${sort}`);

    if (sort == "date") {
      //sort by date
      data.sort(
        (d1, d2) =>
          new Date(d2.dateCreated).getTime() -
          new Date(d1.dateCreated).getTime()
      );
      return data;
    } else {
      //sort by rating
      data.sort((a, b) => b.rating - a.rating);
      return data;
    }
  };

  // const sortSet = () => {
  //   if (sort == "date") {

  //     setSort("rating");
  //     console.log(`NOW sorting by ${sort}`);

  //   } else if (sort == "rating") {

  //     setSort("date");
  //     console.log(`sorting by ${sort}`);
      
  //   }
  // };

  useEffect(() => {
    async function loadAllGummys() {
      let data = await getGummys();
      console.log(data);
      data = sorting(data);

      setGummys(data);
    }

    loadAllGummys();
  }, []);

  return (
    <>
      <h1>Gummys</h1>
      <h3>You&apos;ve Logged {gummys.length} Gummys</h3>
      {/* sorting section */}
      {/* <p>You&apos;re currently sorting by {sort}</p>
      <button className="sortingButton" onClick={sortSet}>
        {" "}
        Click to change sort
      </button> */}
      {/* sorting section end */}
      <div className="gummys">
        {gummys.map((gummy) => {
          return <GummyCard gummy={gummy} key={gummy.id} />;
        })}
      </div>
    </>
  );
}
