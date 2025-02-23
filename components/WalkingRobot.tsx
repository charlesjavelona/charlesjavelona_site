import React, { useState, useEffect } from 'react';

interface Robot {
  id: number;
  y: number;
}

const WalkingRobot: React.FC = () => {
  const [robots, setRobots] = useState<Robot[]>([]);

  useEffect(() => {
    const createRobot = () => {
      const id = Math.random();
      const y = Math.random() * (window.innerHeight - 200) + 100;

      setRobots(prev => [...prev, { id, y }]);

      setTimeout(() => {
        setRobots(prev => prev.filter(robot => robot.id !== id));
      }, 4000);
    };

    createRobot();
    const interval = setInterval(createRobot, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {robots.map(robot => (
        <div
          key={robot.id}
          className="absolute animate-walk"
          style={{ top: `${robot.y}px` }}
        >
          <svg width="100" height="120" viewBox="0 0 100 120">
            {/* Body */}
            <rect x="30" y="30" width="40" height="50" fill="#4B5563" rx="5" className="animate-body" />
            
            {/* Head */}
            <rect x="35" y="10" width="30" height="25" fill="#6B7280" rx="5" />
            
            {/* Eyes */}
            <circle cx="45" cy="22" r="3" fill="#10B981" className="animate-blink" />
            <circle cx="55" cy="22" r="3" fill="#10B981" className="animate-blink" />
            
            {/* Antenna */}
            <line x1="50" y1="10" x2="50" y2="0" stroke="#9CA3AF" strokeWidth="2" />
            <circle cx="50" cy="0" r="3" fill="#10B981" className="animate-pulse" />
            
            {/* Arms */}
            <rect x="15" y="35" width="15" height="8" fill="#6B7280" rx="2" className="animate-leftArm" />
            <rect x="70" y="35" width="15" height="8" fill="#6B7280" rx="2" className="animate-rightArm" />
            
            {/* Legs */}
            <rect x="35" y="80" width="8" height="25" fill="#6B7280" rx="2" className="animate-leftLeg origin-top" />
            <rect x="57" y="80" width="8" height="25" fill="#6B7280" rx="2" className="animate-rightLeg origin-top" />
            
            {/* Feet */}
            <rect x="32" y="100" width="14" height="8" fill="#4B5563" rx="2" className="animate-leftFoot" />
            <rect x="54" y="100" width="14" height="8" fill="#4B5563" rx="2" className="animate-rightFoot" />
          </svg>
          
          {/* Digital trail effect */}
          <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-cyan-500/20 to-transparent" />
        </div>
      ))}
      
      <style jsx>{`
        @keyframes walk {
          0% {
            left: -100px;
            transform: scaleX(1);
          }
          46% {
            transform: scaleX(1);
          }
          49% {
            left: calc(50% - 50px);
            transform: scaleX(1);
          }
          50% {
            left: calc(50% - 50px);
            transform: scaleX(-1);
          }
          51% {
            left: calc(50% - 50px);
            transform: scaleX(-1);
          }
          100% {
            left: calc(100% + 100px);
            transform: scaleX(-1);
          }
        }

        @keyframes leftLeg {
          0%, 100% { transform: rotate(-20deg); }
          50% { transform: rotate(20deg); }
        }

        @keyframes rightLeg {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(-20deg); }
        }

        @keyframes body {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }

        @keyframes arms {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-15deg); }
        }

        @keyframes blink {
          0%, 96%, 100% { opacity: 1; }
          98% { opacity: 0; }
        }

        .animate-walk {
          animation: walk 4s linear forwards;
        }

        .animate-leftLeg {
          animation: leftLeg 0.5s infinite;
        }

        .animate-rightLeg {
          animation: rightLeg 0.5s infinite;
        }

        .animate-body {
          animation: body 0.5s infinite;
        }

        .animate-leftArm {
          animation: arms 0.5s infinite;
        }

        .animate-rightArm {
          animation: arms 0.5s infinite reverse;
        }

        .animate-blink {
          animation: blink 3s infinite;
        }
      `}</style>
    </div>
  );
};

export default WalkingRobot;