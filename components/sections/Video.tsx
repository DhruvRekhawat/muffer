import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function Video() {
  return (
    <div className="relative md:p-16 ">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://youtu.be/HQwLPhE2zys?si=EUnGI0x_hsv5lf5N"
        thumbnailSrc="/illustrations/Rating.svg"
        thumbnailAlt="Hero Video"
      />
      {/* <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      /> */}
    </div>
  );
}
