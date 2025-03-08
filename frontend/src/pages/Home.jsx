import { getGummys } from "../api";
import { useState, useEffect } from "react";
import { GummyCard } from "../components/GummyCard";

export function Home() {
  const [gummys, setGummys] = useState([]);

  useEffect(() => {
    async function loadAllGummys() {
      const data = await getGummys();
      console.log(data);

      data.sort(
        (d1, d2) =>
          new Date(d2.dateCreated).getTime() -
          new Date(d1.dateCreated).getTime()
      );
      setGummys(data);
    }

    loadAllGummys();
  }, []);

  return (
    <>
      <h1>Gummys</h1>
      <h3>You&apos;ve Logged {gummys.length} Gummys</h3>
      <div className="gummys">
        {gummys.map((gummy) => {
          return <GummyCard gummy={gummy} key={gummy.id} />;
        })}
      </div>
    </>
  );
}
