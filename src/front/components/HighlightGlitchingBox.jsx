import { useEffect, useRef, useState } from 'react';

const GLITCH_GLYPHS = '!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const HighlightGlitchingBox = (/**@type{{words:Array<string>,onWordChange:(string)=>void}}*/{
  words = [],
  onWordChange,
  scrambleDuration = 600,
  intervalDelay = 3500
}) => {

  const [displayText, setDisplayText] = useState(words[0] ?? '');
  const [isGlitching, setIsGlitching] = useState(false);

  const currentIndexRef = useRef(0);

  useEffect(() => {
    if (!words.length) return;
    
    let frameId, timeoutId;

    const runScramble = () => {
      const nextIndex = (currentIndexRef.current + 1) % words.length;
      currentIndexRef.current = nextIndex;
      const targetWord = words[nextIndex];
      
      if (onWordChange) onWordChange(targetWord);
      
      setIsGlitching(true);
      const startTime = performance.now();

      const animate = (now) => {        
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / scrambleDuration, 1);

        if (progress < 1) {

          const revealedLength = Math.floor(progress * targetWord.length);
          const scrambled = targetWord
            .split('')
            .map((char, idx) => {
              if (char === ' ') return ' ';
              if (idx < revealedLength) return targetWord[idx];
              return GLITCH_GLYPHS[Math.floor(Math.random() * GLITCH_GLYPHS.length)];
            })
            .join('')
          ;
          setDisplayText(scrambled);
          frameId = requestAnimationFrame(animate);

        } else {

          setDisplayText(targetWord);
          setIsGlitching(false);
          
          const nextInterval = intervalDelay + (Math.random() * 2000 - 1000);
          timeoutId = setTimeout(runScramble, nextInterval);
          
        }
      };
      
      frameId = requestAnimationFrame(animate);
    };
    
    timeoutId = setTimeout(runScramble, intervalDelay);

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [words, scrambleDuration, intervalDelay]);
  
  return (
    <span className={["highlight-transparency-box", isGlitching && 'is-glitching'].filter(x=>x).join(" ")}>
      <span>{displayText}</span>
      <span>{displayText}</span>
    </span>
  );
};
export default HighlightGlitchingBox;