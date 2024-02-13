"use client";
import React, { useState } from "react";
import { CommonProblem } from "./MixedObjectData";
import "./Book_appointment.css";
// import { useDispatch } from "react-redux";
// import { AddPatients, CreateBooking } from "../../../../../Redux/Datas/action";
// import Sidebar from "../../GlobalFiles/Sidebar";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const notify = (text) => toast(text);
import Topbar from "../Dashboard/dashboard/Topbar";
import Check_Payment from "../Dashboard/dashboard/Check_Payment";
const Book_Appointment = () => {
  // const dispatch = useDispatch();
  const [Loading, setLoading] = useState(false);

  const InitValue = {
    patientName: "",
    age: "",
    gender: "",
    mobile: "",
    disease: "",
    address: "",
    email: "",
    department: "",
    date: "",
    time: "",
  };

  const [BookAppoint, setBookAppoint] = useState(InitValue);

  const HandleAppointment = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setBookAppoint({ ...BookAppoint, [e.target.name]: e.target.value });
  };

  const HandleOnsubmitAppointment = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (BookAppoint.gender === "" || BookAppoint.department === "") {
      return "Please fill all the Details";
    }
    setLoading(true);
  };

  return (
    <>
      <Topbar /> <Check_Payment />
    </>
  );
};

export default Book_Appointment;
