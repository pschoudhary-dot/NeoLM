import React from 'react';
import { Settings, LogOut } from 'lucide-react';
import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';

export const Header = () => {
  const navigate = useNavigate();
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  return (
    <header className="border-b-4 border-black bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black">NotebookLM</h1>
        <div className="flex gap-4">
          <Button variant="outline" size="default">
            <Settings className="w-5 h-5" />
          </Button>
          <Button variant="outline" size="default" onClick={handleLogout}>
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};