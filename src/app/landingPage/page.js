"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function Flutter() {
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
      "https://anoop-mytube.onrender.com/api/v1/users/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          withCredentials: true,
        },
        body: JSON.stringify(formData),
      }
    );
    // const data = await response.json();
    // localStorage.setItem("user", response.data);
  };
  return (
    <div>
      <h1
        onClick={() => {
          localStorage.removeItem("user");
          alert("worked");
        }}
      >
        flutter page
      </h1>

      <form onSubmit={handleSubmit}>
        <button type="submit">signout</button>
      </form>
    </div>
  );
}
