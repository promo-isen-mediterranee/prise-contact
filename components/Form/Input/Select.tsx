import styles from "../../../styles/Layout.module.css"

export default function Select({Name,Label, Title, children}) {
    return (
        <>
            <div className={styles.inputWrap}>
                {Label}
                <div className={styles.inputGroup}>
                    <select className={[styles.select, styles.input].join(' ')} name={Name} title={Title}>
                        {children}
                    </select>
                </div>
            </div>
        </>
    )
}
