import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [vidProgress, setVidProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [vidDuration, setVidDuration] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    isPlaying ? videoElement.current.play() : videoElement.current.pause();
  }, [isPlaying, videoElement]);

  const handleOnTimeUpdate = () => {
    const progress =
      (videoElement.current.currentTime / videoElement.current.duration) * 100;
    setVidProgress(progress);
  };
  const handleVideoProgress = (event) => {
    const manualChange = event.target.value;
    videoElement.current.currentTime = manualChange / 10;
    setVidProgress(manualChange);
  };

  const getVideoDuration = () => {
    setVidDuration(Math.floor(videoElement.current.duration));
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    isMuted
      ? (videoElement.current.muted = true)
      : (videoElement.current.muted = false);
  }, [isMuted, videoElement]);

  const toggleFullscreen = () => {
    if (videoElement.current) {
      videoElement.current.requestFullscreen();
    }
  };

  return {
    isPlaying,
    vidProgress,
    vidDuration,
    getVideoDuration,
    isMuted,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    toggleMute,
    toggleFullscreen,
  };
};
export default useVideoPlayer;
