const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Amina Liaquat',
    position: 'Web Developer',
    photo:
      'https://avatars.githubusercontent.com/u/176483234?s=400&u=f2e4de733efc71886be6e062c33c8f92579ee3e5&v=4',
      text:
      'Out of the many HTML/CSS developers I’ve worked with, she stands out as the best. Her focus on writing clean, efficient code and her attention to design details are truly impressive. She has a remarkable abilityto turn thoughtful designs into flawless, pixel-perfect websites. Every project she touches reflects her dedication to quality—she consistently goes above and beyond!',
  },
  {
    name: 'Nisha Amir',
    position: 'Software Engineer',
    photo: 'https://i.pinimg.com/736x/cd/f0/6d/cdf06d7b9188c7ebcc1e6af8f188e980.jpg',
    text:
      'This girl is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire her, you will not be disappointed by the work delivered. Shee will go the extra mile to make sure that you are happy with your project. I will surely work again with her!',
  },
  {
    name: 'Noor ul Ain',
    position: 'Data Entry',
    photo: 'https://i.pinimg.com/736x/3f/91/69/3f916949e93d846a3b670e4185077bae.jpg',
    text:
      "This girl is a hard worker. Communication was also very good with her and she was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with her.",
  },
  {
    name: 'Fatima Hassan',
    position: 'Graphic Designer',
    photo: 'https://i.pinimg.com/736x/06/bf/ce/06bfcee508471313abbfe57b19c81e59.jpg',
    text:
      "This girl does everything he can to get the job done and done right. This is the second time I've hired her, and I'll hire her again in the future.",
  },
  
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)

