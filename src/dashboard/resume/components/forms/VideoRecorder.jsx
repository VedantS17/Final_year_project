import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';

function VideoRecorder() {
  const [loading, setLoading] = useState(false);
  const [videoRecorded, setVideoRecorded] = useState(false);
  const [videoBlob, setVideoBlob] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const mediaRecorderRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const startRecording = async () => {
    try {
      // Request access to the user's camera and microphone
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // "user" makes sure it accesses the front camera
        audio: true, // Ensure audio is also being captured
      });

      // Set the video source
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      // Store the stream reference for later use when stopping
      streamRef.current = stream;

      // Create MediaRecorder to capture the video stream
      mediaRecorderRef.current = new MediaRecorder(stream);

      let chunks = [];
      mediaRecorderRef.current.ondataavailable = (event) => {
        chunks.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        // Ensure the video URL is updated and a new video is previewed
        if (chunks.length > 0) {
          const blob = new Blob(chunks, { type: "video/webm" });
          const url = URL.createObjectURL(blob);
          setVideoBlob(blob);
          setVideoUrl(url); // Set the video URL after stopping the recording
          setVideoRecorded(true);
        }
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
      setLoading(false); // Stop showing loader when recording starts
    } catch (error) {
      console.error("Error accessing media devices:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      // Stop the MediaRecorder
      mediaRecorderRef.current.stop();

      // Stop the media stream (turn off the camera and microphone)
      if (streamRef.current) {
        const tracks = streamRef.current.getTracks();
        tracks.forEach((track) => track.stop());
      }

      setIsRecording(false);
    }
  };

  const saveVideo = () => {
    if (!videoBlob) return;

    const url = URL.createObjectURL(videoBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recorded-video.webm';
    a.click();
  };

  // This resets the video state for the next recording
  const resetVideo = () => {
    setVideoUrl(null);
    setVideoBlob(null);
    setVideoRecorded(false);
  };

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Video Recorder</h2>
      <p>Record your video for the resume</p>

      <div className="mt-5">
        <div className="flex justify-center mb-5">
          {videoUrl && (
            <video
              ref={videoRef}
              src={videoUrl}
              controls
              className="w-full max-w-md"
              autoPlay
            />
          )}
        </div>

        <div className="flex justify-between">
          {!isRecording ? (
            <Button
              variant="outline"
              onClick={() => { resetVideo(); startRecording(); }} // Reset video before starting a new recording
              disabled={loading}
              className="text-primary"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : 'Start Recording'}
            </Button>
          ) : (
            <Button
              variant="outline"
              onClick={stopRecording}
              className="text-red-500"
            >
              Stop Recording
            </Button>
          )}

          <Button
            disabled={loading || !videoRecorded}
            onClick={saveVideo}
            className="bg-primary text-white"
          >
            {loading ? <LoaderCircle className="animate-spin" /> : 'Save Video'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoRecorder;
