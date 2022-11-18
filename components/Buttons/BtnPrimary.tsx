import styles from "../../styles/Layout.module.css";

export default function BtnPrimary({ Text, Type, OnClick = undefined }) {
    return (
        <button type={Type} className={styles.btnPrimary} onClick={OnClick}>{Text}</button>
    );
}
