import styles from "./styles/Tombol.module.css";

const Tombol = (props) => {

    const handleButtonClick = () => {
        if(props.ket === "redirect"){
            props.onRedirect((ps) => !ps);
        }else{
            props.onChangeTitle(props.children)
        }
    }

    return (
        <button className={styles.button} onClick={handleButtonClick}>{props.children}</button>
    )
}

export default Tombol;