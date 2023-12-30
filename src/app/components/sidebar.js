"use client";
import React from "react";
import styles from "../components/styles/sidebar.module.css";
import { FaStar, FaUser, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Sidebar() {
  const url = "https://anoop-mytube.onrender.com/api/v1/users/current-user";
  const [data, setData] = useState([]);

  const fetchInfo = async () => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <div>
      <div className={styles.sidebar_outerdiv}>
        <p>{data}</p>
        <FaUserCircle className={styles.profile_logo} />
      </div>
    </div>
  );
}
