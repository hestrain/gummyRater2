import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function GummyCard({ gummy }) {
  let date = new Date(gummy.dateCreated);
  let stringDate = date.toString();

  return (
      <div key={gummy.id} className="gummy">
      <div className="gummyTitle">{gummy.title}</div>
      <div className="gummyBrand">from {gummy.brand}</div>
      <div className="score">
        <div className="gummyRating">{gummy.rating}/10</div>
        <div className="ratingWord">rating</div>
      </div>
      <button className="infoButton">More Info</button>
        <p className="date">{stringDate.slice(4, 15)}</p>


      {/* <h1>{gummy.title}</h1>
      <h2>{gummy.brand}</h2>
      <p className="rating">{gummy.rating}/10</p>
      <p className="content">
        CBD: {gummy.cbd}mg THC: {gummy.thc}mg
      </p>
      <p>Horn: {gummy.horn}</p>
      <p className="munch">
        Munch: {gummy.munchie}
        <br /> MunchNotes: {gummy.munchNotes}
      </p>
      <h3>Notes</h3>
      <li>{gummy.notes}</li>
      <p className="date">Logged: {stringDate.slice(4, 15)}</p> */}
    </div>
  );
}
