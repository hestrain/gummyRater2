export function GummyCard({ gummy }) {
  let date = new Date(gummy.dateCreated);
  let stringDate = date.toString();
  let notes = gummy.notes;
  return (
    <div key={gummy.id} className="gummy">
      <h1>{gummy.title}</h1>
      <h2>{gummy.brand}</h2>
      <p className="rating">{gummy.rating}/10</p>
      <p className="content">
        CBD: {gummy.cbd}mg  THC: {gummy.thc}mg
      </p>
      <p>Horn: {gummy.horn}</p>
      <p className="munch">
    Munch: {gummy.munchie}
        <br /> MunchNotes: {gummy.munchNotes}
      </p>
      <h3>Notes</h3>
      {notes.map((note) => {
        return <li>{note}</li>;
      })}
      <p className="date">Logged: {stringDate.slice(4, 15)}</p>
    </div>
  );
}
