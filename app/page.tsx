import { BigStatement, BookACall, FeaturedEdits, Features, Hero, Pricing, Testimonials, TrustedBy, Video } from "@/components/sections";


export default function Home() {
  return (
    <main>
      <Hero/>
      <TrustedBy/>
      <Video/>
      <Features/>
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
