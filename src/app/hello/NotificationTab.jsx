"use client";
import React, { useState } from "react";
import NotificationList from "./NotificationList";

const NotificationTab = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const closeNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <div className="relative flex justify-start">
      <label tabIndex="0" className="btn btn-ghost btn-circle w-14 h-12 pl-2 pr-4" onClick={toggleNotifications}>
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11l-5-5-5 5M9 3v10a5 5 0 0 0 10 0V3m-2 12h-6"></path>
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </label>
      {showNotifications && <NotificationList onClose={closeNotifications} />}
    </div>
  );
};

export default NotificationTab;
