import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, FileText, Link as LinkIcon, Music, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import NoteCard from '../components/NoteCard';

const COLORS = [
  'bg-yellow-200',
  'bg-green-200',
  'bg-blue-200',
  'bg-pink-200',
  'bg-purple-200',
  'bg-orange-200'
];

const ROTATIONS = [-3, -2, -1, 0, 1, 2, 3];

const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];
const getRandomRotation = () => ROTATIONS[Math.floor(Math.random() * ROTATIONS.length)];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF9F4]">
      <nav className="border-b-4 border-black bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-black"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            NeoLM
          </motion.h1>
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl font-black mb-6">
              Your AI Document Assistant
            </h1>
            <p className="text-xl mb-8">
              Upload documents, videos, links or audio files and start having intelligent conversations about your content.
            </p>  
            <Button size="lg" asChild className="animate-bounce">
              <Link to="/signup">Get Started Free</Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <NoteCard
              title="Document Processing"
              description="Upload PDFs, Word docs, and text files for instant analysis"
              color={getRandomColor()}
              rotate={getRandomRotation()}
            >
              <FileText className="w-12 h-12" />
            </NoteCard>

            <NoteCard
              title="Web Links"
              description="Extract and analyze content from any web URL"
              color={getRandomColor()}
              rotate={getRandomRotation()}
            >
              <LinkIcon className="w-12 h-12" />
            </NoteCard>

            <NoteCard
              title="Video Analysis"
              description="Extract insights from video content and transcripts"
              color={getRandomColor()}
              rotate={getRandomRotation()}
            >
              <Video className="w-12 h-12" />
            </NoteCard>

            <NoteCard
              title="Audio Processing"
              description="Convert speech to text and analyze audio content"
              color={getRandomColor()}
              rotate={getRandomRotation()}
            >
              <Music className="w-12 h-12" />
            </NoteCard>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;