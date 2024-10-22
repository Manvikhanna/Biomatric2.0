import Input from "../Input/input";
import Box from "../Box/box";
import style from "./form.module.css"
import Header from "../Header/header";

function form() {
  return (
    <>
    <Header />
    <div className={style['container']}>
     <Input />
     <Box />
     </div>
    </>
  );
}

export default form;
