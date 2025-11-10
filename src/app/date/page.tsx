"use client";

import styles from "./page.module.css";
import Image from "next/image";
export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* ✅ Header */}
      <header className={styles.header}>
        <div className={styles.logo}>HolyDate</div>
      </header>

      {/* ✅ Hero Banner */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            믿음 안에서 만나는 <br />
            <span className={styles.brand}>진짜 인연, 홀리데이트</span>
          </h1>
          <p>
            누구나 쉽게 시작하는 사랑이 아닌, <br />
            하나님 안에서 진심으로 연결되는 만남을 만들어갑니다.
          </p>
        </div>
      </section>

      {/* ✅ 소개 섹션들 */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.text}>
            <h2>신원 인증</h2>
            <h3>진짜 크리스천만 함께하는 안심 매칭</h3>
            <p>
              홀리데이트는 아무나 참여할 수 없습니다.
              <br />
              모든 회원은 매니저가 직접 신분증과 교회 정보를 확인하며,
              <br />
              실제 신앙생활을 고백한 분만 등록됩니다.
            </p>
            <p className={styles.highlight}>
              우리는 ‘프로필’이 아닌 ‘진심’을 확인합니다. <br />
              믿을 수 있는 크리스천만 만나세요.
            </p>
          </div>
          <div className={styles.imageGroup}>
            <Image
              src="/images/main/topBanner.png"
              alt="성경읽기 시간"
              width={180}
              height={120}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.text}>
            <h2>기부 문화</h2>
            <h3>사랑이 흘러가고, 믿음이 이어지는 만남</h3>
            <p>
              홀리데이트의 모든 수익 일부는 <br />
              어려운 아이들과 작은 교회를 위해 기부됩니다.
              <br />
              당신의 만남이 누군가의 기도가 됩니다.
            </p>
            <p className={styles.highlight}>
              사랑이 사랑으로 이어지는, 세상에서 가장 따뜻한 매칭.
            </p>
          </div>
          <div className={styles.imageGroup}>
            <Image
              src="/images/main/topBanner.png"
              alt="성경읽기 시간"
              width={180}
              height={120}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.text}>
            <h2>1:1 맞춤 매칭</h2>
            <h3>하나님께서 예비하신 인연, 정성으로 이어드립니다.</h3>
            <p>
              연령, 신앙, 가치관, 교단까지 세밀하게 고려하여
              <br />
              전문 매니저가 직접 1:1로 매칭합니다.
            </p>
            <p className={styles.highlight}>
              단순한 ‘소개’가 아닌, <br />
              신앙의 방향이 같은 두 사람이 만나도록 돕습니다.
            </p>
          </div>
          <div className={styles.imageGroup}>
            <Image
              src="/images/main/topBanner.png"
              alt="성경읽기 시간"
              width={180}
              height={120}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <div className={styles.text}>
            <h2>안전한 공간</h2>
            <h3>신천지 및 이단 단체는 철저히 차단됩니다.</h3>
            <p>
              이단 및 비기독교 단체의 접근을 막기 위해
              <br />
              실명 검증과 차단 DB 검사를 병행합니다.
              <br />
              오직 진정한 크리스천만 함께할 수 있는 공간입니다.
            </p>
            <p className={styles.highlight}>
              거룩한 만남을 지키는, 믿을 수 있는 플랫폼.
            </p>
          </div>
          <div className={styles.imageGroup}>
            <Image
              src="/images/main/topBanner.png"
              alt="성경읽기 시간"
              width={180}
              height={120}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      {/* ✅ Closing Message */}
      <section className={styles.closing}>
        <p>
          우리는 단순히 ‘만남’을 연결하지 않습니다. <br />
          사랑이 흘러가고, 믿음이 자라며, 선한 영향력이 이어지는 만남
          <br />
          이것이 홀리데이트가 꿈꾸는 <strong>거룩한 사랑의 방식</strong>입니다.
        </p>
      </section>
    </main>
  );
}
