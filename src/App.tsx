import React, { useState } from 'react';
import { Heart, PartyPopper, Gift, Coffee, Pizza, Cat, Dog, Gamepad2, Book, Popcorn } from 'lucide-react';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState('');

  const activities = [
    { icon: Coffee, text: "Treat yourself to a fancy coffee" },
    { icon: Pizza, text: "Order your favorite food" },
    { icon: Cat, text: "Cuddle with your pet" },
    { icon: Dog, text: "Go for a peaceful walk" },
    { icon: Gamepad2, text: "Play your favorite game" },
    { icon: Book, text: "Read that book you've been meaning to" },
    { icon: Popcorn, text: "Watch a non-romantic movie" }
  ];

  const getRandomActivity = () => {
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    setSelectedActivity(randomActivity.text);
    setShowMessage(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="h-10 w-10 text-white animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
            Celebrate Yourself This Valentine’s Day!
            </h1>
            <p className="text-xl text-pink-800 mb-8">
              Who needs a Valentine when you're this fabulous?
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-10 mb-12">
            <h2 className="text-3xl font-bold text-pink-900 mb-8 text-center">
             
            </h2>
            
            <button
              onClick={getRandomActivity}
              className="bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-4 px-10 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center mx-auto"
            >
              <PartyPopper className="mr-3 h-6 w-6" />
              Shower Yourself with Love!
            </button>

            {showMessage && (
              <div className="mt-8 p-6 bg-pink-50 rounded-xl">
                <p className="text-lg text-pink-900 mb-3">
                  Your self-love activity:
                </p>
                <p className="text-2xl font-bold text-red-600">
                  {selectedActivity}
                </p>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-pink-900">Treat Yourself</h3>
              <p className="text-lg text-pink-800 text-center">
                You deserve something special!
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-pink-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <PartyPopper className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center text-pink-900">Celebrate Freedom</h3>
              <p className="text-lg text-pink-800 text-center">
                Being single is awesome!
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl italic text-pink-900">
              "The most important relationship is the one you have with yourself."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;