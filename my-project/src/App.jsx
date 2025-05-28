import './App.css'
import Navbar from './Navbar.jsx'

function App() {
  return (
    <div class="flex flex-col h-screen">
      <Navbar />
      
      <div class='flex flex-col flex-grow bg-gradient-to-r from-purple-950/40 to-purple-1000 p-14'>
        <h1 class='text-4xl font-medium'>
          Hello!
        </h1>
        <p class='text-2xl pt-10 text-purple-200'>
          I'm Ryan Chen, currently a CS student. I'm interested in data science, machine learning, software development, and statistics. I have used, in some capacity, <span class='text-[#4584b6]'>Python</span>, 
          <span class='text-[#adbacd]'> C</span>, <span class='text-[#2468bb]'> R</span>, <span class='text-[#ed8b00]'> Java</span>, <span class='text-[#f7e025]'> JavaScript</span>, <span class='text-[#e54c21]'> HTML</span>, 
          <span class='text-[#1572b6]'> CSS</span>, and <span class='text-[#5dbacf]'> React</span>.  
        </p>

        {/* <button class='bg-purple-950/70 rounded-lg w-30 h-10 mt-10 text-2xl text-purple-100 hover:bg-purple-900/50 transition duration-150 ease-in-out self-center'>
            <a href='https://www.google.com'>
              Resume
            </a>
        </button>
        */}

        <h1 class='text-3xl font-medium pt-14 underline'>
          Projects
        </h1>

        <div class='grid grid-cols-2 pt-10 max-w-400 gap-10'>
          <div class=" rounded-lg p-6 bg-gradient-to-r from-purple-900/40 to-purple-950/40">
            <h2 class='text-2xl font-medium' >
              <a href='type.tigerapps.org' class='underline'> 
                TigerType 
              </a>
            </h2>
            <p class='text-lg pt-2 text-purple-200'>
              A typing web app where Princeton students can type snippets to increase their speed, publicly race other students, and host private lobbies with friends. Features WPM tracking, leaderboards, additional statistics, 
              and achievements. Mostly worked on the frontend using React, JavaScript, and HTML/CSS. Additionally worked on a few API endpoints using PostgreSQL, Express.js, and Node.js.
            </p>
          </div>

          {/* <div class=" rounded-lg p-6 bg-gradient-to-r from-purple-900/40 to-purple-950/40">
            <p class='text-lg pt-2 text-purple-200 text-center'>
              More to come...
            </p>
          </div>
          */}

        </div>
      </div>
    </div>
  )
}

export default App;
