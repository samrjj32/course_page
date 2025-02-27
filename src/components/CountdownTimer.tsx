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
    } else {
      return (
        <div className="flex justify-center">
          <div className="flex space-x-4">
            <div className="bg-gray-800 text-white p-3 rounded-lg">
              <span className="text-2xl font-bold">{hours.toString().padStart(2, '0')}</span>
              <p className="text-xs mt-1">HOURS</p>
            </div>
            <div className="bg-gray-800 text-white p-3 rounded-lg">
              <span className="text-2xl font-bold">{minutes.toString().padStart(2, '0')}</span>
              <p className="text-xs mt-1">MINUTES</p>
            </div>
            <div className="bg-gray-800 text-white p-3 rounded-lg">
              <span className="text-2xl font-bold">{seconds.toString().padStart(2, '0')}</span>
              <p className="text-xs mt-1">SECONDS</p>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mb-6">
      <p className="text-lg font-semibold mb-2">Limited Time Offer Ends In:</p>
      <Countdown date={countdownDate} renderer={renderer} />
    </div>
  );
};

export default CountdownTimer;