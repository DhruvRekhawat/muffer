import { BigStatement, BookACall, FeaturedEdits, Hero, Pricing, Testimonials, TrustedBy, Video } from "@/components/sections";


export default function Home() {
  return (
    <main>
      <Hero/>
      <TrustedBy/>
      <Video/>
      <BigStatement/>
      <FeaturedEdits/>
      {/* <Comparison/> */}
      {/* <HowItWorks/> */}
      <Pricing/>
      <Testimonials/>
      <BookACall/>
    </main>
  );
}
