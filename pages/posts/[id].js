import React from "react";
import { useRouter } from "next/router";

export default function Post({ postData }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading Page Data...</div>;
  }
  return (
    <div>
      {/* <img src={"/images/posts/" + postData.id + ".jpeg"} />
      <h2>{postData.title}</h2>
      <p>{postData.body}</p> */}
      <h1> Hello I am from [id]</h1>
    </div>
  );
}

// Post.getInitialProps = async ({ query }) => {
//   const { id } = query;

//   return { id };
// };

// 1.
export async function getStaticPaths() {
  const paths = [
    { params: { id: "1" } },
    { params: { id: "2" } },
    { params: { id: "5" } },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ query, params }) {
  const { id } = query || params;
  console.log({ id });

  const res = await fetch("https://api.github.com/users" + id);
  const postData = await res.json();

  return {
    props: {
      postData,
    },
  };
}

/*
export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const postData = await res.json();
  return {
    props: {
      postData,
    },
  };
}
*/
