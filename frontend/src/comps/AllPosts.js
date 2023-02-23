// src/comps/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import "./style/AllPost.css";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div dir="rtl">
      <h2>המדריך השלם ליהלומים</h2>
      <h3 style={{ fontWeight: 500, marginBottom: "50px" }}>כאן תוכלו למצוא מידע ומאמרים על היהלומים שאנו מוכרים</h3>
      <div className="all-blogs">
        <div className="each-blog">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link
                to={"/blog/" + (post.slug?.current ?? "")}
                key={post.slug?.current ?? ""}
                style={{ textDecoration: "none" }}
              >
                <span className="text-wrapper" key={index}>
                  <img src={post.mainImage.asset.url} alt="" />
                  <span>
                    <h2>{post.title}</h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div >
  );
}