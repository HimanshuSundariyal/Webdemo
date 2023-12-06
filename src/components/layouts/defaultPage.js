import React, { useEffect } from "react";
import Header from "../stories/header";
import Footer from "../stories/footer";
import { useNavigate } from "react-router-dom";

const DefaultPage = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("Login")) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <Header />
      {props.children}
      <div class="clear"></div>
      <Footer />
    </>
  );
};

export default DefaultPage;
