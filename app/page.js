'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Poppins, Open_Sans } from 'next/font/google';
import SuccessStories from './SuccessStories/page'; // Assuming this component is also responsive

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});

export default function Home() {
  const [voteStatus, setVoteStatus] = useState(null);
  const [showSuccessStories, setShowSuccessStories] = useState(false);

  const handleVote = async (vote) => {
    setVoteStatus(vote);
    try {
      await fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vote }),
      });
    } catch (err) {
      console.error('Failed to save vote:', err);
    }
  };

  // Common class for nav links for DRYness, can be defined in globals.css @layer components too
  const navLinkClasses = "text-black font-semibold relative px-1 py-1 sm:px-2 transition-colors duration-200 hover:text-red-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300";


  return (
    <div className={`${openSans.className} min-h-screen bg-red-600`}>
      {/* Top Bar */}
      <header className="w-full bg-white h-16 sm:h-20 flex items-center justify-between px-4 sm:px-8 shadow-sm">
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="inline-block w-6 h-6 sm:w-8 sm:h-8 bg-red-600 rounded-lg sm:rounded-xl"></span>
          <div className={`text-xl sm:text-2xl font-bold text-black ${poppins.className}`}>Fuckin Do It</div>
        </div>
        <nav className="flex flex-col items-end sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-3 md:space-x-6">
          <Link href="#how-it-works" className={navLinkClasses}>
            How It Works
          </Link>
          <button
            onClick={() => setShowSuccessStories(true)}
            className={`${navLinkClasses} bg-transparent border-none outline-none`}
          >
            Success Stories
          </button>
        </nav>
      </header>

      {/* Main Section or Success Stories */}
      {showSuccessStories ? (
        <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-gray-50 px-4 py-10 sm:py-20">
          <button
            onClick={() => setShowSuccessStories(false)}
            className="mb-8 px-4 py-2 bg-red-600 text-white rounded-full font-bold hover:bg-red-700 transition text-sm sm:text-base"
          >
            ← Back
          </button>
          <SuccessStories />
        </main>
      ) : (
        <main className="flex flex-col items-center justify-start min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] bg-red-700 px-4 py-10 sm:py-12 md:py-20"> {/* Changed to justify-start, added more padding control */}
          {/* STOP THIS BULLSHIT pill */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <span className="bg-white text-red-600 font-extrabold px-4 py-2 sm:px-5 sm:py-3 rounded-full text-xs sm:text-sm shadow-sm flex items-center gap-2 sm:gap-3">
              <span role="img" aria-label="fire">🔥</span> STOP THIS BULLSHIT
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-4 sm:mb-5 ${openSans.className}`}>
            TIRED OF BEING A <br />
            <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-yellow-300">PROCRASTINATING LOSER?</span>
          </h1>

          {/* Subheading */}
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl mb-6 sm:mb-8">
            You keep saying &quot;I'll do it tomorrow&quot; but tomorrow never comes. Put your money where your mouth is or <span className="font-bold">SHUT UP</span> about your dreams forever.
          </p>

          {/* CTA Box */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 max-w-md md:max-w-2xl w-full flex flex-col items-center mb-8 sm:mb-12">
            <h2 className={`text-xl sm:text-2xl font-bold text-white text-center mb-4 sm:mb-6 ${poppins.className}`}>
              Are you ready to <span className="text-white">STOP procrastinating?</span> {/* Simpler white text for span */}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full justify-center">
              <button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-full text-base sm:text-lg transition-colors duration-200 shadow-md flex items-center justify-center gap-2"
                onClick={() => handleVote('hell yeah')}
              >
                <span role="img" aria-label="fire">🔥</span> HELL YEAH!
              </button>
              <button
                className="flex-1 bg-white text-gray-700 hover:bg-gray-200 hover:text-red-600 font-bold py-3 px-4 rounded-full text-base sm:text-lg border border-gray-300 transition-colors duration-200 shadow-md flex items-center justify-center gap-2" // Corrected text color for visibility
                onClick={() => handleVote('nah')}
              >
                <span role="img" aria-label="sleep" className="text-yellow-500">😴</span> {/* Adjusted emoji color if needed */}
                Nah, I'll stay a loser
              </button>
            </div>
            {voteStatus === 'hell yeah' && (
              <p className="text-green-200 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">Let's go! 💪</p>
            )}
            {voteStatus === 'nah' && (
              <p className="text-red-200 font-semibold mt-3 sm:mt-4 text-sm sm:text-base">At least you're honest! 😅</p>
            )}
          </div>

          {/* Sound Familiar Section */}
          <section className="w-full bg-[#0F172A] py-12 sm:py-16 md:py-20 px-4 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-10 sm:mb-12 md:mb-16">Sound Familiar?</h2>
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16"> {/* Changed to grid for better control */}
              {/* Card 1, 2, 3 - using common structure */}
              {[
                { title: "\"I'll Start Monday\"", text: "You've been saying this for 6 months. Every Monday becomes \"next Monday.\" The gym membership collects dust, the business idea stays in your head." },
                { title: "\"I Don't Have Time\"", text: "But you have 3 hours for Netflix & chill and endless Instagram scrolling. You have time, you just waste it on meaningless shit." },
                { title: "\"Tomorrow For Sure\"", text: "Your dreams die in the comfort zone. While you're making excuses, someone else is doing what you said you'd do." }
              ].map(card => (
                <div key={card.title} className="bg-red-700 rounded-lg p-6 sm:p-8 flex flex-col items-center text-center"> {/* Added text-center */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{card.title}</h3>
                  <p className="text-white text-sm sm:text-base md:text-lg">{card.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-4 sm:mt-8">
              <h4 className="text-2xl sm:text-3xl font-extrabold text-pink-300 mb-1 sm:mb-2">ENOUGH IS ENOUGH.</h4>
              <p className="text-lg sm:text-xl text-blue-100">Your excuses are killing your potential. Time to put skin in the game.</p>
            </div>
          </section>

          {/* How We Stop Your Bullshit Section */}
          <section
            id="how-it-works" // Ensure this ID is unique or handle scrolling appropriately
            className="w-full bg-white py-12 sm:py-16 md:py-20 px-4 flex flex-col items-center"
          >
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2 text-gray-900">How We Stop Your Bullshit</h2>
            <p className="text-sm sm:text-base text-gray-700 text-center max-w-md sm:max-w-lg md:max-w-2xl mb-8 sm:mb-10 md:mb-12">
              No more "motivation." No more "willpower." Just cold, hard financial consequences that actually work.
            </p>
            <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12"> {/* Changed to grid */}
              {[
                { title: "1. Set Your Goal", text: "No vague \"get fit\" bullshit. Specific, measurable goals with clear deadlines. We're talking real commitments.", color: "bg-blue-600" },
                { title: "2. Stake REAL Money", text: "Put ₹1,000+ on the line. Make it hurt to fail. When your money's at risk, excuses disappear.", color: "bg-red-600" },
                { title: "3. Prove It Or Lose It", text: "Submit photo/video proof by deadline. No proof = we keep your money. No exceptions, no sob stories.", color: "bg-yellow-400" },
                { title: "4. Win Or Learn", text: "Complete your goal? Keep your money + feel like a champion. Fail? Money goes away. Either way, you grow.", color: "bg-green-600" }
              ].map(step => (
                <div key={step.title} className="flex flex-col items-center text-center">
                  <span className={`w-12 h-12 sm:w-16 sm:h-16 ${step.color} rounded-full mb-3 sm:mb-4 inline-block`}></span>
                  <h3 className="text-base sm:text-lg font-bold mb-1 text-gray-900">{step.title}</h3>
                  <p className="text-gray-700 text-xs sm:text-sm">{step.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Real People, Real Results Section */}
          <section className="w-full bg-gray-50 py-10 sm:py-12 md:py-16 px-4 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-3 sm:mb-4 text-gray-900">Real People, Real Results</h2>
            <p className="text-lg sm:text-xl text-gray-700 text-center max-w-lg sm:max-w-xl md:max-w-3xl">
              These people stopped making excuses and started making progress. What's YOUR excuse?
            </p>
            {/* You would map through actual success stories here */}
          </section>
        </main>
      )}
    </div>
  );
}
