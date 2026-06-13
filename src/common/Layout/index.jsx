import BannerNav from "@/common/BannerNav";
import Footer from "@/common/Footer";
import styles from "./styles.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <BannerNav />
      {children}
      <Footer />
    </div>
  );
}
