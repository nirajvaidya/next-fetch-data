import { useState } from "react";
// import Header from "../components/Header";
import dynamic from "next/dynamic";

const DynamicComponent1 = dynamic(() => import("../component/Hello1"));

const DynamicComponent2WithCustomLoading = dynamic(
  () => import("../component/Hello2"),
  { loading: () => <p>Loading caused by client page transition ...</p> }
);

const IndexPage = () => {
  return (
    <div>
      <DynamicComponent1 />
      <DynamicComponent2WithCustomLoading />
    </div>
  );
};

export default IndexPage;
