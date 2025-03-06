import { useEffect, useState } from "react";
import { createGummy } from "../api";
import { Alert } from "bootstrap";

export function NewRating() {
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
    alert(`Logged "${userFormData.title}", go to Home Page to see it`);

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

  return (
    <div className="containerForm">
      <form className="formBox">
        <h1 className="CQfont">Log New Gummy</h1>
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
        <div className="formRatings">
          <div className="labelStack">
            <input
              type="number"
              name="rating"
              value={userFormData.rating}
              onChange={handleInputChange}
              className="inputField"
              required
            />
                   <label htmlFor="rating" className="label-bottom">Rating /10</label>
          </div>
          <div className="labelStack">
            <input
              type="text"
              name="horn"
              value={userFormData.horn}
              onChange={handleInputChange}
              className="inputField"
              required
            />
                   <label htmlFor="horn" className="label-bottom">Horndog Grade</label>
          </div>
          <div className="labelStack">
            <input
              type="number"
              name="munchie"
              value={userFormData.munchie}
              onChange={handleInputChange}
              className="inputField"
              required
            />
                   <label htmlFor="munchie" className="label-bottom">Munchie Level /10</label>
          </div>
        </div>
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
        <div className="amounts">
          <div className="labelStack">
            <input
              type="number"
              name="cbd"
              value={userFormData.cbd}
              onChange={handleInputChange}
              className="inputField inputNumber"
              required
            />
            <label htmlFor="dbc" className="label-bottom">
              CBD (mg)
            </label>
          </div>
          <div className="labelStack">
            <input
              type="number"
              name="thc"
              value={userFormData.thc}
              onChange={handleInputChange}
              className="inputField inputNumber"
              required
            />
            <label htmlFor="thc" className="label-bottom">
              THC (mg)
            </label>
          </div>
        </div>
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
