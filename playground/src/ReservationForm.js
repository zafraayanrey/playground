import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Buttons from "./Buttons";
import { MyContext } from "./MyContext";
import supabase from "./Supabase";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

function ReservationForm() {
  const navigate = useNavigate();
  const packages = useContext(MyContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    async function fetchData() {
      const { error, data } = await supabase.from("details").select("*");

      if (error) {
        toast.error();
        return;
      }

      if (data) {
        console.log("Data is fetched successfully!");
      }
    }

    fetchData();
  }, []);

  async function onSubmit(data, e) {
    const { error } = await supabase.from("details").insert(data);

    if (error) {
      toast.error("Something wen't wrong!");
      return;
    }

    // toast.success(
    //   "Thank you for booking with us. Please keep your line open on the of the vent so we can easily contact you."
    // );

    // reset();
    navigate("/thankyou");
  }

  return (
    <>
      <Toaster />
      <form className="reservationForm">
        <Link to="/">
          <div className="homeButton">Go Back</div>
        </Link>
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
          {errors.venue && <span className="error">Venue is required</span>}
          <input
            type="text"
            placeholder="Barangay"
            {...register("barangay", { required: true })}
          ></input>
          {errors.barangay && (
            <span className="error">Barangay is required</span>
          )}
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
        <NavLink to="/thankyou">
          <div className="submitForm" onClick={handleSubmit(onSubmit)}>
            <Buttons>SUBMIT</Buttons>
          </div>
        </NavLink>
      </form>
    </>
  );
}

export default ReservationForm;
