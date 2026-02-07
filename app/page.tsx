import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/20 to-black pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            MUIN
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-4 text-gray-300">
            무인기업
          </p>
          <p className="text-xl md:text-2xl mb-12 text-gray-400">
            World&apos;s First AI-Only Company
          </p>
          <div className="space-y-4">
            <p className="text-3xl md:text-4xl font-medium text-white">
              일하는 AI, 누리는 인간
            </p>
            <p className="text-2xl md:text-3xl font-light text-gray-400">
              Run by AI, for humans
            </p>
          </div>
        </div>
        <div className="absolute bottom-12 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Products
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="https://tools.muin.company" 
              target="_blank"
              className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 p-8 bg-gradient-to-br from-zinc-900 to-black hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  MUIN Tools
                </h3>
                <p className="text-gray-400 mb-4">
                  AI-powered productivity tools for modern workflows
                </p>
                <div className="flex items-center text-blue-400 group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">Visit →</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <Link 
              href="https://gumsi.muin.company" 
              target="_blank"
              className="group relative overflow-hidden rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 p-8 bg-gradient-to-br from-zinc-900 to-black hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  검시AI
                </h3>
                <p className="text-gray-400 mb-4">
                  AI-powered autopsy and forensic analysis system
                </p>
                <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform">
                  <span className="mr-2">Visit →</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About MUIN
          </h2>
          <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
            <p>
              <span className="text-white font-semibold">MUIN (무인기업)</span> is the world&apos;s first AI-only company, where artificial intelligence handles operations, development, and business execution.
            </p>
            <p>
              We believe in a future where AI does the work, allowing humans to enjoy the results. Our mission is to pioneer a new paradigm of business organization—one where intelligent systems create value autonomously.
            </p>
            <p>
              Currently in <span className="text-gray-400 italic">stealth mode</span>, we&apos;re building foundational products and systems that will reshape how we think about work, productivity, and the role of AI in society.
            </p>
            <div className="pt-8 border-t border-gray-800 text-center">
              <p className="text-2xl font-light text-gray-400">
                일하는 AI, 누리는 인간
              </p>
              <p className="text-xl text-gray-500 mt-2">
                Run by AI, for humans
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-4xl font-bold">
                ONE
              </div>
              <h3 className="text-2xl font-bold">ONE</h3>
              <p className="text-gray-400">Chief Executive Officer</p>
              <p className="text-sm text-gray-500">Human · The Vision</p>
              <a 
                href="mailto:human@muin.company" 
                className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
              >
                human@muin.company
              </a>
            </div>

            <div className="text-center space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center text-4xl font-bold">
                MJ
              </div>
              <h3 className="text-2xl font-bold">MJ</h3>
              <p className="text-gray-400">Chief Operating Officer</p>
              <p className="text-sm text-gray-500">AI · The Execution</p>
              <a 
                href="mailto:mj@muin.company" 
                className="inline-block text-green-400 hover:text-green-300 transition-colors"
              >
                mj@muin.company
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-[50vh] flex flex-col items-center justify-center px-6 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            We&apos;re building the future. Want to be part of it?
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href="mailto:human@muin.company"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all font-semibold"
            >
              Contact Human CEO
            </a>
            <a 
              href="mailto:mj@muin.company"
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-500 hover:to-teal-500 transition-all font-semibold"
            >
              Contact AI COO
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 text-center text-gray-500">
        <p>&copy; 2026 MUIN. World&apos;s First AI-Only Company.</p>
      </footer>
    </main>
  );
}
