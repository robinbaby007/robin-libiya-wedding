export default function Events() {
  return (
    <section id="events" className="bg-white py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px] animate-on-scroll">
          <span className="font-[var(--font-body)] text-[0.75rem] font-medium tracking-[4px] uppercase text-[var(--color-gold)] block mb-3">
            Our Special Day
          </span>
          <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
            Wedding Celebration
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto">
          <div className="bg-[var(--color-cream)] rounded-2xl p-12 px-10 text-center transition-all duration-400 border border-[rgba(201,169,110,0.15)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] animate-on-scroll">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-gold-light)] via-[var(--color-gold)] to-[var(--color-gold-light)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <div className="text-[var(--color-gold)] mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mx-auto"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
            <h3 className="font-[var(--font-heading)] text-[1.8rem] font-medium text-[var(--color-brown-dark)] mb-6">
              Wedding Ceremony
            </h3>
            <div className="mb-5">
              <p className="text-[0.95rem] text-[var(--color-text-light)] mb-2">
                <strong className="text-[var(--color-brown-dark)] font-semibold">
                  Date:
                </strong>{" "}
                January 1, 2026
              </p>
              <p className="text-[0.95rem] text-[var(--color-text-light)] mb-2">
                <strong className="text-[var(--color-brown-dark)] font-semibold">
                  Time:
                </strong>{" "}
                To be announced
              </p>
              <p className="text-[0.95rem] text-[var(--color-text-light)] mb-2">
                <strong className="text-[var(--color-brown-dark)] font-semibold">
                  Venue:
                </strong>{" "}
                To be announced
              </p>
            </div>
            <p className="font-[var(--font-heading)] text-[1rem] italic text-[var(--color-rose)]">
              Where two hearts became one forever.
            </p>
          </div>

          <div className="bg-[var(--color-cream)] rounded-2xl p-12 px-10 text-center transition-all duration-400 border border-[rgba(201,169,110,0.15)] relative overflow-hidden hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] animate-on-scroll">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--color-gold-light)] via-[var(--color-gold)] to-[var(--color-gold-light)] opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <div className="text-[var(--color-gold)] mb-6">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="mx-auto"
              >
                <path d="M17 8C17 5.23858 14.7614 3 12 3C9.23858 3 7 5.23858 7 8H17Z" />
                <path d="M12 14C12 11.2386 9.76142 9 7 9C4.23858 9 2 11.2386 2 14V17H12V14Z" />
                <path d="M22 14C22 11.2386 19.7614 9 17 9C14.2386 9 12 11.2386 12 14V17H22V14Z" />
                <path d="M2 20H22" />
                <circle cx="12" cy="20" r="1" />
              </svg>
            </div>
            <h3 className="font-[var(--font-heading)] text-[1.8rem] font-medium text-[var(--color-brown-dark)] mb-6">
              Reception
            </h3>
            <div className="mb-5">
              <p className="text-[0.95rem] text-[var(--color-text-light)] mb-2">
                <strong className="text-[var(--color-brown-dark)] font-semibold">
                  Date:
                </strong>{" "}
                January 1, 2026
              </p>
              <p className="text-[0.95rem] text-[var(--color-text-light)] mb-2">
                <strong className="text-[var(--color-brown-dark)] font-semibold">
                  Time:
                </strong>{" "}
                To be announced
              </p>
              <p className="text-[0.95rem] text-[var(--color-text-light)] mb-2">
                <strong className="text-[var(--color-brown-dark)] font-semibold">
                  Venue:
                </strong>{" "}
                To be announced
              </p>
            </div>
            <p className="font-[var(--font-heading)] text-[1rem] italic text-[var(--color-rose)]">
              Dinner, music, and dancing filled the evening with joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
