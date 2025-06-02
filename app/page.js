'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Poppins, Open_Sans } from 'next/font/google';

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

  const handleVote = async (vote) => {
  setVoteStatus(vote);
  try {
    await fetch('/api/vote', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ vote }),
    });
  } catch (err) {
    // Optionally handle error
    console.error('Failed to save vote:', err);
  }
};

  return (
    <div className={`${openSans.className} min-h-screen bg-red-600`}>
      {/* Top Bar */}
      <header className="w-full bg-white h-16 flex items-center justify-between px-8 shadow-sm" style={{ minHeight: '2cm' }}>
  <div className="flex items-center gap-4">
    <span className="inline-block w-8 h-8 bg-red-600 rounded-xl"></span>
    <div className={`text-2xl font-bold text-black ${poppins.className}`}>Fuckin Do It</div>
  </div>
  <nav className="flex space-x-8">
    <Link
      href="#how-it-works"
      className={`text-black font-semibold relative px-2 py-1 transition-colors duration-200 hover:text-red-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300`}
    >
      How It Works
    </Link>
    <Link
      href="#success-stories"
      className={`text-black font-semibold relative px-2 py-1 transition-colors duration-200 hover:text-red-600 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:duration-300`}
    >
      Success Stories
    </Link>
  </nav>
</header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-red-700 px-4 py-20">
        {/* STOP THIS BULLSHIT pill */}
        <div className="flex items-center justify-center mb-6">
          <span className="bg-white text-red-600 font-extrabold px-5 py-3 rounded-full text-sm shadow-sm flex items-center gap-3">
            <span role="img" aria-label="fire">🔥</span> STOP THIS BULLSHIT
          </span>
        </div>

        {/* Headline */}
        <h1 className={`text-5xl md:text-7xl font-extrabold text-white text-center mb-5 ${openSans.className}`}>
          TIRED OF BEING A <br/>
        <span className="text-7xl text-yellow-300">PROCRASTINATING LOSER?</span> 
        </h1>

        {/* Subheading */}
        <p className="text-white text-lg md:text-2xl text-center max-w-4xl mb-8">
          You keep saying &quot;I'll do it tomorrow&quot; but tomorrow never comes. Put your money where your mouth is or <span className="font-bold">SHUT UP</span> about your dreams forever.
        </p>

        {/* CTA Box */}
        <div className="bg-black/20 backdrop-blur-sm rounded-3xl shadow-lg p-8 max-w-2xl w-full flex flex-col items-center mb-8">
          <h2 className={`text-2xl md:text-2xl font-bold text-white text-center mb-6 ${poppins.className}`}>
            Are you ready to <span className="text-white-800">STOP procrastinating?</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <button
              className="flex-1 bg-green-600 hover:bg-green-800 text-white font-bold py-3 rounded-full text-lg transition-colors duration-200 shadow-md"
              onClick={() => handleVote('hell yeah')}
            >
              🔥 HELL YEAH!
            </button>
            <button
              className="flex-1 bg-white text-white font-bold py-3 rounded-full text-lg border border-red-300 transition-colors duration-200 shadow-md hover:text-red-600 flex items-center justify-center gap-2"
              onClick={() => handleVote('nah')}
            >
              <span role="img" aria-label="sleep" className="text-yellow-400">😴</span>
              Nah, I'll stay a loser forever
            </button>
          </div>
          {voteStatus === 'hell yeah' && (
            <p className="text-green-200 font-semibold mt-4">Let's go! 💪</p>
          )}
          {voteStatus === 'nah' && (
            <p className="text-red-200 font-semibold mt-4">At least you're honest! 😅</p> 
          )}
          
        </div>
        {/* Sound Familiar Section */}
<section className="w-full bg-[#0F172A] py-20 px-4 flex flex-col items-center">
  <h2 className="text-5xl font-extrabold text-white text-center mb-16">Sound Familiar?</h2>
  <div className="max-w-7xl w-full flex flex-col md:flex-row gap-8 justify-center mb-16">
    {/* Card 1 */}
    <div className="flex-1 bg-red-700 rounded-lg p-8 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-white text-center mb-4">"I'll Start Monday"</h3>
      <p className="text-white text-lg text-center">
        You've been saying this for 6 months. Every Monday becomes "next Monday." The gym membership collects dust, the business idea stays in your head.
      </p>
    </div>
    {/* Card 2 */}
    <div className="flex-1 bg-red-700 rounded-lg p-8 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-white text-center mb-4">"I Don't Have Time"</h3>
      <p className="text-white text-lg text-center">
        But you have 3 hours for Netflix & chill and endless Instagram scrolling. You have time, you just waste it on meaningless shit.
      </p>
    </div>
    {/* Card 3 */}
    <div className="flex-1 bg-red-700 rounded-lg p-8 flex flex-col items-center">
      <h3 className="text-2xl font-bold text-white text-center mb-4">"Tomorrow For Sure"</h3>
      <p className="text-white text-lg text-center">
        Your dreams die in the comfort zone. While you're making excuses, someone else is doing what you said you'd do.
      </p>
    </div>
  </div>
  <div className="text-center mt-8">
    <h4 className="text-3xl font-extrabold text-pink-300 mb-2">ENOUGH IS ENOUGH.</h4>
    <p className="text-xl text-blue-100">Your excuses are killing your potential. Time to put skin in the game.</p>
  </div>
</section>
{/* How We Stop Your Bullshit Section */}
<section
  id="how-it-works"
   className="w-full bg-white py-20 px-4 flex flex-col items-center" 
>
  <h2 className="text-3xl font-extrabold text-center mb-2 text-gray-900">How We Stop Your Bullshit</h2>
  <p className="text-base text-gray-700 text-center max-w-2xl mb-8">
    No more "motivation." No more "willpower." Just cold, hard financial consequences that actually work.
  </p>
  <div className="max-w-7xl w-full flex flex-col md:flex-row gap-6 justify-center items-start mb-8">
    {/* Step 1 */}
    <div className="flex-1 flex flex-col items-center">
      <span className="w-16 h-16 bg-blue-600 rounded-full mb-4 inline-block"></span>
      <h3 className="text-lg font-bold text-center mb-1 text-gray-900">1. Set Your Goal</h3>
      <p className="text-gray-700 text-center text-sm">
        No vague "get fit" bullshit. Specific, measurable goals with clear deadlines. We're talking real commitments.
      </p>
    </div>
    {/* Step 2 */}
    <div className="flex-1 flex flex-col items-center">
      <span className="w-16 h-16 bg-red-600 rounded-full mb-4 inline-block"></span>
      <h3 className="text-lg font-bold text-center mb-1 text-gray-900">2. Stake REAL Money</h3>
      <p className="text-gray-700 text-center text-sm">
        Put ₹1,000+ on the line. Make it hurt to fail. When your money's at risk, excuses disappear.
      </p>
    </div>
    {/* Step 3 */}
    <div className="flex-1 flex flex-col items-center">
      <span className="w-16 h-16 bg-yellow-400 rounded-full mb-4 inline-block"></span>
      <h3 className="text-lg font-bold text-center mb-1 text-gray-900">3. Prove It Or Lose It</h3>
      <p className="text-gray-700 text-center text-sm">
        Submit photo/video proof by deadline. No proof = we keep your money. No exceptions, no sob stories.
      </p>
    </div>
    {/* Step 4 */}
    <div className="flex-1 flex flex-col items-center">
      <span className="w-16 h-16 bg-green-600 rounded-full mb-4 inline-block"></span>
      <h3 className="text-lg font-bold text-center mb-1 text-gray-900">4. Win Or Learn</h3>
      <p className="text-gray-700 text-center text-sm">
        Complete your goal? Keep your money + feel like a champion. Fail? Money goes away. Either way, you grow.
      </p>
    </div>
  </div>
</section>

{/* Real People, Real Results Section */}
<section className="w-full bg-gray-50 py-10 px-4 flex flex-col items-center">
  <h2 className="text-5xl font-extrabold text-center mb-4 text-gray-900">Real People, Real Results</h2>
  <p className="text-xl text-gray-700 text-center max-w-3xl">
    These people stopped making excuses and started making progress. What's YOUR excuse?
  </p>
</section>
      </main>
    </div>
  );
}
