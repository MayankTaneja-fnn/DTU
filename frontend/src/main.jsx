
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { Provider } from 'react-redux';


import './index.css';
import Layout from "./Layout.jsx";
import Home from './Components/Home.jsx';

import StudentRegister from './Components/Student/StudentRegister.jsx';
import Add_log from './Components/Student/Add_log.jsx';
import Display_log from './Components/Logs/Display_log.jsx';
import StudentLogin from './Components/Student/StudentLogin.jsx';

import Student_Display from './Components/Faculty/Student_display.jsx';
import Attendance from './Components/Faculty/Attendance.jsx';
import Logs from './Components/Student/Logs.jsx';
import FacultyLogin from './Components/Faculty/FacultyLogin.jsx';
import StudentLogs from './Components/Faculty/StudentLogs.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='student'>
        <Route path='register' element={<StudentRegister/>}></Route>
        <Route path='login' element={<StudentLogin/>}></Route>
        <Route path='logs' element={<Logs/>}></Route>
        <Route path='add_log' element={<Add_log/>}></Route>
        
      </Route>
      <Route path='/display_log' element={<Display_log/>}></Route>
      <Route path='faculty'>
        <Route path='login' element={<FacultyLogin/>}></Route>
        <Route path='student_display' element={<Student_Display/>}></Route>
        <Route path='student_logs' element={<StudentLogs/>}></Route>
        <Route path='student_attendance' element={<Attendance/>}></Route>
      </Route>
        {/* <Route path='/attendance' element={<Attendance/>}></Route> */}
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
      <RouterProvider router={router}/>
)
