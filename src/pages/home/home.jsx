import React from "react";
import TopNavBar from "../../component/topnavbar/topnavbar";
import Sidebar from "../../component/sidebar/sidebar";
import Feeds from "../../component/feeds/feeds";
import Rightbar from "../../component/rightbar/rightbar";
import './home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const birthday = () => {
  toast("🎊🎂 Kunal Chauhan is on 1 June");
};

const Home = () => {
  return (
    <>
      <TopNavBar />
      {birthday()}
      <div className="homeContainer">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </div>
      <ToastContainer/>
    </>
  );
};
export default Home;
