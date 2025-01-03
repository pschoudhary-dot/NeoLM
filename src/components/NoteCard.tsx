import React from 'react';
import { motion } from 'framer-motion';

interface NoteCardProps {
  title: string;
  description: string;
  color: string;
  rotate?: number;
  children?: React.ReactNode;
}

const NoteCard: React.FC<NoteCardProps> = ({ 
  title, 
  description, 
  color, 
  rotate = 0,
  children 
}) => {
  return (
    <motion.div
      className={`${color} p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0)] overflow-hidden`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      {children}
    </motion.div>
  );
};

export default NoteCard;