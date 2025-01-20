import React, { useState, useEffect } from 'react';
import { Heart, MessageCircle, Shield, Sparkles, Mail, ArrowRight, Sun, Moon, Cloud } from 'lucide-react';
import { ChatInterface } from './components/ChatInterface';

function App() {
  const [showChat, setShowChat] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 hover-scale">
            <Heart className="w-8 h-8 text-indigo-600 animate-float" />
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-all hover:-translate-y-1">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-all hover:-translate-y-1">How it Works</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-all hover:-translate-y-1">Contact</a>
            <button 
              onClick={() => setShowChat(true)}
              className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              Start Chat
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 opacity-20 animate-float" style={{animationDelay: '0s'}}>
            <Sun className="w-16 h-16 text-indigo-400" />
          </div>
          <div className="absolute top-40 right-20 opacity-20 animate-float" style={{animationDelay: '1s'}}>
            <Moon className="w-12 h-12 text-indigo-300" />
          </div>
          <div className="absolute bottom-20 left-1/4 opacity-20 animate-float" style={{animationDelay: '2s'}}>
            <Cloud className="w-20 h-20 text-indigo-200" />
          </div>
        </div>
        <div className="container mx-auto text-center relative">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6">
              Your AI Companion for Mental Wellness
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience compassionate, AI-powered mental health support available 24/7. 
              Your journey to emotional well-being starts here.
            </p>
            <button 
              onClick={() => setShowChat(true)}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 mx-auto"
            >
              Begin Your Journey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Why Choose CalmSphereAI</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageCircle className="w-8 h-8 text-indigo-600" />}
              title="24/7 Support"
              description="Access therapeutic conversations whenever you need them, day or night."
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8 text-indigo-600" />}
              title="Private & Secure"
              description="Your conversations are completely private and protected with enterprise-grade encryption."
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-indigo-600" />}
              title="AI-Powered Insights"
              description="Receive personalized support and coping strategies based on your unique situation."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <Step number={1} title="Start a Conversation" 
                description="Begin chatting with our AI therapist in a safe, judgment-free environment." />
              <Step number={2} title="Share Your Thoughts" 
                description="Express your feelings and concerns openly with our empathetic AI companion." />
              <Step number={3} title="Receive Support" 
                description="Get personalized guidance, coping strategies, and emotional support." />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">Have questions? We're here to help.</p>
          <a href="mailto:info@calmsphere.tech" 
             className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 transition-all hover:-translate-y-1">
            <Mail className="w-5 h-5" />
            info@calmsphere.tech
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="gradient-bg text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0 hover-scale">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-semibold">CalmSphereAI</span>
            </div>
            <div className="text-sm text-indigo-200">
              © {new Date().getFullYear()} CalmSphereAI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Chat Interface */}
      {showChat && <ChatInterface onClose={() => setShowChat(false)} />}
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-indigo-50 rounded-xl hover-scale">
      <div className="mb-4 animate-float">{icon}</div>
      <h3 className="text-xl font-semibold text-indigo-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Step({ number, title, description }) {
  return (
    <div className="flex gap-4 hover-scale">
      <div className="flex-shrink-0 w-8 h-8 bg-white text-indigo-600 rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-indigo-100">{description}</p>
      </div>
    </div>
  );
}

export default App;