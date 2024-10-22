"use client";

import style from "./input.module.css";
import Button from "../Button/button";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Input() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  useEffect(()=>{
    setTimeout(()=>{
        setMessage("")
    },1000) 
  },[message])

  const handlelog = (e) => {


    e.preventDefault();

    const registeredEmails =
      JSON.parse(localStorage.getItem("registeredEmails")) || [];

    if (registeredEmails.includes(email)) {
      setMessage("Email is regisetered....");

      router.push("/Login")

    } else {
        setMessage("Email is not registered");
      
    }
    setEmail("");
  };


  const handleUser = () => {
    router.push("/User");
  };

  // function handleLogin() {
  //   router.push("/Login");
  // }

  return (
    <div className={style["input"]}>
      <div>
        <Button text="User" handleClick={handleUser} flag={true} />
      </div>

      <div className={style["section"]}>
        <div className={style["icon"]}>
          <FaUserTie />
        </div>

        <form className={style["forms"]} onSubmit={handlelog}>
          <div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className={style["inputs"]}
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              required
            />
          </div>

          <Button text="Login" flag={false} />
          {message && <p>{message}</p>}

          <div
            style={{ marginLeft: "270px", marginTop: "20px", fontSize: "17px" }}
          >
            <Link href="/Register" className={style["link"]}>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;
