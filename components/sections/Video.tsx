import React from "react";
import { Card } from "../ui/card";

const Video = () => {
  return (
    <div>
      <Card className="max-w-4xl mx-auto p-4">
<video className="w-full rounded-md" autoPlay controls={false} muted loop>
  <source src="/video/Guru Ad Cut.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
      </Card>
    </div>
  );
};

export default Video;
