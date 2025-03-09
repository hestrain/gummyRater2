import { useState } from "react";
import { createGummy } from "../api";
import axios from "axios";

export default function NewRating() {
  const [userFormData, setUserFormData] = useState({
    brand: "",
    title: "",
    notes: "",
    felt: "",
    rating: "",
    horn: "",
    munchie: "",
    munchNotes: "",
    morningAfter: "",
    weeknight: "",
    cbd: "",
    thc: "",
  });
  const [file, setFile] = useState();

  const handleAdd = async (event) => {
    event.preventDefault();

    const newGummy = {
      brand: userFormData.brand,
      title: userFormData.title,
      notes: userFormData.notes,
      felt: userFormData.felt,
      rating: userFormData.rating,
      horn: userFormData.horn,
      munchie: userFormData.munchie,
      munchNotes: userFormData.munchNotes,
      morningAfter: userFormData.morningAfter,
      weeknight: userFormData.weeknight,
      cbd: userFormData.cbd,
      thc: userFormData.thc,
      dateCreated: new Date(),
    };
    console.log(newGummy);

    await createGummy(newGummy);
    console.log("added to db");
    // navigate("/home")
    window.location.replace("/home");
    // alert(`Logged "${userFormData.title}", go to Home Page to see it`);

    setUserFormData({
      brand: "",
      title: "",
      notes: "",
      felt: "",
      rating: "",
      horn: "",
      munchie: "",
      munchNotes: "",
      morningAfter: "",
      weeknight: "",
      cbd: "",
      thc: "",
    });

    console.log("cleared");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const fileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const upload = () => {
    const formData = new FormData()
    formData.append('file', file)
    axios.post('http://localhost:3001/upload', formData)
    .then(res => {}).catch(er => console.log(er))
  }

  return (
    <div className="containerForm">
      {/* form */}
      <form className="formBox">
        <h1 className="CQfont">Log New Gummy</h1>
        {/* gummy title */}

        <label htmlFor="title" className="label-top">
          Title
        </label>
        <input
          type="text"
          name="title"
          value={userFormData.title}
          onChange={handleInputChange}
          className="inputField"
          required
        />
        {/* gummy brand */}

        <label htmlFor="brand" className="label-top">
          Brand
        </label>
        <input
          type="text"
          className="inputField"
          name="brand"
          value={userFormData.brand}
          onChange={handleInputChange}
          required
        />
        {/* rating section */}

        <div className="formRatings">
          {/* overall rating (out of 10) */}
          <div className="labelStack">
            <input
              type="number"
              name="rating"
              min="1"
              max="10"
              value={userFormData.rating}
              onChange={handleInputChange}
              className="inputField inputNumber"
              required
            />
            <label htmlFor="rating" className="label-bottom">
              Rating /10
            </label>
          </div>
          {/* horny rating (letter grade) */}

          <div className="labelStack letterGrade">
            <select id="horn" name="horn">
              <option value="-">-</option>
              <option value="A+">A+</option>
              <option value="A">A</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B">B</option>
              <option value="B-">B-</option>
              <option value="C+">C+</option>
              <option value="C">C</option>
              <option value="C-">C-</option>
              <option value="D">D</option>
              <option value="F">F</option>
            </select>
            <label htmlFor="horn" className="label-bottom">
              Horndog Grade
            </label>
          </div>
          {/* munchie rating (out of 10) */}

          <div className="labelStack">
            <input
              type="number"
              name="munchie"
              min="1"
              max="10"
              value={userFormData.munchie}
              onChange={handleInputChange}
              className="inputField inputNumber"
              required
            />
            <label htmlFor="munchie" className="label-bottom">
              Munchie Level /10
            </label>
          </div>
        </div>
        {/* Specific notes about munchies */}

        <label htmlFor="munchNotes" className="label-top">
          Munchie Notes
        </label>
        <textarea
          type="text"
          name="munchNotes"
          value={userFormData.munchNotes}
          onChange={handleInputChange}
          className="inputField"
          required
        />
        {/* general notes */}

        <label htmlFor="notes" className="label-top">
          General Notes
        </label>
        <textarea
          type="text"
          name="notes"
          value={userFormData.notes}
          onChange={handleInputChange}
          className="inputField"
          required
        />
        {/* when did you feel it */}

        <label htmlFor="felt" className="label-top">
          When did you feel it?
        </label>
        <input
          type="text"
          name="felt"
          value={userFormData.felt}
          onChange={handleInputChange}
          className="inputField"
          required
        />
        {/* howd u feel the next day */}

        <label htmlFor="morningAfter" className="label-top">
          Morning After Vibe
        </label>
        <input
          type="text"
          name="morningAfter"
          value={userFormData.morningAfter}
          onChange={handleInputChange}
          className="inputField"
          required
        />
        {/* ok for week night? (assumed work next day) */}

        <label htmlFor="weeknight" className="label-top">
          Ok for a Weeknight?
        </label>
        <input
          type="text"
          name="weeknight"
          value={userFormData.weeknight}
          onChange={handleInputChange}
          className="inputField"
          required
        />
        {/* contents of gummy section */}
        <div className="amounts">
         
          {/* cbd amount */}

          <div className="labelStack">
            <input
              type="number"
              name="cbd"
              min="0"
              value={userFormData.cbd}
              onChange={handleInputChange}
              className="inputField inputNumber"
              required
            />
            <label htmlFor="dbc" className="label-bottom">
              CBD (mg)
            </label>
          </div>
         
          {/* thc amount */}

          <div className="labelStack">
            <input
              type="number"
              name="thc"
              min="0"
              value={userFormData.thc}
              onChange={handleInputChange}
              className="inputField inputNumber"
              required
            />
            <label htmlFor="thc" className="label-bottom">
              THC (mg)
            </label>
          </div>
          
          {/* IN PROGRESS photo upload section */}

          <label htmlFor="photo">Select a photo:</label>
          <input type="file" id="photo" name="photo" accept="image/*" onChange={(e) =>fileUpload(e)} />
          <button type="photo-button" onClick={upload}>Upload</button>
          <div id="preview" className="preview"></div>
        </div>
        
        {/* SUBMIT BUTTON!!! */}

        <button
          type="submit"
          onClick={handleAdd}
          className="addBtn"
          id="addBtn"
        >
          Add to Collection
        </button>
      </form>
    </div>
  );
}
