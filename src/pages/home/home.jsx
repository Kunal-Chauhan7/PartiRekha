import React from "react";
import TopNavBar from "../../component/topnavbar/topnavbar";
import Sidebar from "../../component/sidebar/sidebar";
import Feeds from "../../component/feeds/feeds";
import Rightbar from "../../component/rightbar/rightbar";
import './home.css'


const Home = () => {
  return (
    <>
      <TopNavBar />
      <div className="homeContainer">
        <Sidebar/>
        <Feeds/>
        <Rightbar/>
      </div>
    </>
  );
};
export default Home;
