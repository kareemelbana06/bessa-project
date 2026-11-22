import { useEffect, useRef, useState } from "react";
import { Heart } from "lucide-react";

export function BessaMemorialSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="bessa"
      aria-labelledby="bessa-title"
      className={`flex justify-center scroll-mt-20 border-y border-border bg-surface/60 py-14 md:py-20 bessa-fade ${
        isVisible ? "bessa-visible" : ""
      }`}
      dir="rtl"
    >
      <div className="mx-auto flex w-fit max-w-full flex-row items-center justify-center gap-12 px-6 max-sm:w-full max-sm:flex-col max-sm:items-center max-sm:gap-8">
        <figure className="relative mx-auto w-full max-w-[320px] shrink-0 max-sm:max-w-none">
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-primary/30" aria-hidden="true" />
          <img
            src="/bessa.jpg"
            alt="بسه، قطتي الغالية"
            loading="lazy"
            className="relative aspect-[4/5] w-full rounded-[1.75rem] object-cover object-center shadow-card max-sm:aspect-square"
          />
        </figure>

        <div className="min-w-0 text-right max-sm:text-center">
          <div className="mb-5 inline-flex size-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
            <Heart className="size-7" fill="currentColor" aria-hidden="true" />
          </div>
          <p className="mb-2 text-sm font-bold text-primary">في قلبنا دائمًا</p>
          <h2 id="bessa-title" className="font-display text-4xl leading-tight text-foreground md:text-6xl">
            بِسَّة
          </h2>
          <p className="mt-5 text-xl leading-[1.9] text-muted-foreground md:text-2xl">
            بِسَّة حب والحب لا يموت
          </p>
        </div>
      </div>
    </section>
  );
}
