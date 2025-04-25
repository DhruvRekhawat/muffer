import { BigStatement, BookACall, Comparison, FeaturedEdits, Hero, Pricing, Testimonials, TrustedBy, Video } from "@/components/sections";


export default function Home() {
  return (
    <main>
      <Hero/>
      <TrustedBy/>
      <Video/>
      <BigStatement/>
      <FeaturedEdits/>
      <Comparison/>
      {/* <HowItWorks/> */}
      <Testimonials/>
      <Pricing/>
      <BookACall/>
    </main>
  );
}
