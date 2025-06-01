'use client';
import Link from 'next/link';
export default function SuccessStories() {
  const stories = [
    {
      name: "John D.",
      goal: "Learn React in 30 Days",
      stake: "$500",
      story: "Put my money where my mouth was. Completed 3 projects and got a job offer!"
    },
    // Add 11 more success stories here
  ];

  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Navigation */}
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#F8FAFC]">Success Stories</div>
          <Link href="/" className="text-[#F8FAFC] hover:text-[#22C55E] font-semibold transition-colors duration-300 hover:underline"> Home </Link>
        </div>
      </nav>

      {/* Success Stories Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-[#F8FAFC] font-semibold">User Name</h3>
                    <p className="text-[#22C55E]">₹1000 Stake</p>
                  </div>
                </div>
                <h4 className="text-[#F8FAFC] font-medium mb-2">Goal Achieved</h4>
                <p className="text-gray-400">
                  "Brief success story description goes here. Limited to 2-3 lines for consistency."
                </p>
                <div className="mt-4 text-[#22C55E] font-medium">
                  Completed in 30 Days ✅
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}