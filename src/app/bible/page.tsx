import Image from "next/image";
import styles from "./page.module.css";

export default function BiblePage() {
  return (
    <div className={styles.container}>
      {/* 헤더 */}
      <section className={styles.heroSection}>
        {/* 배경 이미지 */}
        <Image
          src="/images/main/topBanner.png"
          alt="성경책 이미지"
          width={1200}
          height={600}
          className={styles.heroImage}
          priority
        />

        {/* 오버레이 박스 */}
        <div className={styles.heroOverlay}>
          <div className={styles.heroText}>
            <div>
              <h1 className={styles.heroTitle}>매일 성경 읽기</h1>
              <p className={styles.heroSubtitle}>
                성경 말씀을 통해 하나님을 알아가는 시간
              </p>
            </div>
            <span className={styles.heroPrice}>10,000원</span>
          </div>
        </div>
      </section>

      {/* 소개 영역 */}
      <section className={styles.introSection}>
        <p className={styles.note}>수익금은 어려운 이웃들을 위해 사용돼요</p>
        <div className={styles.introTitles}>
          <div className={styles.introTitle}>이웃들과 함께 성경 읽으며</div>
          <div className={styles.introTitle}>주님을 알아가요</div>
        </div>

        <div className={styles.introText}>
          말씀을 읽는 것이 하나님을 만나는 것과 같습니다. <br />
          우리는 성경을 스스로 읽을 수 있는 힘을 길러야 합니다. <br />
          이런 의미 속에서 성경은 말씀의 훈련의 예술입니다. <br />
          성경 통독의 목표는 단순한 읽음이 아니라 주님을 만나는 것에 있습니다.
        </div>
      </section>

      {/* 성경읽기 단계 */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>성경읽기</h3>

        <div className={styles.step}>
          <div className={styles.stepText}>
            <h4>1. 성경 준비하기</h4>
            <p>
              하나님의 시간과 말씀 앞에 전심으로 나아갈 수 있도록 준비하세요.{" "}
              <br />
              말씀 묵상은 단순한 독서가 아니라 하나님과의 만남입니다.
            </p>
          </div>
          <Image
            src="/images/main/topBanner.png"
            alt="성경 준비"
            width={180}
            height={120}
            className={styles.stepImage}
          />
        </div>

        <div className={styles.step}>
          <div className={styles.stepText}>
            <h4>2. 성경읽기 시간 정하기</h4>
            <p>
              자신의 일정에 맞게 꾸준히 시간을 정해 말씀을 읽으세요. <br />
              아침, 점심, 저녁 중 본인에게 가장 집중할 수 있는 시간을 정하세요.
            </p>
          </div>
          <Image
            src="/images/main/topBanner.png"
            alt="성경읽기 시간"
            width={180}
            height={120}
            className={styles.stepImage}
          />
        </div>

        <div className={styles.step}>
          <div className={styles.stepText}>
            <h4>3. 말씀을 공유하기</h4>
            <p>
              매일 읽은 말씀을 함께 나누며 서로의 믿음을 세워가세요. <br />
              나눔은 단순한 소통이 아니라 공동체의 성장입니다.
            </p>
          </div>
          <Image
            src="/images/main/topBanner.png"
            alt="공유 이미지"
            width={180}
            height={120}
            className={styles.stepImage}
          />
        </div>
      </section>

      {/* 공유 방법 */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>공유 방법</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>1. 공유 일정: 매일</li>
          <li className={styles.listItem}>2. 공유 시간: 자유롭게</li>
          <li className={styles.listItem}>
            3. 공유 채널: 홀리클럽 - 말씀 챌린지 단톡방
          </li>
        </ul>
      </section>

      {/* 추천 섹션 */}
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>이런 분들께 추천드려요</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>📖 말씀을 꾸준히 읽고 싶은 분</li>
          <li className={styles.listItem}>
            🤍 혼자보다는 함께 성경을 읽고 싶은 분
          </li>
          <li className={styles.listItem}>
            🙏 매일의 묵상을 습관화하고 싶은 분
          </li>
        </ul>
      </section>

      {/* 참여 방법 */}
      <section className={styles.joinSection}>
        <h3 className={styles.sectionTitle}>참여 방법</h3>
        <ol className={styles.numberList}>
          <li className={styles.listItem}>
            1. 하단의 참여하기 버튼을 클릭해주세요
          </li>
          <li className={styles.listItem}>
            2. 화면에 보이는 계좌번호로 입금부탁드려요
          </li>
          <li className={styles.listItem}>
            3. 담당자 확인 후 카카오톡으로 안내드릴 예정입니다
          </li>
        </ol>
      </section>

      <section className={styles.lastMessage}>
        <p className={styles.lastMessageText}>
          말씀 챌린지 수익금은 <br />
        </p>
        <p className={styles.lastMessageText}>
          어려운 교회와 아이들을 위해 사용됩니다. <br />
        </p>
        <p className={styles.lastMessageText}>
          수익금 사용내역은 투명하게 공개됩니다.
        </p>
      </section>

      <button className={styles.joinButton}>말씀 챌린지 참여하기</button>
    </div>
  );
}
