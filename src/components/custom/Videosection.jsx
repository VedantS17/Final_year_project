import React from 'react'

function Videosection() {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 to-blue-300 flex items-center justify-center min-h-screen">
        <div className="bg-blue-900 text-white rounded-3xl p-8 flex items-center space-x-8 mx-16">
          <div className="relative flex-1">
            <video
              className="rounded-lg shadow-lg"
              height="400"
              width="700"
              controls
            >
              <source src="your-video-source.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
              <i className="fas fa-play-circle text-6xl text-blue-500"></i>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold">
              See what our Resume builder can do
            </h2>
            <p className="mt-4 text-lg">
              Learn how to create a mistake-free resume in under 10 minutes with
              our award-winning Resume Builder.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videosection
