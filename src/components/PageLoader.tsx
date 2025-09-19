import { useEffect, useState } from 'react';

interface PageLoaderProps {
  isLoading: boolean;
}

const PageLoader = ({ isLoading }: PageLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return prev;
          return prev + Math.random() * 15;
        });
      }, 150);

      return () => clearInterval(timer);
    } else {
      setProgress(100);
      setTimeout(() => setProgress(0), 500);
    }
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center">
      {/* Loading Animation Container */}
      <div className="text-center space-y-8">
        
        {/* Brand Logo */}
        <div className="space-y-4">
          <h1 className="font-script text-5xl md:text-6xl font-bold text-primary animate-pulse">
            Karunya
          </h1>
          <p className="font-display text-xl text-muted-foreground">
            Loading...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 font-body">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-200"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-300"></div>
        </div>

        {/* Printing Press SVG Animation */}
        <div className="relative w-32 h-24 mx-auto">
          <svg 
            viewBox="0 0 120 90" 
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Printing Press Base */}
            <rect x="10" y="50" width="100" height="35" rx="4" 
              className="fill-primary/20 stroke-primary/40" strokeWidth="1"/>
            
            {/* Paper Feed */}
            <rect x="20" y="45" width="80" height="8" rx="2" 
              className="fill-card stroke-border" strokeWidth="1"/>
            
            {/* Printing Cylinders */}
            <circle cx="30" cy="35" r="8" 
              className="fill-accent/60 stroke-accent" strokeWidth="1">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 30 35"
                to="360 30 35"
                dur="2s"
                repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="35" r="8" 
              className="fill-primary/60 stroke-primary" strokeWidth="1">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 60 35"
                to="-360 60 35"
                dur="1.8s"
                repeatCount="indefinite"/>
            </circle>
            <circle cx="90" cy="35" r="8" 
              className="fill-accent/60 stroke-accent" strokeWidth="1">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                from="0 90 35"
                to="360 90 35"
                dur="2.2s"
                repeatCount="indefinite"/>
            </circle>
            
            {/* Moving Paper */}
            <rect x="15" y="47" width="12" height="4" rx="1" 
              className="fill-background stroke-border" strokeWidth="0.5">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                values="0,0; 78,0; 0,0"
                dur="3s"
                repeatCount="indefinite"/>
            </rect>
            
            {/* Ink Droplets */}
            <circle cx="30" cy="25" r="1.5" className="fill-primary animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="25" r="1.5" className="fill-accent animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="1.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="90" cy="25" r="1.5" className="fill-primary animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="0.8s" repeatCount="indefinite"/>
            </circle>
            
            {/* Control Panel */}
            <rect x="85" y="55" width="20" height="25" rx="2" 
              className="fill-muted stroke-border" strokeWidth="1"/>
            <circle cx="90" cy="62" r="2" className="fill-primary animate-pulse"/>
            <circle cx="100" cy="62" r="2" className="fill-accent animate-pulse delay-300"/>
            <rect x="87" y="68" width="16" height="2" className="fill-border"/>
            <rect x="87" y="72" width="16" height="2" className="fill-border"/>
          </svg>
        </div>

      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-primary rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default PageLoader;