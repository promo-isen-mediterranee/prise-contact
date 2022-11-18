import styles from "../../styles/Layout.module.css"
import logo from "../../public/images/logo.png"
import Image from "next/image";

export default function Header() {
    return (
        <header className={styles.header}>
            <a href={'/'}><Image src={logo} alt={"Logo ISEN"} className={styles.headerImg}/></a>
        </header>
    );
}
