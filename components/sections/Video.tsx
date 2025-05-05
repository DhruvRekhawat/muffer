import HeroVideoDialog from "../magicui/hero-video-dialog";

export default function Video() {
  return (
    <div className="relative p-16">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://youtu.be/HQwLPhE2zys?si=EUnGI0x_hsv5lf5N"
        thumbnailSrc="https://www.lummi.ai/api/render/image/05bd2773-e963-459a-849f-e5188b79d021?token=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA1YmQyNzczLWU5NjMtNDU5YS04NDlmLWU1MTg4Yjc5ZDAyMSIsImRvd25sb2FkU2l6ZSI6Im1lZGl1bSIsInJlbmRlclNwZWNzIjp7ImVmZmVjdHMiOnsicmVmcmFtZSI6e319fSwic2hvdWxkQXV0b0Rvd25sb2FkIjpmYWxzZSwianRpIjoiM1dSREJLemxtNWFtVkRzQWRPZVlNIiwiaWF0IjoxNzQ2NDE0MTYyLCJleHAiOjE3NDY0MTQyMjJ9.2rWINVh4QPUtQi9WLNh5X81YB8E86DA7Kmwfpg9vQHA"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
