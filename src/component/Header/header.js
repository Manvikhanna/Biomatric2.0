import style from "./header.module.css";

function Header({ title = "", headerTitle }) {
  return (
    <div className={style["header"]}>
      {title === "user" ? <h1>User Login</h1> : <h1>{headerTitle}</h1>}
    </div>
  );
}
export default Header;
