"use client";

import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [user, setUser] = useState();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://anoop-mytube.onrender.com/api/v1/users/login",
      {
        method: "POST",
        mode: "cors",
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();

    alert(data.data.accessToken);

    localStorage.setItem("user", response.data);
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      // const foundUser = JSON.stringify(loggedInUser);
      // setUser(foundUser);
      // router.push("/landingPage");
    }
  }, []);

  return (
    <main className={styles.main}>
      <p>SignIn Form</p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
