"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Sparkles, Gift, Star, Music, Camera, Flower2, Crown } from "lucide-react"

export default function EnhancedBirthdayCard() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [currentPage, setCurrentPage] = useState(0)
  const [showFinalMessage, setShowFinalMessage] = useState(false)

  const pages = [
    {
      title: "Happy Birthday! 🎉",
      content: "To the most amazing person in my life...",
      icon: Crown,
      color: "from-pink-400 to-purple-500"
    },
    {
      title: "You're Special ✨",
      content: "Every moment with you feels like magic. You make my world complete with your smile, your laugh, and your beautiful heart.",
      icon: Star,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "My Wish For You 🌟",
      content: "May your day be filled with joy, love, and all the happiness you bring to others. You deserve the world and more.",
      icon: Sparkles,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Forever & Always 💕",
      content: "I promise to love you more with each passing day. You're not just my love, you're my best friend, my soulmate, my everything.",
      icon: Heart,
      color: "from-rose-400 to-pink-500"
    }
  ]

  const openCard = () => {
    setShowEnvelope(false)
    setTimeout(() => {
      setIsCardOpen(true)
    }, 500)
  }

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1)
    } else {
      setShowFinalMessage(true)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[500px]">
      <AnimatePresence mode="wait">
        {showEnvelope && (
          <motion.div
            key="envelope"
            className="relative cursor-pointer"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={openCard}
          >
            {/* Envelope */}
            <div className="relative">
              <div className="w-80 h-56 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg shadow-xl border-2 border-pink-200 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                {/* Envelope flap */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-t-lg transform origin-bottom rotate-12 hover:rotate-0 transition-transform duration-300" />
                
                {/* Envelope content */}
                <div className="absolute inset-4 bg-white rounded-lg shadow-inner flex items-center justify-center">
                  <div className="text-center">
                    <Gift className="w-12 h-12 text-pink-500 mx-auto mb-2" />
                    <p className="text-lg font-semibold text-purple-700">Click to open your special card</p>
                    <p className="text-sm text-pink-600 mt-1">💌 A birthday surprise awaits!</p>
                  </div>
                </div>
              </div>
              
              {/* Floating hearts around envelope */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + (i % 2) * 80}%`,
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                >
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {isCardOpen && !showFinalMessage && (
          <motion.div
            key="card"
            className="relative w-full max-w-md"
            initial={{ scale: 0.8, rotateY: -90 }}
            animate={{ scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Card container */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-pink-200">
              {/* Card header with gradient */}
              <div className={`bg-gradient-to-r ${pages[currentPage].color} p-6 text-white text-center relative overflow-hidden`}>
                {/* Background sparkles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                  </motion.div>
                ))}
                
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {React.createElement(pages[currentPage].icon, { className: "w-12 h-12 mx-auto mb-3" })}
                  <h2 className="text-2xl font-bold">{pages[currentPage].title}</h2>
                </motion.div>
              </div>

              {/* Card content */}
              <div className="p-6 text-center">
                <motion.div
                  key={`content-${currentPage}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-[120px] flex items-center justify-center"
                >
                  <p className="text-purple-700 text-lg leading-relaxed">
                    {pages[currentPage].content}
                  </p>
                </motion.div>

                {/* Navigation buttons */}
                <div className="flex justify-between items-center mt-6">
                  <motion.button
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      currentPage === 0
                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:shadow-lg"
                    }`}
                    whileHover={currentPage > 0 ? { scale: 1.05 } : {}}
                    whileTap={currentPage > 0 ? { scale: 0.95 } : {}}
                  >
                    ← Previous
                  </motion.button>

                  <div className="flex gap-1">
                    {pages.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentPage
                            ? "bg-pink-500 scale-125"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextPage}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-pink-400 to-purple-400 text-white hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {currentPage === pages.length - 1 ? "Finish" : "Next >>"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {showFinalMessage && (
          <motion.div
            key="final"
            className="text-center max-w-md"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-8 text-white shadow-2xl">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Heart className="w-16 h-16 mx-auto mb-4 fill-white" />
              </motion.div>
              
              <h2 className="text-3xl font-bold mb-4">I Admire You Siri! 💖</h2>
              
              <p className="text-lg mb-6 leading-relaxed">
                Thank you for being the most wonderful person in my life. 
                Every day with you is a gift I cherish deeply.
              </p>
              
              <div className="flex justify-center gap-4 mb-6">
                {[Flower2, Music, Camera, Star].map((Icon, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -5, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                ))}
              </div>
              
              <p className="text-xl font-semibold">
                Happy Birthday, my love! 🎂✨
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 