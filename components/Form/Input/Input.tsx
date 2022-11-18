import styles from "../../../styles/Layout.module.css";

export default function Input({ Type, Name, Label, Placeholder, Required = false }) {
    return (
        <>
            <div className={styles.inputWrap}>
                <label htmlFor={Name} className={styles.inputLabel}>{Label}</label>
                <span className={styles.inputGroup}>
                    <input type={Type} placeholder={Placeholder ? Placeholder : ""} name={Name} className={styles.input} id={Name} required={Required} />
                </span>
            </div>
        </>
    );
}
