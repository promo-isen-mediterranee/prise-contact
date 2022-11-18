import styles from "../../styles/Layout.module.css";

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p>L&rsquo; ISEN est accréditée par</p>
            <img src='https://isen-mediterranee.fr/wp-content/uploads/2022/08/logo-CTI-footer-3.png' alt='Logo CTI'/>
        </footer>
    );
}
