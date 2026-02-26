import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { CopyBlock } from "@/components/CopyBlock";
import { IconBadge } from "@/components/IconBadge";
import {
  site,
  metrics,
  pillars,
  steps,
  testimonials,
  plans,
  faqs,
  applicationTemplate,
  footer
} from "@/components/content";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description:
    "恋愛・仕事・お金・家族の悩みを霊視で整理し、3日で動ける指針へ導くオンライン鑑定サービス。",
  areaServed: "JP",
  serviceType: "霊視占い",
  provider: {
    "@type": "Person",
    name: "りこ"
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: site.lineUrl
  }
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden bg-hero text-white">
        <div className="container-xl section-pad">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="badge bg-white/10 text-white">霊視鑑定 / LINE受付</p>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                {site.headline}
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                {site.subHeadline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-white/10 px-4 py-2"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      {metric.label}
                    </p>
                    <p className="text-lg font-semibold text-white">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#apply" className="cta-gold">
                  LINEで無料相談を送る
                </a>
                <a href="#menu" className="cta-outline border-white/40 text-white">
                  メニューを見る
                </a>
              </div>
              <p className="mt-4 text-xs text-white/70">
                文章が苦手でもOK。質問に答えるだけで鑑定が進みます。
              </p>
            </div>
            <div className="relative">
              <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-lavender/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-white/5 p-3 shadow-ring">
                <Image
                  src="/hero-placeholder.svg"
                  alt="神秘的で上品なビジュアルのプレースホルダー"
                  width={720}
                  height={840}
                  className="h-auto w-full rounded-[28px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Different"
            title="“他と違う理由”を3つの柱で明確化"
            description="霊視の情報を現実の行動へ変換することを最優先。信頼できるプロセスで迷いをほどきます。"
          />
          <div className="grid gap-5">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="card p-6">
                <div className="flex items-start gap-4">
                  <IconBadge>
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12.5L9.5 17L19 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </IconBadge>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-ink/50">
                      Pillar 0{index + 1}
                    </p>
                    <h3 className="mt-1 font-serif text-xl font-semibold text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-fog">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Process"
            title="鑑定プロセスを見える化"
            description="迷いを丁寧にほどき、3日で動ける指針に変換する流れを明示します。"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="card p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/40">
                  Step {index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Voices"
            title="お客様の声（Before → 鑑定 → After）"
            description="落ち着きと具体性を重視した体験談を紹介します。"
          />
          <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
            {testimonials.map((voice) => (
              <article
                key={voice.profile}
                className="card min-w-[260px] max-w-sm flex-1 snap-start p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-ink/50">
                  {voice.profile}
                </p>
                <div className="mt-4 space-y-3 text-sm text-ink/70">
                  <p>
                    <span className="font-semibold text-ink">Before:</span> {voice.before}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">鑑定:</span> {voice.reading}
                  </p>
                  <p>
                    <span className="font-semibold text-ink">After:</span> {voice.after}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="section-pad bg-fog">
        <div className="container-xl">
          <SectionHeading
            eyebrow="Menu"
            title="迷わせない3つのプラン"
            description="初回無料の範囲を明確にし、相談の入口をわかりやすく。"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className="card p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl font-semibold text-ink">
                    {plan.name}
                  </h3>
                  <span className="text-sm font-semibold text-gold">{plan.price}</span>
                </div>
                <p className="mt-3 text-sm text-ink/70">向いてる人：{plan.target}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {plan.content.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-ink/60">{plan.delivery}</p>
                <p className="mt-3 text-xs font-semibold text-ink">{plan.freeScope}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <SectionHeading
            eyebrow="FAQ"
            title="よくある質問"
            description="安心して相談いただけるよう、事前に疑問を解消します。"
          />
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.q} className="card p-5">
                <summary className="cursor-pointer text-sm font-semibold text-ink">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm text-ink/70">{faq.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-xs text-ink/60">
            ※医療・法律・投資など専門資格が必要な分野の判断は行いません。
          </p>
        </div>
      </section>

      <section id="apply" className="section-pad bg-night text-white">
        <div className="container-xl grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="LINEで無料相談を送る"
              description="下記のテンプレをコピペするだけ。文章が苦手でも安心して送信できます。"
              invert
            />
            <div className="mt-6">
              <CopyBlock lines={applicationTemplate} />
            </div>
            <div className="mt-6 flex flex-wrap gap-3 items-center">
              <a
                href={site.lineUrl}
                className="cta-gold"
                aria-label="LINEで無料相談を申し込む"
              >
                LINEで無料相談を送る
              </a>
              <p className="text-xs text-white/70">{site.responseLead}</p>
            </div>
          </div>
          <div className="card-dark p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-white/50">
              安心ポイント
            </p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-white">
              相談内容の整理から伴走します
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li>・悩みが言語化できなくても、質問で引き出します。</li>
              <li>・断定的整理で“次の行動”が明確になります。</li>
              <li>・秘密厳守。個人情報は第三者に共有しません。</li>
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-white/60">
              初回無料の範囲：魂タイプ診断 + 相談要約 + 次にやる一つの行動
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white py-10">
        <div className="container-xl grid gap-6 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-sm font-semibold text-ink">{site.name}</p>
            <p className="mt-2 text-xs text-ink/60">{site.location}</p>
          </div>
          <div className="text-xs text-ink/60">
            <p>連絡先：LINEでのご案内のみとなります。</p>
            <p className="mt-2">免責：{footer.disclaimer}</p>
            <p className="mt-2">プライバシーポリシー：{footer.privacy}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
