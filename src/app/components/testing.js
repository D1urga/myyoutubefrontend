"use client";

import React, { useEffect, useState } from "react";
import styles from "../landingPage/flutter.module.css";

export default function Testing() {
  const [formData, setFormData] = useState({
    comment: "",
  });
  const handleSubmit = (id) => async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://anoop-mytube.onrender.com/api/v1/comments/postComment/${id}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    //- alert("worked");
  };

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const [data, setData] = useState([]);
  const fetchInfo = async () => {
    const res = await fetch(
      "https://anoop-mytube.onrender.com/api/v1/posts/getposts/6589e2f887ac89a260a3ded5"
    );
    const d = await res.json();
    return setData(d.data[0].userPosts);
  };

  useEffect(() => {
    fetchInfo();
  }, [data]);
  return (
    <div className={styles.outer_div}>
      {data.map((post) => (
        <div className={styles.img_div}>
          <img src={post.postFile} className={styles.img} alt="image" />

          <div className={styles.comments_div}>
            {post.userComments.map((commentdata) => (
              <p>{commentdata.comment}</p>
            ))}
          </div>
          <form onSubmit={handleSubmit(post._id)} className={styles.form}>
            <input
              type="text"
              name="comment"
              id="comment"
              placeholder="Post your comments here .."
              // value={formData.comment}
              onChange={handleInputChange}
              className={styles.input}
            />
            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      ))}
      {/* <h>{data && data.data[0].username}</h> */}
    </div>
  );
}
