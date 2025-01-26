import React from 'react';
import { motion } from 'framer-motion';

const message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
        HEY SHAWTYYYYYY
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
        i am so happy for you being with me. Youre the most amazing person i have met in 2024 and 
        will continue to be my favourite person untill we have 10 kids ATLEAST. Every moment with you is very special,
         every countlesss dates with you is very special, BELATED HAPPY BIRTHDAY KARISHMA, a bit late i know.
          You deserve to be celebrated every day. You are my heart, my soul, and the only reason for my smile.
           I LOVE YOU MORE THAN THE WORDS CAN EXPRESS.
          
          
          
        </p>
        <p className="text-lg text-pink-600 font-semibold">
        Happy birhtday my love! you dont look a day older.... wait how old are you again? ohh nevermind.. 
        you are ageless like a fine unexpired wine 
        </p>
      </motion.div>
    </div>
  );
};

export default message;