import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { NotebookCard } from '../components/notebook/NotebookCard';
import { AddSourceModal } from '../components/notebook/AddSourceModal';
import { Button } from '../components/Button';
import { Grid, List, Plus } from 'lucide-react';

const COLORS = ['bg-yellow-200', 'bg-green-200', 'bg-blue-200', 'bg-pink-200'];

const Dashboard = () => {
  const [showAddSource, setShowAddSource] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-[#FFF9F4]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-black mb-4">Welcome to NotebookLM</h1>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">My Notebooks</h2>
              <Button onClick={() => setShowAddSource(true)}>
                <Plus className="w-5 h-5 mr-2" />
                Create new
              </Button>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              onClick={() => setViewMode('grid')}
            >
              <Grid className="w-5 h-5" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              onClick={() => setViewMode('list')}
            >
              <List className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'} gap-6`}>
          {[1, 2, 3].map((_, index) => (
            <NotebookCard
              key={index}
              title="Gemini 2.0 Flash Thinking Mode API"
              date="30 Dec 2024"
              sources={8}
              color={COLORS[index % COLORS.length]}
            />
          ))}
        </div>
      </main>

      {showAddSource && (
        <AddSourceModal onClose={() => setShowAddSource(false)} />
      )}
    </div>
  );
};

export default Dashboard;