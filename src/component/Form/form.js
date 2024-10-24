import Input from "../Input/input";
import Box from "../Box/box";
import style from "./form.module.css"
import Header from "../Header/header";
import StorageData from "../StorageData/storageData";
import Button from "../Button/button";

function form() {
  return (
    <>
    <Header headerTitle="Admin Login"/>
  
    <div className={style.container}>
     <Input />
     <StorageData />
     <Box />
     </div>
    </>
  );
}

export default form;
