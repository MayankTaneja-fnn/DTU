
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

function Layout() {
  const location = useLocation();
  return (
    <>
    {location.pathname==="/student/logs"||location.pathname=="/faculty/student_logs"||location.pathname=="/student/add_log"||location.pathname=="/faculty/student_attendance"||
    location.pathname==="/student/add_log"||location.pathname=="/faculty/student_display"||location.pathname=="/student/display_log"||location.pathname=="/faculty/display_log"?null:<Header/>}
    <Outlet/>
    {location.pathname==="/"?<Footer/>:null}
    </>
  )
}

export default Layout