import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [userid, setUserid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");

  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  //receving single user data
  const getSingleData = async () => {
    const response = await fetch(`http://localhost:5000/${id}`);
    const result = await response.json();

    if (response.ok) {
      setUserid(result.userid);
      setName(result.name);
      setEmail(result.email);
     
    }
  };

  //passing edited data to backend
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedUser={userid,name,email};

    const response=await fetch(`http://localhost:5000/${id}`,{
      method:"PATCH",
      body:JSON.stringify(updatedUser),
      headers:{
        "Content-Type":"application/json",
      },
  });

    const result=await response.json();


    if(!response.ok){
      console.log(result.error);
      setError(result.error);
    }

    if(response.ok){
      setError("");
      navigate("/all")
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return (
    <div className="container my-2">
      <h1 className="h1 text-center">Edit Data</h1>
      {error && <div className="alert alert-danger"> {error} </div>}
      <form className="form" onSubmit={handleUpdate}>
      <div className="mb-3">
          <label className="form-label">Age</label>
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
        
        <button type="submit" className="btn btn-info">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;