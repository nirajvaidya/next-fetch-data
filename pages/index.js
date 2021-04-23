import React from "react";
import Link from "next/link";
import { Head } from "next/head";

export default function Home({ posts }) {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/Image">
              <a>Image test</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/Head">
              <a>Head</a>
            </Link>
          </li>
        </ul>
      </div>
      <ul>
        {posts.map((post) => {
          return (
            <>
              <div>
                <li key={post.id}>
                  <h3>
                    <Link href={"/posts/" + post.id}>
                      <a>{post.id}</a>
                    </Link>
                  </h3>
                  <p>{post.url}</p>
                </li>
              </div>
              <div></div>
            </>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

// export async function getServerSideProps() {
//   const res = await fetch("https://api.github.com/users");
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }
