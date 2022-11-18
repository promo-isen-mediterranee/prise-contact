import styles from "../../../styles/Layout.module.css";

export default function H1({ Text }) {
    return (
        <h1 className={styles.h1}>{Text}</h1>
    )
}
