import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Buttons from "./Buttons";
import { MyContext } from "./MyContext";
import supabase from "./Supabase";
import { useForm } from "react-hook-form";

function ReservationForm() {
  const packages = useContext(MyContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [details, setDetails] = useState();

  useEffect(() => {
    async function fetchData() {
      const { error, data } = await supabase.from("details").select("*");

      if (error) {
        console.log("Failed to connect database");
        return;
      }

      if (data) {
        setDetails(data);
      }
    }

    fetchData();
  }, []);

  async function onSubmit(data1) {
    // const keys = Object.keys(data);
    // const values = Object.values(data);

    console.log(data1);
    // const { data, error } = await supabase.from("details").insert(data1);
    // if (error) {
    //   console.log("Failed Adding Data");
    //   return;
    // }
    // if (data) {
    //   console.log(data);
    // }
  }

  return (
    <div className="reservationForm">
      <div className="homeButton">
        <Link to="/">Home</Link>
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        ></input>
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        ></input>
        <input
          type="text"
          placeholder="Middle Initial"
          {...register("middleInitial")}
        ></input>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="FB Name"></input>
        <input type="text" placeholder="Celebrant's Name"></input>
      </div>
      <div className="inputContainer date">
        <input type="date"></input>
      </div>
      <div className="inputContainer time">
        <input type="time"></input>
      </div>

      <div className="inputContainer">
        <input type="text" placeholder="Party Venue"></input>
        <input type="text" placeholder="Barangay"></input>
        <input type="text" placeholder="City"></input>
        <input type="text" placeholder="Floor Type"></input>
        <input type="text" placeholder="Nearest Landmark"></input>
      </div>
      <div className="inputContainer">
        <input type="text" placeholder="Contact Number"></input>
      </div>
      <div className="selectContainer">
        <select placeholder="Choose..">
          {packages.map((item) => (
            <option>{item.packageName}</option>
          ))}
        </select>
      </div>
      <div className="submitForm" onClick={handleSubmit(onSubmit)}>
        <Buttons>SUBMIT</Buttons>
      </div>
    </div>
  );
}

export default ReservationForm;
