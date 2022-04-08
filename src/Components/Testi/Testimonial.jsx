import React from 'react'
import Gambar from "../../Images/background.jpg"

function Testimonial() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-black py-6 mb-9">Apa Kata Mereka?</h1>

      <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active relative float-left w-full">

            <div class="flex justify-center">
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-xl bg-white drop-shadow-xl">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Gambar} alt="" />
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

          </div>

          <div class="carousel-item relative float-left w-full">
            
            <div class="flex justify-center">
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

          </div>

          <div class="carousel-item relative float-left w-full">
            
            <div class="flex justify-center">
              <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg" alt="" />
                <div class="p-6 flex flex-col justify-start">
                  <h5 class="text-gray-900 text-xl font-medium mb-2">Card title</h5>
                  <p class="text-gray-700 text-base mb-4">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <p class="text-gray-600 text-xs">Last updated 3 mins ago</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Testimonial