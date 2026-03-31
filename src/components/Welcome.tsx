export default function Welcome() {
  return (
    <section id="welcome" className="bg-white text-center py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[700px] mx-auto animate-on-scroll">
          <div className="text-[var(--color-gold-light)] text-[1.5rem] opacity-60 mb-6 leading-none">
            &#10044;
          </div>
          <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
            Thank You
          </h2>
          <p className="font-[var(--font-heading)] text-[clamp(1.3rem,3vw,1.8rem)] font-light italic leading-relaxed text-[var(--color-brown-dark)]">
            Thank you for being part of our journey. Your love, blessings, and
            presence made our special day truly unforgettable. We are forever
            grateful.
          </p>
          <div className="text-[var(--color-gold-light)] text-[1.5rem] opacity-60 mt-6 leading-none">
            &#10044;
          </div>
        </div>
      </div>
    </section>
  );
}
