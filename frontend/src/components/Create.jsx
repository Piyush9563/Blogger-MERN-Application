// import React, { useState } from "react";
// import { useNavigate, useParams  } from "react-router-dom";

// const Create = () => {
//   const [userid, setUserid] = useState("");
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const [error, setError] = useState("");
//   const { id } = useParams();
//   console.log(id);
//   const navigate=useNavigate();

//   console.log(userid,name,email);

//   const handleSubmit = async(e)=>{
//     e.preventDefault();

//     const addUser={userid,name,email};

//     const response=await fetch("http://localhost:5000",{
//       method:"POST",
//       body:JSON.stringify(addUser),
//       headers:{
//         "Content-Type":"application/json",
//       },
//   });

//     const result=await response.json();


//     if(!response.ok){
//       console.log(result.error);
//       setError(result.error);
//     }

//     if(response.ok){
//       console.log(result);
//       setUserid("");
//       setName("");
//       setEmail("");
//       navigate("/all")
//     }
//   };

//   return (
//         <div className="container my-2">
//           <h1 className="h1 text-center">Fill the data</h1>
    
//           {error && <div className="alert alert-danger"> {error} </div>}

//           <form className="form" onSubmit={handleSubmit}>

//             <div className="mb-3">
//               <label className="form-label">UserId</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={userid}
//                 onChange={(e) => setUserid(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
            
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       );
//     };
    
//     export default Create;
    

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Create = () => {
  const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  console.log(id);

  console.log(userid, name, email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addUser = { userid, name, email };

    const response = await fetch("http://localhost:5000", {
      method: "POST",
      body: JSON.stringify(addUser),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (!response.ok) {
      console.log(result.error);
      setError(result.error);
    }

    if (response.ok) {
      console.log(result);
      setUserid("");
      setName("");
      setEmail("");
      navigate("/all");
    }
  };

  return (
    <div className="container my-2">
      <h1 className="h1 text-center">Fill the data</h1>

      {error && <div className="alert alert-danger"> {error} </div>}

      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">UserId</label>
          <input
            type="text"
            className="form-control"
            value={userid}
            onChange={(e) => setUserid(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
