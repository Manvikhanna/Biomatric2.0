"use client";

import style from "./input.module.css";
import Button from "../Button/button";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";
import { useState } from "react";
import { Router, useRouter } from "next/navigation";

function input() {

  const router= useRouter()
  
// const router = useRouter()
// const handleClick=()=>{
//   router.push('/User');
// }
  // const [click, setClick] = useState('true');
  
  //   function handleClick(){
  //          alert('I am clicked')
  //   }

  //   function handleSubmit(e){
  //      e.preventDefault();
  //   }
  

const handleUser = () =>{
  router.push('/User')
}

function handleLogin(){
  router.push("/")

}





  return (
    <div className={style["input"]}>
      <div>
     <Button text="User" handleClick={handleUser} flag={true} /> 
      </div>

      <div className={style["section"]}>
        <div className={style["icon"]}><FaUserTie/></div>
        <form className={style["forms"]}    
        >
          <div>
            <input 
              className={style["inputs"]}
              type="email"
              placeholder="Email"
              id="email"
              // value={email}
              required

            />
          </div>
          <Button text="Login" flag={false} handleClick={handleLogin} />

          <div
            style={{ marginLeft: "270px", marginTop: "20px", fontSize: "17px" }}
          >
            <Link href="/" className={style["link"]}>
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default input;
