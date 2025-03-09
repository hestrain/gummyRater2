import { deleteGummy } from "../api";

export function GummyCard({ gummy }) {
  let date = new Date(gummy.dateCreated);
  let stringDate = date.toString();

  function Button({ onClick, children }) {
    return (
      <button
        className="infoButton"
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

  //color code borders on ratings on non-modal cards
  const colorCoded = (rating) => {
    
    if(rating > 8){
      return (`score goodRating`)
    } else if (rating <= 8 && rating > 4) {
      return ("score midRating")
    } else {
      return ("score badRating")
    }
  }

  return (
    <div className="gummy">
      <div className="gummyTitle">{gummy.title}</div>
      <div className="gummyBrand">from {gummy.brand}</div>
      <div className={colorCoded(gummy.rating)}>
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
          {/* Modal header */}
          <div className="modal-header">
            {/* close button */}
            <span onClick={() => hideModal(gummy._id)} className="close">
              &times;
            </span>
            <div className="gummyTitle">{gummy.title}</div>
            <div className="gummyBrand">from {gummy.brand}</div>
            <div className="mg">
              {gummy.thc}mg THC, {gummy.cbd}mg CBD
            </div>
          </div>
          {/* modal body */}
          <div className="modal-body">
            <div className="ratings">
              {/* the ratings */}
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
          {/* other notes */}
            <div className="other-stuff">
              <div className="felt">
                <p className="bolded">When did you feel it?</p><p> {gummy.felt}</p>
              </div>
              <div className="felt">

                <p className="bolded">Ok for a weeknight?</p><p>{gummy.weeknight}</p>
              </div>
            </div>
            <div className="notes">
              <div className="general-notes">
                <h3>Notes</h3>
                <div>{gummy.notes}</div>
              </div>
              <div className="munchieNotes">
                <h3>munchie Notes</h3>
                <div>{gummy.munchNotes}</div>
              </div>
            </div>
            </div>
          <div className="modal-footer">
            <p className="date">Logged: {stringDate.slice(4, 15)}</p>
            <button
              className="deleteButton"
              onClick={() => gummyDelete(gummy._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}
