export default function Footer() {
  return (
    <footer className="bg-[var(--color-brown-dark)] text-white py-[60px] pb-10 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[600px] mx-auto">
          <div className="font-[var(--font-heading)] text-[clamp(1.5rem,4vw,2.5rem)] font-normal mb-3 tracking-[1px]">
            Robin Baby{" "}
            <span className="text-[var(--color-gold-light)] italic mx-2">
              &
            </span>{" "}
            Libiya Joseph
          </div>
          <div className="text-[0.85rem] tracking-[4px] opacity-70 mb-4">
            01.01.2026
          </div>
          <p className="font-[var(--font-heading)] text-[1.15rem] italic opacity-85 mb-6">
            Happily ever after begins now.
          </p>
          <div className="text-[var(--color-gold)] text-[1.2rem] opacity-50">
            &#10044;
          </div>
        </div>
      </div>
    </footer>
  );
}
