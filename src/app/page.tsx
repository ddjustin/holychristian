import styles from "./page.module.css";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      <Header />
      <section className={styles.heroSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/main/topBanner.png"
            alt="십자가가 있는 들판"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.coverWrapper}></div>

        <div className={styles.contents}>
          <div className={styles.message}>
            <p>
              <span className={styles.thickPrimaryText}>H</span>oly
              <span className={styles.thickPrimaryText}>C</span>lub
            </p>
            <p>십자가 복음을 전하며 세상을 변화시킵니다</p>
            <p>거룩한 소비를 통해 어려운 영혼을 살립니다</p>
          </div>
          <div className={styles.donateProceedsText}>
            <p>수익금은 어려운 아이들을 살리는데 사용됩니다</p>
          </div>
        </div>
      </section>
      <section className={styles.heroSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/main/bibleBanner.png"
            alt="십자가가 있는 들판"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.coverWrapper}></div>

        <div className={styles.contents}>
          <div className={styles.message}>
            말씀을 통해 어려운 영혼들이 살아납니다
          </div>
          <div className={styles.detailMessages}>
            <p className={styles.detailMessage}>
              이웃들과 성경을 읽으면서 거룩을 지키면
            </p>
            <p className={styles.detailMessage}>어려운 영혼들이 살아납니다</p>
          </div>
          <div className={styles.bibleMessages}>
            <div className={styles.bibleMessage}>
              너희는 세상의 빛이라. 산 위에 있는 동네가 숨겨지지 못할 것이요
            </div>
            <div className={styles.bibleReference}>마태복음 5:14</div>
          </div>
          <Link href="/bible" className={styles.ctaButton}>
            말씀 챌린지 참여하기
          </Link>
        </div>
      </section>
      <section className={styles.heroSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/main/marriedBanner.png"
            alt="십자가가 있는 들판"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.coverWrapper}></div>

        <div className={styles.contents}>
          <div className={styles.message}>
            연인을 통해 어려운 영혼들이 살아납니다
          </div>
          <div className={styles.detailMessages}>
            <p className={styles.detailMessage}>
              HolyClub을 통해 좋은 인연을 만나면
            </p>
            <p className={styles.detailMessage}>어려운 영혼들이 살아납니다</p>
          </div>
          <div className={styles.bibleMessages}>
            <div className={styles.bibleMessage}>
              내가 진실로 너희에게 이르노니
            </div>
            <div className={styles.bibleMessage}>
              너희가 여기 내 형제 중에 지극히 작은 자 하나에게 한 것이
            </div>
            <div className={styles.bibleMessage}>
              하나에게 한 것이 곧 내게 한 것이니라
            </div>
            <div className={styles.bibleReference}>마태복음 25:40</div>
          </div>
          <div className={styles.ctaButton}>연인 만나기</div>
        </div>
      </section>
      <div className={styles.footer}>
        <div className={styles.footerCompanyName}>홀리컴퍼니</div>
      </div>
    </div>
  );
}
