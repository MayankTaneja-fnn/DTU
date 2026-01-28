
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';


import './index.css';
import Layout from "./Layout.jsx";
import Home from './Components/Home.jsx';

import StudentRegister from './Components/Student/StudentRegister.jsx';
import Add_log from './Components/Student/Add_log.jsx';
import StudentLogin from './Components/Student/StudentLogin.jsx';

import Student_Display from './Components/Faculty/Student_display.jsx';
import Attendance from './Components/Faculty/Attendance.jsx';
import Logs from './Components/Student/Logs.jsx';
import FacultyLogin from './Components/Faculty/FacultyLogin.jsx';
import StudentLogs from './Components/Faculty/StudentLogs.jsx';
import Student_Display_log from './Components/Student/Student_Display_log.jsx';
import Faculty_Display_log from './Components/Faculty/Faculty_Display_log.jsx';

import About from './Components/Info/About.jsx';
import Administration from './Components/Info/Administration.jsx';
import Admissions from './Components/Info/Admissions.jsx';
import Alumni from './Components/Info/Alumni.jsx';
import Media from './Components/Info/Media.jsx';
import People from './Components/Info/People.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='admin' element={<Administration />}></Route>
      <Route path='admission' element={<Admissions />}></Route>
      <Route path='alumni' element={<Alumni />}></Route>
      <Route path='media' element={<Media />}></Route>
      <Route path='people' element={<People />}></Route>

      <Route path='student'>
        <Route path='register' element={<StudentRegister />}></Route>
        <Route path='login' element={<StudentLogin />}></Route>
        <Route path='logs' element={<Logs />}></Route>
        <Route path='add_log' element={<Add_log />}></Route>
        <Route path='display_log' element={<Student_Display_log />}></Route>
      </Route>
      <Route path='faculty'>
        <Route path='login' element={<FacultyLogin />}></Route>
        <Route path='student_display' element={<Student_Display />}></Route>
        <Route path='student_logs' element={<StudentLogs />}></Route>
        <Route path='student_attendance' element={<Attendance />}></Route>
        <Route path='display_log' element={<Faculty_Display_log />}></Route>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
