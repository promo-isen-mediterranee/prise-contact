import styles from "../styles/Layout.module.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
    return (<>
            <div className={styles.containerMain}>
                <main className={styles.main}>
                    <div className={styles.leftside}>
                        <Header />
                        <div>
                            {children}
                            <br /><br/>
                            <Footer />
                        </div>
                    </div>
                    <div className={styles.rightside}>
                    </div>
                </main>
            </div>
        </>);
}
