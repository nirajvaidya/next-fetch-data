import { useRouter } from "next/router";

export default function persion({ ownerList }) {
  const router = useRouter();
  console.log(router.query);
  // return <pre>{JSON.stringify(ownerList, null, 4)}</pre>;
  return <h1> This is from [vehicle]/[bike]/[persion]</h1>;
}

persion.getInitialProps = async (ctx) => {
  const { query } = ctx;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts=" +
      query.persion +
      "&vehicle=" +
      query.vehicle
  );
  const ownerList = await response.json();
  return { ownerList: ownerList };
};
