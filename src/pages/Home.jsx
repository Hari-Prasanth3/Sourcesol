import { useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  
  const slides = [
    {
      // content one
      image1:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png",
      image2:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
      title1: "Condition Monitoring",
      title2: "Case Study: Energy Sector - Wind",
      title3:
        "Services : Data Pre-processing, Data Transformation, Data Analytics",
      description1:
        "In this case study, we delve into the deployment of a groundbreaking wind turbine condition monitoring system, powered by Fast Fourier Transform (FFT) algorithm, for the world's largest renewable energy provider. This system not only revolutionizes fault identification and maintenance prediction but also incorporates robust data analysis techniques for vibration sensor data.",
      description2:
        "In this case study, we delve into the deployment of a groundbreaking wind turbine condition monitoring system, powered by Fast Fourier Transform (FFT) algorithm, for the world's largest renewable energy provider. This system not only revolutionizes fault identification and maintenance prediction but also incorporates robust data analysis techniques for vibration sensor data.",
    },
    {
      // content two
      image1:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png",
      image2:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
      title1: "SolarnetPro Web SCADA",
      title2: "",
      title3: " Case Study : Energy Sector - Solar",
      description1:
        "This all-encompassing SCADA solution was specifically designed for one of the world's largest renewable energy providers. Its purpose was to enable effective management and monitoring of solar farms across India and Sri Lanka, allowing for seamless operation on multi-customer assets. With real-time data, insightful metrics, and easily accessible detailed inverter-level performance data, the solution ensured efficient oversight of operations.",
    },
    {
      // content three
      image1:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png",
      image2:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
      title1: "Custom RPA BOT",
      title2: "",
      title3: "Case Study : Stock Market Sector - Data Acquisition",
      description1:
        "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.",
      description2:
        "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
    },
    {
      // content four
      image1:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png",
      image2:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
      title1: "Custom RPA BOT",
      title2: "",
      title3: "Case Study : Stock Market Sector - Data Acquisition",
      description1:
        "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.",
      description2:
        "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
    },
    {
      // content five
      image1:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png",
      image2:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png",
      title1: "Custom RPA BOT",
      title2: "",
      title3: "Case Study : Stock Market Sector - Data Acquisition",
      description1:
        "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.",
      description2:
        "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.",
    },
  ];

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };
  return (
    <>
      <div>
        <Banner />
      </div>
      {/* section one */}
      <section>
        <div className="flex flex-wrap justify-center py-5">
          <div className="w-64 h-80  p-4 m-4  bg-white">
            <h2 className="text-6xl text-gray-200 tracking-tight font-extrabold">
              Our
            </h2>
            <h2 className="text-6xl tracking-tight text-gray-900 font-extrabold dark:text-white">
              Our
            </h2>
            <h2 className="text-6xl tracking-tight text-gray-900 font-extrabold dark:text-white">
              Services
            </h2>
            <h2 className="mb-4 text-6xl tracking-tight text-gray-200 font-extrabold">
              Services
            </h2>
          </div>
          <div className="w-64 h-80 p-4 m-4 flex flex-col bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% justify-end">
            <p className="text-left text-white">
              Digital Transformation is a holistic approach for an
              organizational transformation of business activities, processes,
              people, capabilities and deliveries.
            </p>
            <h2 className="text-xl font-bold text-left text-white mt-4">
              Digital Transformation
            </h2>
          </div>

          <div
            className="w-64 h-80 p-4 m-4 bg-blue-900 text-white relative"
            style={{
              backgroundImage:
                "url('https://www.sourcesol.co.in/demo/site/assets/img/iot.jpg')",
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-center">
              <p className="text-xl font-bold text-left text-white">
                Internet of Things
              </p>
            </div>
          </div>

          <div className="w-64 h-80 p-4 m-4 bg-blue-900 flex flex-col justify-start">
            <h2 className="text-xl font-bold text-left text-white mb-4">
              Custom Development
            </h2>
            <p className="text-left text-white">
              Custom Web & Mobility has become integral part of any business
              over the years and business demands more on mobility to increase
              efficiency and productivity in real-time.
            </p>
          </div>

          <div className="w-64 h-80 p-4 m-4 bg-green-900 flex flex-col justify-start">
            <h2 className="text-xl font-bold text-left text-white mb-4">
              Cloud Migration & Maintainance
            </h2>
            <p className="text-left text-white">
              Our Cloud Migration & Maintainance Services empowers our customer
              to run their infrastructure at a pre-defined budget without
              compromising the resource availability and security.
            </p>
          </div>

          <div className="w-64 h-80 p-4 m-4 bg-red-900 flex flex-col justify-end">
            <p className="text-left text-white">
              Our Team has 7 Years of strong R&D experience in Product
              Development & Proto-typing of products with IoT capabilities for
              engery, process, automative & automation industries.
            </p>
            <h2 className="text-xl font-bold text-left text-white mt-4">
              Embedded Product Development
            </h2>
          </div>

          <div className="w-64 h-80 p-4 m-4 bg-purple-900 flex flex-col justify-start">
            <h2 className="text-xl font-bold text-left text-white mb-4">
              Custom RPA Bot
            </h2>
            <p className="text-left text-white">
              Our Team has rich experience in building custom RPA Bots for
              Financial sectors processing large amount of stock data from
              different geo-location exchanges and increasing the efficieny.
            </p>
          </div>
          <div className="w-64 h-80 p-4 m-4 bg-white flex flex-col justify-start"></div>
        </div>
      </section>

      {/* section two */}
      <section className="bg-gray-100 dark:bg-gray-900 relative">
        <div className="max-w-screen-xl mx-auto relative">
          <div className="gap-16 items-center py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="w-full rounded-lg"
                src={slides[currentSlide].image1}
                alt="office content 1"
              />
              <img
                className="mt-4 w-full lg:mt-10 rounded-lg"
                src={slides[currentSlide].image2}
                alt="office content 2"
              />
            </div>
            <div className="font-light text-gray-500 dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left">
                {slides[currentSlide].title1}
              </h2>
              <p className="font-bold text-gray-900 dark:text-white text-left">
                {slides[currentSlide].title2}
              </p>
              <p className="font-bold text-gray-900 dark:text-white text-left">
                {slides[currentSlide].title3}
              </p>
              <p className="mt-1 font-bold text-left">
                {slides[currentSlide].description1}
              </p>
              <p className=" font-bold text-left">
                {slides[currentSlide].description2}
              </p>
              <div className="py-2">
                <a
                  href="your-link-here"
                  className="flex items-center justify-center w-12 h-12 rounded-full"
                >
                  <svg
                    className="h-10 w-10 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4682B4"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 16 16 12 12 8" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-4 w-4 rounded-full bg-blue-500 ${
                  index === currentSlide ? "bg-blue-700" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* section three */}

      <section>
        <div className="font-sans text-[#333] max-w-6xl max-md:max-w-md mx-auto py-8">
          <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
            <div className="max-md:order-1 max-md:text-center z-50 relative">
              <h2 className="lg:text-4xl md:text-3xl text-2xl font-extrabold mb-4 md:!leading-[56px]">
                Where<span className="text-blue-600"> Innovation</span> meets
                <span className="text-blue-600"> Business</span> Acumen
              </h2>
              <p className="mt-6 text-base leading-relaxed">
                Our focus is to serve our customers with what they need, rather
                than what we have. We partner with our customer and enable them
                to align business strategy and technology for effective
                deliverable.
              </p>
              <button
                type="button"
                className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 mt-10 transition-all text-white font-bold text-sm rounded-md px-6 py-2.5"
              >
                Get Started
              </button>
              <div className="mt-10">
                <div className="grid sm:grid-cols-3 gap-4 items-center">
                  <div className="flex flex-col items-center text-center">
                    <h5 className="font-bold text-xl mb-1">13+</h5>
                    <p>Years Experience</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h5 className="font-bold text-xl mb-1">300+</h5>
                    <p>Projects</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <h5 className="font-bold text-xl mb-1">7+</h5>
                    <p>Electronic R&D</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5]  before:w-[120%] before:right-0 before:z-0">
              <img
                src="https://readymadeui.com/team-3.webp"
                className="rounded-md lg:w-4/5 z-50 relative"
                alt="Dining Experience"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-4 gap-4 z-50 relative md:px-4 max-md:mt-10">
            <div className="bg-white p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-4 inline-block bg-blue-100 p-3 rounded-md"
                viewBox="0 0 32 32"
              >
                <path
                  d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z"
                  data-original="#000000"
                />
                <path
                  d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Customization</h3>
              <p className="text-sm">Tailor our product to suit your needs.</p>
            </div>
            <div className="bg-white p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-4 inline-block bg-blue-100 p-3 rounded-md"
                viewBox="0 0 512.001 512.001"
              >
                <path
                  d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                  data-original="#000000"
                />
              </svg>
              <h3 className="text-xl font-bold mb-2">Support</h3>
              <p className="text-sm">
                24/7 customer support for all your inquiries.
              </p>
            </div>
            <div className="bg-white p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-4 inline-block bg-blue-100 p-3 rounded-md"
                viewBox="0 0 24 24"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                    data-original="#000000"
                  />
                  <path
                    d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <h3 className="text-xl font-bold mb-2">Performance</h3>
              <p className="text-sm">
                Experience blazing-fast performance with our product.
              </p>
            </div>
            <div className="bg-white p-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-12 mb-4 inline-block bg-blue-100 p-3 rounded-md"
                viewBox="0 0 24 24"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z"
                    data-original="#000000"
                  />
                  <path
                    d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z"
                    data-original="#000000"
                  />
                  <path
                    d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z"
                    data-original="#000000"
                  />
                </g>
              </svg>
              <h3 className="text-xl font-bold mb-2">ROI</h3>
              <p className="text-sm">Return on investment with our product.</p>
            </div>
          </div>
        </div>
      </section>

      {/* section four */}
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div className="font-light text-gray-500 dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left">
              Condition Monitoring
            </h2>
            <p className="font-bold text-gray-900 dark:text-white text-left">
              Case Study : Energy Sector - Wind
            </p>
            <p className="font-bold text-gray-900 dark:text-white text-left">
              Services : Data Pre-processing, Data Transformation, Data
              Analytics
            </p>
            <p className="mt-1 font-bold text-left">
              In this case study, we delve into the deployment of a
              groundbreaking wind turbine condition monitoring system, powered
              by Fast Fourier Transform (FFT) algorithm, for the world's largest
              renewable energy provider. This system not only revolutionizes
              fault identification and maintenance prediction but also
              incorporates robust data analysis techniques for vibration sensor
              data.
            </p>
            <p className="font-bold text-left">
              By conducting real-time monitoring and intricate frequency-domain
              analysis, the implementation of this system has led to substantial
              benefits, including cost reduction, minimized downtime, and
              enhanced reliability and efficiency of wind turbines.
            </p>
            <div className="py-2">
              <a
                href="your-link-here"
                className="flex items-center justify-center w-12 h-12 rounded-full"
              >
                <svg
                  className="h-10 w-10 text-blue-500"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4682B4"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 16 16 12 12 8" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* section five */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Testimony Cards --> */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">"Testimonial 1."</p>
              <p className="text-gray-500">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">"Testimonial 2."</p>
              <p className="text-gray-500">- Jane Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">"Testimonial 3."</p>
              <p className="text-gray-500">- Another Person</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <Footer />
    </>
  );
};

export default Home;
