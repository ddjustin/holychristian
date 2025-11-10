import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerFront}>
        <div className={styles.logo}>HolyClub</div>
        <div className={styles.headerItem}>소개</div>
        <div className={styles.headerItem}>말씀</div>
        <div className={styles.headerItem}>연인</div>
      </div>
      <nav className={styles.nav}>
        <Link className={styles.navItem} href="/login">
          로그인
        </Link>
        <Link className={styles.navItem} href="/signup">
          회원가입
        </Link>
      </nav>
    </header>
  );
}
