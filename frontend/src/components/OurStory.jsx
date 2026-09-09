import React from 'react';
import storyImage from '../assets/banner (2).jpeg';

const OurStory = () => {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-4 text-xs font-semibold tracking-[0.28em] text-[#8c5a37] uppercase">
              Our Story
            </p>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-[#2A2421] sm:text-5xl">
              A warm cup, a slower rhythm, and a community built around coffee.
            </h1>
            <p className="mb-4 text-base leading-8 text-[#4b3b34]">
              Brew & Bloom began with a simple idea: coffee should feel like a ritual, not a rush.
              We set out to create a neighborhood café where every bean is chosen with care and every
              guest feels welcomed like part of the family.
            </p>
            <p className="text-base leading-8 text-[#4b3b34]">
              From ethically sourced beans to lovingly prepared brews, every detail reflects our passion
              for quality, comfort, and connection. We believe the best coffee moments happen when people
              slow down and savor the little things.
            </p>
          </div>

          <div className="overflow-hidden rounded-[30px] border border-[#b89174]/40 bg-[#f3e9df] shadow-[0_24px_60px_rgba(45,26,17,0.08)]">
            <img
              src={storyImage}
              alt="Barista preparing coffee in a cozy cafe"
              className="h-full min-h-[26rem] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#2a1811] py-16 text-[#f7f3ed]">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Curated Beans',
                text: 'We source premium, responsibly grown coffee beans that bring out rich character in every cup.',
              },
              {
                title: 'Crafted Daily',
                text: 'Each roast and brew is prepared with attention to balance, aroma, and the experience in your hands.',
              },
              {
                title: 'Made for Moments',
                text: 'Whether it is a quiet morning or a long catch-up, our space is designed for connection and calm.',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="mb-3 font-serif text-2xl font-semibold text-[#e9d7c7]">{item.title}</h2>
                <p className="text-sm leading-7 text-[#f7f3ed]/80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurStory;
