import React from "react";
import "./sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SchoolIcon from '@mui/icons-material/School';
import Closefriends from "../CloseFriends/Closefriends";
import {Users} from '../../DummyData'


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ui className="sidebarList">
          <li class="sidebarlistitem">
          <RssFeedIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Feed
          </span>
          </li>
          <li class="sidebarlistitem">
          <ChatIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Chat
          </span>
          </li>
          <li class="sidebarlistitem">
          <PlayCircleIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Videos
          </span>
          </li>
          <li class="sidebarlistitem">
          <GroupsIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Groups
          </span>
          </li>
          <li class="sidebarlistitem">
          <BookmarksIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Bookmarks
          </span>
          </li>
          <li class="sidebarlistitem">
          <QuestionMarkIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Questions
          </span>
          </li>
          <li class="sidebarlistitem">
          <FileOpenIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Jobs
          </span>
          </li>
          <li class="sidebarlistitem">
          <CalendarMonthIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Events
          </span>
          </li>
          <li class="sidebarlistitem">
          <SchoolIcon className="sidebarlisticon"/>
          <span className="sidebarlistitemtext">
            Courses
          </span>
          </li>
        </ui>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarhr"/>
        <ul className="sidebarfriendlist">
          {Users.map((u)=>(
            <Closefriends key={u.id} user={u}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
