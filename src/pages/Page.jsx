import React from "react";
import Filters from "./Filters";
import Content from "./Content";

const Page = () => (
  <>
    <Filters other={"other prop value"} />
    <Content />
  </>
);

export default Page;
