import React from 'react'

const testimonials = [
    {
      name: "Jaide F",
      title: "Registered Nurse",
      image: "https://placehold.co/60x60",
      alt: "Portrait of Jaide F",
      quote:
        "“A fantastic resume creator! Helped me so much with landing a job in an industry I’d wanted to get into for quite some time.”",
    },
    {
      name: "Elisabeth M",
      title: "Account Manager",
      image: "https://placehold.co/60x60",
      alt: "Portrait of Elisabeth M",
      quote: "“Very easy to use! Made a complete resume in under 20 minutes!”",
    },
    {
      name: "Kenneth",
      title: "Software Engineer",
      image: "https://placehold.co/60x60",
      alt: "Portrait of Kenneth",
      quote:
        "“Fantastic service! Great templates and cover letter assistance. Helped me land a great position and fast!”",
    },
  ];
  
function Testimonial() {
  return (
    <div>
      <div className="flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold mb-8">
          What people are saying about our <br />
          <span className="block text-center">Resume Maker</span>
        </h1>
        <div className="flex mt-6 space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 w-80 relative"
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-blue-800 rounded-t-lg"></div>
              <div className="flex items-center mb-4 mt-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.alt}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="font-bold">{testimonial.name}</h2>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
