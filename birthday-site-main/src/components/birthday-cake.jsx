"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, Flame, Wind } from "lucide-react"

export default function BirthdayCake({ onCakeComplete }) {
  const [candles, setCandles] = useState([1, 2, 3, 4, 5]) // 5 candles
  const [isBlowing, setIsBlowing] = useState(false)
  const [showBlowHint, setShowBlowHint] = useState(true)
  const [cakeGlow, setCakeGlow] = useState(false)

  useEffect(() => {
    if (candles.length === 0) {
      setTimeout(() => {
        onCakeComplete()
      }, 2000)
    }
  }, [candles, onCakeComplete])

  const blowCandle = (candleIndex) => {
    if (isBlowing) return
    
    setIsBlowing(true)
    setShowBlowHint(false)
    
    setTimeout(() => {
      setCandles(prev => prev.filter((_, index) => index !== candleIndex))
      setIsBlowing(false)
    }, 500)
  }

  const blowAllCandles = () => {
    if (isBlowing || candles.length === 0) return
    
    setIsBlowing(true)
    setShowBlowHint(false)
    
    setTimeout(() => {
      setCandles([])
      setIsBlowing(false)
    }, 800)
  }

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      {/* Birthday message */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold text-pink-600 mb-2">Make a Wish!</h2>
        <p className="text-purple-600">Blow out the candles to continue</p>
      </motion.div>

      {/* Cake container */}
      <motion.div
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 200, 
          damping: 15,
          delay: 0.3 
        }}
        className="relative"
      >
        {/* Cake base */}
        <div className="relative">
          {/* Cake layers */}
          <div className="relative">
            {/* Bottom layer */}
            <div className="w-64 h-16 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full shadow-lg border-2 border-pink-200" />
            
            {/* Middle layer */}
            <div className="w-48 h-12 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full shadow-lg border-2 border-purple-200 -mt-2 mx-8" />
            
            {/* Top layer */}
            <div className="w-32 h-10 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg border-2 border-pink-300 -mt-2 mx-16" />
          </div>

          {/* Cake decorations */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="flex gap-1">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-yellow-300 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>

          {/* Candles */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex gap-3">
            {candles.map((candle, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {/* Candle */}
                <div className="w-3 h-8 bg-gradient-to-b from-yellow-200 to-orange-300 rounded-full mx-auto shadow-md" />
                
                {/* Flame */}
                <motion.div
                  className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Flame className="w-4 h-4 text-orange-500 fill-orange-400" />
                </motion.div>

                {/* Click area for blowing */}
                <motion.button
                  onClick={() => blowCandle(index)}
                  className="absolute inset-0 w-8 h-12 cursor-pointer opacity-0 hover:opacity-20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Blow all candles button */}
          {candles.length > 0 && (
            <motion.button
              onClick={blowAllCandles}
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              <Wind className="w-4 h-4" />
              Blow All Candles
            </motion.button>
          )}
        </div>

        {/* Blowing animation */}
        <AnimatePresence>
          {isBlowing && (
            <motion.div
              className="absolute inset-0 flex justify-center items-center pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="text-6xl"
                initial={{ scale: 0, rotate: 0 }}
                animate={{ 
                  scale: [0, 2, 0],
                  rotate: [0, 360],
                  x: [0, -50, 0],
                  y: [0, -30, 0]
                }}
                transition={{ duration: 0.8 }}
              >
                💨
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Glow effect when all candles are blown */}
        <AnimatePresence>
          {candles.length === 0 && (
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: [0, 0.3, 0],
                scale: [0.8, 1.2, 1.5]
              }}
              transition={{ duration: 2 }}
            >
              <div className="w-full h-full bg-gradient-to-r from-yellow-200 to-pink-200 rounded-full blur-xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Blow hint */}
      <AnimatePresence>
        {showBlowHint && candles.length > 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 2 }}
          >
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <Wind className="w-4 h-4" />
              <span className="text-sm">Click on candles or use the button below to blow them out!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Success message when all candles are blown */}
      <AnimatePresence>
        {candles.length === 0 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 text-green-600 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Wish granted! ✨</span>
            </div>
            <p className="text-purple-600 text-sm">Your birthday card is ready!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 