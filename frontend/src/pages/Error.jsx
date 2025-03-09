export default function Error() {

    function home (){
        window.location.replace("/home");
    }
    function add (){
        window.location.replace("/newRating");
    }

  return (
    <>
      {/* <h1>Welcome to the Gummy Rating Site</h1> */}
      <img className="logo" src="/weedsite-error.png" alt="Oopsies! An Error Occured"></img>
      <div className="landingOptions">
        <div className="landingText">Click </div>
        <img onClick={home}
          className="tinyIcon"
          src="/cannabis-leaf-svgrepo-com.svg"
        ></img>{" "}
        <div className="landingText" alt="Weed Leaf">to see your Gummys, </div>
      </div>
      <div className="landingOptions">
        <div className="landingText">Click </div>
        <img onClick={add} className="tinyIcon" src="/icons8-plus-button.svg" alt="Plus Sign"></img>{" "}
        <div className="landingText">to add more Gummys!</div>
      </div>
    </>
  );
}
