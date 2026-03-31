export default function Quotes() {
  const quotes = [
    {
      text: "To love and be loved is to feel the sun from both sides.",
      author: "David Viscott",
    },
    {
      text: "Whatever our souls are made of, his and mine are the same.",
      author: "Emily Brontë",
    },
    {
      text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.",
      author: "Maya Angelou",
    },
    {
      text: "I have found the one whom my soul loves.",
      author: "Song of Solomon",
    },
    {
      text: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
      author: "Oscar Wilde",
    },
    {
      text: "Love is composed of a single soul inhabiting two bodies.",
      author: "Aristotle",
    },
    {
      text: "Whatever happens tomorrow, or for the rest of my life, I'm happy now.",
      author: "from Groundhog Day",
    },
    {
      text: "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
      author: "Angelita Lim",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-[60px] animate-on-scroll">
          <span className="font-[var(--font-body)] text-[0.75rem] font-medium tracking-[4px] uppercase text-[var(--color-gold)] block mb-3">
            Words of Love
          </span>
          <h2 className="font-[var(--font-heading)] text-[clamp(2.2rem,5vw,3.5rem)] font-normal text-[var(--color-brown-dark)] mb-6 leading-[1.2]">
            Favorite Quotes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quotes.map((quote, index) => (
            <blockquote
              key={index}
              className="text-center p-8 border border-[rgba(201,169,110,0.2)] rounded-xl bg-[var(--color-cream)] transition-all duration-400 hover:border-[var(--color-gold)] hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] animate-on-scroll"
            >
              <div className="font-[var(--font-heading)] text-[3rem] text-[var(--color-gold-light)] leading-none mb-4 opacity-60">
                &ldquo;
              </div>
              <p className="font-[var(--font-heading)] text-[1.05rem] italic text-[var(--color-brown-dark)] leading-relaxed mb-4 min-h-[60px]">
                &ldquo;{quote.text}&rdquo;
              </p>
              {quote.author && (
                <cite className="font-[var(--font-body)] text-[0.75rem] not-italic text-[var(--color-text-light)] tracking-[1px] block">
                  — {quote.author}
                </cite>
              )}
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
