import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const getGender = (g) => {
  return g === "0" ? "Male" : "Female";
};

export const convertDateToISO = (date) => {
  const dateObj = new Date(date);
  const isoDateStr = dateObj.toISOString();
  return isoDateStr;
};

export const getBirthdayDateFormat = (date) => {
  const dateObj = new Date(date);
  const options = { day: "2-digit", month: "short", year: "numeric" };
  const formattedDate = dateObj.toLocaleDateString("id-ID", options);
  return formattedDate;
};

export const getFormattedInputDateString = (utcDateStr) => {
  const dateObj = new Date(utcDateStr);

  const options = {
    timeZone: "Asia/Jakarta",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = dateObj.toLocaleString("id-ID", options);

  const formattedDateParts = formattedDate.split(" ");
  const formattedDateString = `${formattedDateParts[0]} ${formattedDateParts[1]} ${formattedDateParts[2]} ${formattedDateParts[3]}`;

  return formattedDateString;
};

export const notify = (message, type) => {
  toast(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    type: type,
  });
};
