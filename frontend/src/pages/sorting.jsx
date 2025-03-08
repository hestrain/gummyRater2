// // import { getGummys } from "../api";
// import { useState, useEffect } from "react";
// // import { GummyCard } from "../components/GummyCard";
// ////TESTING TO TRY AND MAKE A BUTTON THAT CAN CHANGE STUFF


// // function sortByDate(data) {
// //   data = data.sort(
// //     (d1, d2) =>
// //       new Date(d2.dateCreated).getTime() - new Date(d1.dateCreated).getTime()
// //   );
// // return(data)
// // }

// // function sortByRating(data) {
// //   console.log(data);

// //   data  = data.sort(([, a], [, b]) => b.rating - a.rating);
// // return(data)
// // }




// export function Home() {
//   // const [gummys, setGummys] = useState([]);
//   // let sortMethod = "date"
//   const [sortMethod, setSortMethod] = useState("date")
//   console.log(sortMethod);

//   useEffect(() => {
//     console.log("re-rendering");

//     const 
    
//   })
  
//   const digits = [1,2,3,20,300,1000,10]

// const changeSort = async (sortMethod) => {
//       if(sortMethod === "date"){
//         sortMethod ="rating";
//         console.log(sortMethod);
        
//         digits.sort(function(a,b){return b-a})
//       }else if(sortMethod === "rating"){
//         sortMethod="date"
//         console.log(sortMethod);

//         digits.sort(function(a, b){return a-b});
//       }
//     }



//   return (
//     <>
//       <h1>TEST</h1>

//       <button onClick={() => changeSort(sortMethod)}>Change Sorting Method</button> 
//       <h2>Currently Sorting by: {sortMethod}</h2>
//     </>
//   );
// }
