import React from 'react'
import 'devextreme/dist/css/dx.light.css';
import { useState,useCallback ,useEffect} from 'react';
import axios from "axios";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useLocation } from 'react-router-dom';


function Attendance() {

  const location=useLocation();

  const [highlightDates,setHighlightDates]=useState([]);
  const [error,setError]=useState("");
  const email=location.state.key;

  useEffect(() => {
    const fetchAttendance = async () => {
        try {
            const response = await axios.post("http://localhost:3000/faculty/get_attendance",{
                email:email
            }, {
                withCredentials: true // Include cookies with the request
            });
            setHighlightDates(response.data.data);
            console.log(highlightDates);
            // console.log(logs);
        } catch (err) {
            setError(err.response?.data || "An error occurred while fetching attendance");
            console.error(err);
        }
    };

    fetchAttendance();
}, []);

useEffect(() => {
  console.log("Updated logs:", highlightDates);
}, [highlightDates]);


  const [date, changeDate] = useState(new Date());

   function changeValue(val) {
      changeDate(val);
   }


  // Function to check if the date should be highlighted
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  
  // Function to check if the date should be highlighted
  const isHighlighted = (date) => {
    const dateString = formatDate(date); // Use local date format
    return highlightDates.includes(dateString);
  };

   return (
      <div className='p-44 w-screen'>
         <Calendar onChange = {changeValue} value = {date} tileClassName={({ date }) => 
          isHighlighted(date) ? 'highlight' : null
        }/>

         <p>The selected date is - {date.toLocaleDateString()}</p>
      </div>
   );

}

export default Attendance