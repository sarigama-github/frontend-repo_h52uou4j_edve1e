import { useEffect, useState, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Partners for Advancing Health Systems',
    subtitle:
      'We collaborate with governments, funders, and communities to strengthen primary health care and deliver equitable outcomes.',
    bg: 'from-sky-600 via-cyan-600 to-emerald-600',
  },
  {
    id: 2,
    title: 'Co-creating locally rooted solutions',
    subtitle:
      'Our approach centers local leadership, data, and continuous learning to build resilient systems that last.',
    bg: 'from-indigo-700 via-violet-700 to-fuchsia-700',
  },
  {
    id: 3,
    title: 'Impact at scale across India & Southeast Asia',
    subtitle:
      'We bring technical expertise and on-the-ground experience to translate strategy into measurable impact.',
    bg: 'from-rose-600 via-orange-600 to-amber-600',
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => setIndex(i % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <section aria-label="Hero" className="relative isolate">
      <div className="absolute inset-0 -z-0 overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== index}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              i === index ? 'opacity-100' : 'opacity-0'
            } bg-gradient-to-br ${s.bg}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pb-24 text-white">
        <div className="max-w-3xl">
          <p className="tracking-widest uppercase text-teal-200/90 text-xs sm:text-sm font-semibold mb-3">
            AROHAN Partners
          </p>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            {slides[index].title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-white/90">
            {slides[index].subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-white text-gray-900 px-4 py-2.5 text-sm font-semibold shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-white/90 transition"
            >
              Work with us
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-transparent border border-white/70 text-white px-4 py-2.5 text-sm font-semibold backdrop-blur-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 hover:bg-white/10 transition"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-12 flex items-center gap-2" role="tablist" aria-label="Slide selector">
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              aria-controls={`slide-${s.id}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 ${
                i === index ? 'w-8 bg-white' : 'w-3 bg-white/60 hover:bg-white/80'
              }`}
            >
              <span className="sr-only">Go to slide {i + 1}</span>
            </button>
          ))}
        </div>

        <div className="absolute inset-y-0 left-0 right-0 pointer-events-none">
          <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              aria-label="Previous slide"
              onClick={prev}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white h-10 w-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              aria-label="Next slide"
              onClick={next}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white h-10 w-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
