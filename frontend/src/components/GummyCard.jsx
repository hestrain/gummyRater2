import { deleteGummy } from "../api";

export function GummyCard({ gummy }) {
  let date = new Date(gummy.dateCreated);
  let stringDate = date.toString();

  function Button({ onClick, children }) {
    return (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        {children}
      </button>
    );
  }

  const gummyDelete = async (id) => {
    console.log(`deleting ${id}`);
    
    if (confirm("Are you sure you want to delete?")) {

        await deleteGummy(id);
    
        console.log(`delete success`);
        window.location.reload(false);

      } else {
        console.log("cancelled delete");
        
      }
  };
  const showModal = async (id) => {
    console.log(`getting modal for ${id}`);

    let modal = document.getElementById(`${id}`);
    modal.style.display = "block";
  };

  const hideModal = async (id) => {
    console.log(`closing ${id}`);
    let modal = document.getElementById(`${id}`);
    modal.style.display = "none";
  };

  return (
    <div key={gummy._id} className="gummy">
      <div className="gummyTitle">{gummy.title}</div>
      <div className="gummyBrand">from {gummy.brand}</div>
      <div className="score">
        <div className="gummyRating">{gummy.rating}/10</div>
        <div className="ratingWord">rating</div>
      </div>
      <Button
        data-number={gummy.id}
        className="infoButton"
        onClick={() => showModal(gummy._id)}
      >
        More Info
      </Button>
   
      <p className="date">{stringDate.slice(4, 15)}</p>
      {/* <!-- Trigger/Open The Modal --> */}

      {/* <!-- The Modal --> */}
      <div id={gummy._id} className="modal">
        {/* <!-- Modal content --> */}
        <div className="modal-content">
          <div className="modal-header">
            <span onClick={() => hideModal(gummy._id)} className="close">
              &times;
            </span>
            <div className="gummyTitle">{gummy.title}</div>
            <div className="gummyBrand">from {gummy.brand}</div>
            <div className="mg">
              {gummy.thc}mg THC, {gummy.cbd}mg CBD
            </div>
          </div>
          <div className="modal-body">
            <div className="ratings">
              <div className="score3">
                <div className="gummyRating">{gummy.rating}/10</div>
                <div className="ratingWord">overall rating</div>
              </div>
              <div className="score3">
                <div className="gummyRating">{gummy.horn}</div>
                <div className="ratingWord">horny score</div>
              </div>
              <div className="score3">
                <div className="gummyRating">{gummy.munchie}/10</div>
                <div className="ratingWord">munchie rating</div>
              </div>
            </div>
            <div className="notes">
              <div className="otherNotes">
                <h3>General Notes</h3>
                <div>{gummy.notes}</div>
              </div>
              <div className="munchNotes">
                <h3>Munchie Notes</h3>
                <div>{gummy.munchNotes}</div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <p className="date">Logged: {stringDate.slice(4, 15)}</p>
            <button className="deleteButton" onClick={() => gummyDelete(gummy._id)}>
        delete
      </button>
          </div>
        </div>
      </div>

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
