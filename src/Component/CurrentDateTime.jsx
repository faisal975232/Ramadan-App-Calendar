import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval when the component unmounts to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []);

  // Helper function to format the time
  const formatTime = (time) => time.toString().padStart(2, "0");

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentDateTime.getDay()];
  const year = currentDateTime.getFullYear();
  const month = formatTime(currentDateTime.getMonth() + 1);
  const date = formatTime(currentDateTime.getDate());
  const hours = formatTime(currentDateTime.getHours());
  const ampm = hours >= 12 ? "PM" : "AM";
  const minutes = formatTime(currentDateTime.getMinutes());
  const seconds = formatTime(currentDateTime.getSeconds());

  return (
    <div>
      <Badge variant="" className="text-center">
        {" "}
        {`${dayOfWeek}, ${month}-${date}-${year} ${hours}:${minutes}:${seconds} ${ampm}`}
      </Badge>
    </div>
  );
}

export default CurrentDateTime;
