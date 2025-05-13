import React from 'react';

interface TermsSectionProps {
  title: string;
  content: React.ReactNode;
  icon: React.ReactNode;
}

const TermsSection: React.FC<TermsSectionProps> = ({ title, content, icon }) => {
  return (
    <section className="mb-8 bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-4 text-blue-500">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-3 font-poppins">{title}</h2>
          <div className="text-gray-700 font-poppins">{content}</div>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
