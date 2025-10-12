
import React from 'react';

const ProfilePhoto: React.FC = () => {
    return (
        <div className="w-full max-w-sm mx-auto md:max-w-xs lg:max-w-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <img
                src="https://storage.googleapis.com/aai-web-samples/rakshit-gogia-profile.jpg"
                alt="Rakshit Gogia in Yosemite"
                className="w-full h-full object-cover"
            />
        </div>
    );
};

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 py-8">
      <div className="flex-shrink-0 md:w-2/5">
        <ProfilePhoto />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl font-bold text-slate-800 tracking-tight mb-4">
          Hi, I'm Rakshit.
        </h2>
        <p className="text-slate-600 leading-relaxed text-lg max-w-xl mx-auto md:mx-0">
          I'm a builder and a problem solver, currently working on large-scale search and AI systems at Microsoft. Outside of tech, you can find me exploring nature's finest trails.
        </p>
      </div>
    </div>
  );
};

export default HomePage;