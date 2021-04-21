import React from "react";
import { useRouter } from "next/router";

export default function Post({ postData }) {
  const router = useRouter();

  return (
    <div>
      {/* <img src={"/images/posts/" + postData.id + ".jpeg"} />
      <h2>{postData.title}</h2>
      <p>{postData.body}</p> */}
      <h1> Hello I am from niraj</h1>
    </div>
  );
}
