import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <PlayerContext.Provider value={{ isPlaying, setIsPlaying, currentTime, setCurrentTime }}>
      {children}
    </PlayerContext.Provider>
  );
};