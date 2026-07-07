import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Clock3,
  HeartPulse,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  ThumbsUp,
  UserRoundCheck,
  Waves
} from 'lucide-react';
import './styles.css';

const patientPhoto =
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=82';
const therapyPhoto = '/images/hero-treatment.png';
const doctorPhoto =
  'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=900&q=82';
const staffPhoto =
  'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=900&q=82';

const concerns = [
  ['肩こり・首こり', 'デスクワークやスマホ姿勢で硬くなった首肩まわりに。'],
  ['腰痛・ぎっくり腰', '繰り返す腰の不安を、姿勢と動作から整えます。'],
  ['猫背・姿勢の歪み', '見た目だけでなく、呼吸や疲れやすさも見直します。'],
  ['スポーツ障害', '部活・ランニング・ジムでの痛みを早期復帰へ。'],
  ['産後の骨盤ケア', '産後の違和感や抱っこ疲れをやさしくサポート。']
];

const strengths = [
  ['根本改善へ導く検査', '姿勢・可動域・筋肉の反応を確認し、原因の見立てを共有します。'],
  ['丁寧な説明とカウンセリング', '専門用語を使いすぎず、今の状態と通院目安をわかりやすく。'],
  ['国家資格者が担当', '柔道整復師が一人ひとりの体に合わせて施術します。'],
  ['予約優先制で待ちにくい', '仕事帰りや家事の合間にも通いやすい時間設計です。'],
  ['清潔で落ち着いた空間', 'はじめての方でも緊張しにくい、やわらかな院内環境。']
];

const flow = ['ヒアリング', '検査・評価', '施術', 'アフターケア'];

const faqs = [
  ['どのくらいの頻度で通えばよいですか？', '症状や生活習慣により異なります。初回検査後に、無理のない通院目安をご提案します。'],
  ['保険は使えますか？', '急性のケガなど適用条件を満たす場合に利用できます。詳しくは来院時にご相談ください。'],
  ['予約は必要ですか？', '予約優先制です。待ち時間を減らすため、Web予約またはお電話でのご予約をおすすめします。'],
  ['服装はどうすればよいですか？', '動きやすい服装がおすすめです。必要に応じてお着替えもご用意しています。']
];

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ハル整骨院 トップへ">
          <span className="brand-mark"><HeartPulse size={24} /></span>
          <span>
            <strong>ハル整骨院</strong>
            <small>HARU SEIKOTSUIN</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="メインナビゲーション">
          <a href="#first">はじめての方へ</a>
          <a href="#concerns">施術内容</a>
          <a href="#price">料金</a>
          <a href="#staff">スタッフ</a>
          <a href="#voice">お客様の声</a>
          <a href="#faq">よくある質問</a>
        </nav>
        <div className="header-actions">
          <a className="ghost-button" href="#access">アクセス</a>
          <a className="primary-button small" href="#reserve"><CalendarDays size={16} />Web予約</a>
        </div>
        <button className="menu-button" aria-label="メニュー"><Menu size={22} /></button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">姿勢・骨格・筋肉を整え、根本から改善へ導く整骨院</p>
            <h1>痛みを、<br />その場しのぎで<br className="sp" />終わらせない。</h1>
            <p className="hero-lead">
              肩こり、腰痛、姿勢の悩みを丁寧に検査し、あなたの生活に合わせた施術計画をつくります。
            </p>
            <div className="hero-buttons">
              <a className="primary-button" href="#reserve"><CalendarDays size={18} />Web予約</a>
              <a className="outline-button" href="#first">初回相談はこちら<ChevronRight size={17} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="施術風景">
            <div className="photo-card main-photo">
              <img src={therapyPhoto} alt="整骨院で施術を受ける患者" />
            </div>
            <div className="stats-panel">
              <Metric icon={<Stethoscope />} value="12,842" label="施術実績" />
              <Metric icon={<Star />} value="4.9" label="Google口コミ" />
              <Metric icon={<Clock3 />} value="92.7%" label="リピート率" />
              <Metric icon={<ShieldCheck />} value="在籍" label="国家資格者" />
            </div>
          </div>
        </section>

        <section className="mobile-preview" aria-label="モバイル予約導線">
          <div className="phone-frame">
            <div className="phone-top">
              <span>9:41</span>
              <Menu size={16} />
            </div>
            <strong>痛みを、その場しのぎで終わらせない。</strong>
            <img src={therapyPhoto} alt="スマートフォンで表示した施術風景" />
            <a href="#reserve"><CalendarDays size={15} />Web予約</a>
          </div>
        </section>

        <section className="concerns section" id="concerns">
          <div className="section-head center">
            <p className="eyebrow">BODY CONCERNS</p>
            <h2>このようなお悩みはありませんか？</h2>
          </div>
          <div className="concern-grid">
            {concerns.map(([title, text]) => (
              <article className="glass-card concern-card" key={title}>
                <UserRoundCheck />
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#reserve">詳しく見る<ChevronRight size={14} /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="strength section" id="first">
          <div className="section-head center">
            <p className="eyebrow">OUR STRENGTH</p>
            <h2>ハル整骨院の5つの強み</h2>
          </div>
          <div className="strength-grid">
            {strengths.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Sparkles />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="flow section">
          <div className="section-head center">
            <p className="eyebrow">TREATMENT FLOW</p>
            <h2>施術の流れ</h2>
          </div>
          <div className="flow-row">
            {flow.map((item, index) => (
              <article className="flow-item" key={item}>
                <img src={index % 2 === 0 ? doctorPhoto : staffPhoto} alt={`${item}の様子`} />
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item}</h3>
                <p>状態を確認しながら、次に必要なケアまで丁寧にご案内します。</p>
              </article>
            ))}
          </div>
        </section>

        <section className="split-section section" id="staff">
          <div className="photo-panel">
            <img src={patientPhoto} alt="整骨院の清潔なカウンセリング風景" />
            <div className="body-points">
              <span className="point neck"></span>
              <span className="point shoulder"></span>
              <span className="point hip"></span>
            </div>
          </div>
          <div className="copy-panel">
            <p className="eyebrow">STAFF MESSAGE</p>
            <h2>痛みの理由を一緒に見つけ、戻りにくい身体へ。</h2>
            <p>
              「どこへ行っても変わらない」と感じている方ほど、まずは状態を見直すことが大切です。
              ハル整骨院では、施術前の説明とセルフケアまで丁寧に行います。
            </p>
            <div className="staff-list">
              <img src={doctorPhoto} alt="院長" />
              <img src={staffPhoto} alt="スタッフ" />
              <img src={therapyPhoto} alt="施術スタッフ" />
            </div>
          </div>
        </section>

        <section className="voice-faq section">
          <div className="voice-card" id="voice">
            <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} fill="currentColor" />)}</div>
            <strong>5.0</strong>
            <p>長年の腰痛が改善し、仕事も趣味も思いきり楽しめるようになりました。説明が丁寧で安心できます。</p>
            <small>30代 / 会社員 / 腰痛</small>
          </div>
          <div className="faq-card" id="faq">
            <p className="eyebrow">FAQ</p>
            <h2>よくある質問</h2>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary><CircleHelp size={17} />{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="reserve section" id="reserve">
          <div>
            <p className="eyebrow">RESERVATION</p>
            <h2>今すぐ、あなたの悩みをご相談ください</h2>
            <p>Web予約は24時間受付中。初めての方も、気になる症状を選ぶだけで簡単に予約できます。</p>
          </div>
          <div className="reserve-actions">
            <a className="primary-button" href="https://example.com" aria-label="Web予約へ"><CalendarDays size={18} />Web予約</a>
            <a className="orange-button" href="tel:0952000000"><MessageCircle size={18} />初回相談はこちら</a>
          </div>
        </section>

        <section className="access section" id="access">
          <div className="access-card">
            <MapPin />
            <h2>アクセス</h2>
            <p>佐賀市中央通り 1-2-3 / 平日 9:00-20:00 / 土曜 9:00-17:00</p>
          </div>
        </section>
      </main>

      <nav className="bottom-nav" aria-label="スマートフォン用ナビゲーション">
        <a href="#top"><Home size={19} />ホーム</a>
        <a href="#concerns"><HeartPulse size={19} />施術内容</a>
        <a className="active" href="#reserve"><CalendarDays size={19} />Web予約</a>
        <a href="#access"><MapPin size={19} />アクセス</a>
        <a href="#faq"><Menu size={19} />メニュー</a>
      </nav>

      <a className="floating-cta" href="#reserve"><CalendarDays size={18} />Web予約はこちら</a>

      <footer>
        <Waves />
        <p>ハル整骨院</p>
        <small>痛みを、その場しのぎで終わらせない。</small>
      </footer>
    </>
  );
}

function Metric({ icon, value, label }) {
  return (
    <div className="metric">
      {React.cloneElement(icon, { size: 22 })}
      <strong>{value}</strong>
      <small>{label}</small>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
