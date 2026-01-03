import React from 'react';

type StepCardProps = {
  title: string;
  description: string;
};

const StepCard: React.FC<StepCardProps> = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default StepCard;