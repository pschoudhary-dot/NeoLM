import React from 'react';
import { motion } from 'framer-motion';
import { FileText, MoreVertical } from 'lucide-react';

interface NotebookCardProps {
  title: string;
  date: string;
  sources: number;
  color: string;
}

export const NotebookCard: React.FC<NotebookCardProps> = ({
  title,
  date,
  sources,
  color,
}) => {
  return (
    <motion.div
      className={`${color} border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0)] 
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0)] transition-shadow cursor-pointer`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div className="flex justify-between items-start mb-4">
        <FileText className="w-8 h-8" />
        <button className="hover:bg-black/10 rounded-full p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-600">
        {date} - {sources} sources
      </p>
    </motion.div>
  );
};