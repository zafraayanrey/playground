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

  useEffect(() => {
    async function fetchData() {
      const { error, data } = await supabase.from("details").select("*");

      if (error) {
        console.log("Failed to connect database");
        return;
      }

      if (data) {
        console.log(data);
      }
    }

    fetchData();
  }, []);

  async function onSubmit(data) {
    const { zaf, error } = await supabase.from("details").insert(data);
    if (error) {
      console.log("Failed Adding Data");
      return;
    }
    if (zaf) {
      console.log(zaf);
    }
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
          {...register("lastName", { required: true })}
        ></input>
        {errors.lastName && (
          <span className="error">Last name is required</span>
        )}
        <input
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true })}
        ></input>
        {errors.firstName && (
          <span className="error">First name is required</span>
        )}
        <input
          type="text"
          placeholder="Middle Name"
          {...register("middleName", { required: true })}
        ></input>
        {errors.middleName && (
          <span className="error">Middle name is required</span>
        )}
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="FB Name"
          {...register("fbName", { required: true })}
        ></input>
        {errors.fbName && <span className="error">FB Name is required</span>}
        <input
          type="text"
          placeholder="Celebrant's Name"
          {...register("celebrantsName", { required: true })}
        ></input>
        {errors.celebrantsName && (
          <span className="error">Celebrants Name is required</span>
        )}
      </div>
      <div className="inputContainer date">
        <input type="date" {...register("date", { required: true })}></input>
        {errors.date && <span className="error">Date is required</span>}
      </div>
      <div className="inputContainer time">
        <input type="time" {...register("time", { required: true })}></input>
        {errors.time && <span className="error">Time is required</span>}
      </div>

      <div className="inputContainer">
        <input
          type="text"
          placeholder="Party Venue"
          {...register("venue", { required: true })}
        ></input>
        {errors.venue && <span className="error">Venu is required</span>}
        <input
          type="text"
          placeholder="Barangay"
          {...register("barangay", { required: true })}
        ></input>
        {errors.barangay && <span className="error">Barangay is required</span>}
        <input
          type="text"
          placeholder="City"
          {...register("city", { required: true })}
        ></input>
        {errors.city && <span className="error">City is required</span>}
        <input
          type="text"
          placeholder="Floor Type"
          {...register("floorType", { required: true })}
        ></input>
        {errors.floorType && (
          <span className="error">Floor type is required</span>
        )}
        <input
          type="text"
          placeholder="Nearest Landmark"
          {...register("nearestLandmark", { required: true })}
        ></input>
        {errors.nearestLandmark && (
          <span className="error">Nearest Landmark is required</span>
        )}
      </div>
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Contact Number"
          {...register("contactNumber", { required: true })}
        ></input>
        {errors.contactNumber && (
          <span className="error">Contact Number is required</span>
        )}
      </div>
      <div className="selectContainer">
        <select
          placeholder="Choose.."
          {...register("package", { required: true })}
        >
          {packages.map((item, i) => (
            <option key={i}>{item.packageName}</option>
          ))}
        </select>
        {errors.package && <span className="error">Package is required</span>}
      </div>
      <div className="submitForm" onClick={handleSubmit(onSubmit)}>
        <Buttons>SUBMIT</Buttons>
      </div>
    </div>
  );
}

export default ReservationForm;
