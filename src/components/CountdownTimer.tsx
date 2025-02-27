import React from 'react';
import Countdown from 'react-countdown';

const CountdownTimer: React.FC = () => {
  // Set the countdown to 24 hours from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 1);
  
  // Renderer for the countdown
  const renderer = ({ hours, minutes, seconds, completed }: { hours: number, minutes: number, seconds: number, completed: boolean }) => {
    if (completed) {
      return <span className="text-red-500 font-bold">Offer expired!</span>;
    }

    const timeUnits = [
      { value: hours, label: 'Hours' },
      { value: minutes, label: 'Minutes' },
      { value: seconds, label: 'Seconds' }
    ];

    return (
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h4 className="text-center text-gray-500 text-sm mb-4">Offer Ends In</h4>
        <div className="flex justify-center space-x-4">
          {timeUnits.map((unit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-blue-600 rounded-lg w-16 h-16 flex items-center justify-center mb-1">
                <span className="text-2xl font-bold text-white">
                  {String(unit.value).padStart(2, '0')}
                </span>
              </div>
              <span className="text-xs text-gray-500">{unit.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return <Countdown date={countdownDate} renderer={renderer} />;
};

export default CountdownTimer;