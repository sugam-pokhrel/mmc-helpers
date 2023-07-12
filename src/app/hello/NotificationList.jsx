"use client";
import React, { useEffect } from "react";

const NotificationList = ({ onClose }) => {
  const notifications = [
    { id: 1, message: "Notification 1: A very long notification message that needs to be truncated to prevent overflow" },
    { id: 2, message: "Notification 2: Another long notification message that should be truncated" },
    { id: 3, message: "Notification 3: This is a third long notification that needs truncation" },
       
];

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.keyCode === 27) {
        // Escape key
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscKey);

    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 right-0 mt-3 z-[1] card card-compact dropdown-content w-80 sm:w-96 bg-base-100 shadow">
      <div className="card-body">
        <span className="font-bold text-lg">Notifications</span>
        <div className="notification-list">
          {notifications.map((notification) => (
            <div className="notification-item truncate" key={notification.id}>
              {notification.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationList;
