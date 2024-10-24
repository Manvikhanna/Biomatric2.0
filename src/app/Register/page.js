"use client";
import Header from "@/component/Header/header";
import style from "./register.module.css";
import Button from "@/component/Button/button";
import { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [ComapnyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [contact, setContact] = useState("");
  const [website, setWebsite] = useState("");
 
  function handleClick(pre){
   
  }

  return (
    <>
      <Header headerTitle="Registration Form" />
      <div className={style.headContainer}>
        <div className={style.forms}>
          <form className={style.inner} onSubmit={handleClick}>
            <div className={style.text}>
              <input
                className={style.placed}
                  onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Your Name"
                value={name}
                required
              />
            </div>
            <div className={style.text}>
              <input
                className={style.placed}
                onChange={(e) => setSurname(e.target.value)}
                type="text"
                placeholder="Enter Your Surname"
                value={surname}
                required
              />
            </div>
            <div className={style.text}>
              <input
                className={style.placed}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter Your Email"
                value={email}
                required
              />
            </div>
            <div className={style.text}>
              <input
                className={style.placed}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="Company Name"
                value={ComapnyName}
                required
              />
            </div>
            <div className={style.text}>
              <input
                className={style.placed}
                onChange={(e) => setCompanyEmail(e.target.value)}
                type="email"
                placeholder="Comapny Email"
                value={companyEmail}
                required
              />
            </div>
            <div className={style.text}>
              <input
                className={style.placed}
                onChange={(e) => setContact(e.target.value)}
                type="number"
                placeholder="Enter Your Conatct Number"
                value={contact}
                required
              />
            </div>
            <div className={style.text}>
              <input
                className={style.placed}
                onChange={(e) => setWebsite(e.target.value)}
                type="text"
                placeholder="Company Website"
                value={website}
                required
              />
            </div>
          </form>
          <div className={style.innerForms}>
            <div className={style.circle}> </div>
          </div>
          <div className={style.btn}>
            <Button text="Proceed" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
