"use client";
import Form from "@/component/Form/form";
import { useState } from "react";
import Header from "../component/Header/header";
function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Form />
    </>
  );
}
export default Home;
