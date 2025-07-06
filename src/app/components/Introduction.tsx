export default function Introduction() {
  return (
    <section className="container mx-auto px-4 py-16" id="home">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image */}
        <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
          <div className="relative">
            <video autoPlay loop muted playsInline className="h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[540px] lg:w-[540px] object-cover" height="540" width="540" poster="/static/cube-fallback.jpg" src="/static/cube.mp4"></video>
          </div>
        </div>

        {/* Content */}
        <div className="lg:w-1/2 space-y-6 order-1 lg:order-2 text-center lg:text-left w-full">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight hover:scale-105 transition-transform duration-300 cursor-pointer">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-purple-400 hover:to-pink-400 transition-all duration-500">Sarthak</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-300 font-mono hover:text-blue-400 hover:scale-105 transition-all duration-300 cursor-pointer">
              Full Stack Developer
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer w-full overflow-hidden">
              I build fast, clean, scalable websites and apps and lately, I&apos;ve been diving deep into the Web3 rabbit hole. Think smart contracts, dApps, tokens… all the buzzwords, minus the hype.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer w-full overflow-hidden">
              If it runs on the browser, phone, or blockchain, chances are I&apos;ve tinkered with it. Whether it&apos;s JavaScript, Dart, Solidity, or convincing my API to behave. I make ideas work (and look good while doing it).
            </p>
          </div>
          
          {/* Skills Conveyor Belt */}
          <div className="relative overflow-hidden bg-gray-900/50 rounded-lg p-2 sm:p-4">
            <div className="flex animate-scroll">
              {/* First set of skills */}
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-mono border border-blue-500/30 hover:bg-blue-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">React</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600/20 text-green-400 rounded-full text-xs sm:text-sm font-mono border border-green-500/30 hover:bg-green-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">Node.js</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-600/20 text-yellow-400 rounded-full text-xs sm:text-sm font-mono border border-yellow-500/30 hover:bg-yellow-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 cursor-pointer">JavaScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm font-mono border border-purple-500/30 hover:bg-purple-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer">TypeScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-xs sm:text-sm font-mono border border-cyan-500/30 hover:bg-cyan-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">Flutter</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-400/30 hover:bg-blue-500/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 cursor-pointer">Dart</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-teal-600/20 text-teal-400 rounded-full text-xs sm:text-sm font-mono border border-teal-500/30 hover:bg-teal-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer">Golang</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-600/20 text-orange-400 rounded-full text-xs sm:text-sm font-mono border border-orange-500/30 hover:bg-orange-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer">Java</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-700/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-600/30 hover:bg-blue-700/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 cursor-pointer">C</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-800/20 text-blue-200 rounded-full text-xs sm:text-sm font-mono border border-blue-700/30 hover:bg-blue-800/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 cursor-pointer">C++</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm font-mono border border-yellow-400/30 hover:bg-yellow-500/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 cursor-pointer">Solidity</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm font-mono border border-purple-400/30 hover:bg-purple-500/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 cursor-pointer">Solana</span>
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex gap-2 sm:gap-3 whitespace-nowrap">
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-600/20 text-blue-400 rounded-full text-xs sm:text-sm font-mono border border-blue-500/30 hover:bg-blue-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 cursor-pointer">React</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-600/20 text-green-400 rounded-full text-xs sm:text-sm font-mono border border-green-500/30 hover:bg-green-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 cursor-pointer">Node.js</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-600/20 text-yellow-400 rounded-full text-xs sm:text-sm font-mono border border-yellow-500/30 hover:bg-yellow-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 cursor-pointer">JavaScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-600/20 text-purple-400 rounded-full text-xs sm:text-sm font-mono border border-purple-500/30 hover:bg-purple-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer">TypeScript</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-cyan-600/20 text-cyan-400 rounded-full text-xs sm:text-sm font-mono border border-cyan-500/30 hover:bg-cyan-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer">Flutter</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-500/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-400/30 hover:bg-blue-500/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 transition-all duration-300 cursor-pointer">Dart</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-teal-600/20 text-teal-400 rounded-full text-xs sm:text-sm font-mono border border-teal-500/30 hover:bg-teal-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 cursor-pointer">Golang</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-orange-600/20 text-orange-400 rounded-full text-xs sm:text-sm font-mono border border-orange-500/30 hover:bg-orange-600/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 cursor-pointer">Java</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-700/20 text-blue-300 rounded-full text-xs sm:text-sm font-mono border border-blue-600/30 hover:bg-blue-700/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 cursor-pointer">C</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-blue-800/20 text-blue-200 rounded-full text-xs sm:text-sm font-mono border border-blue-700/30 hover:bg-blue-800/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-blue-700/50 transition-all duration-300 cursor-pointer">C++</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-xs sm:text-sm font-mono border border-yellow-400/30 hover:bg-yellow-500/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 cursor-pointer">Solidity</span>
                <span className="px-2 sm:px-4 py-1 sm:py-2 bg-purple-500/20 text-purple-300 rounded-full text-xs sm:text-sm font-mono border border-purple-400/30 hover:bg-purple-500/40 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-purple-400/50 transition-all duration-300 cursor-pointer">Solana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 