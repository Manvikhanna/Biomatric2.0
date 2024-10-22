import style from "./button.module.css";
function Button({ text, flag, handleClick=()=>{}}) {
  return (
    <>
      <div>
        <button onClick={handleClick} className={`${flag ? style.sBtn : style.btn}`}>{text}</button>
      </div>
    </>
  );
}

export default Button;

// git remote add origin https://github.com/Manvikhanna/Biometric-App.git
// git branch -M main
// git push -u origin main

