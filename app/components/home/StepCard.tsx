import React from 'react';

type StepCardProps = {
  title: string;
  description: string;
};

const StepCard: React.FC<StepCardProps> = ({ title, description }) => {
  return (
    <div
      className="group bg-gray-900 border border-gray-800 rounded-xl p-5
                 transition-all duration-300 hover:-translate-y-1
                 hover:shadow-xl hover:border-gray-700"
    >
      <h2
        className="text-lg font-semibold text-gray-100 mb-2
                   transition-colors duration-300
                   group-hover:text-gray-50"
      >
        {title}
      </h2>

      <p
        className="text-sm text-gray-400
                   transition-colors duration-300
                   group-hover:text-gray-300"
      >
        {description}
      </p>
    </div>
  );
};

export default StepCard;