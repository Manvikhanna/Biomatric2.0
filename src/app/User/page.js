import style from "./user.module.css";
import Header from "../../component/Header/header";
import { MdOutlineEmail } from "react-icons/md";

const user = () => {
  return (
    <>
      <Header headerTitle="User Login" />
      <div className={style.user}>
        <form className={style.form}>
          {/* <div style={
            {background:"white",
             height:"20px" , 
             width:"30px",
             padding:"3px",
             border:"1px solid black",
             display:"flex",
             justifyContent:"center",
             alignItems:"center",
             color:"black",
             
             }}>
            
            </div> */}

          <input
            className={style.input}
            // onChange={}
            type="email"
            placeholder="Enter Your Email"
            // value={}
            required
          />

          <button type="submit" className={style.button}>
            Log In
          </button>
        </form>
      </div>
    </>
  );
};

export default user;

// git add .
// git commit -m "updated"
//git push
