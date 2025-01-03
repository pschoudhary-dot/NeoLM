import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useAuthStore } from '../lib/store';
import { Button } from './Button';

interface AuthFormProps {
  type: 'login' | 'signup';
}

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password123');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const setUser = useAuthStore((state) => state.setUser);

  const isSignUp = location.pathname === '/signup';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // For demo purposes, always succeed and redirect
      setUser({ 
        id: '123', 
        email: email,
        user_metadata: { name: name }
      });
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-100 border-4 border-black p-4 text-red-700">
          {error}
        </div>
      )}
      
      {isSignUp && (
        <div>
          <label className="block font-bold mb-2">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-4 border-black p-3"
            required={isSignUp}
          />
        </div>
      )}

      <div>
        <label className="block font-bold mb-2">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-4 border-black p-3"
          required
        />
      </div>

      <div>
        <label className="block font-bold mb-2">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-4 border-black p-3"
          required
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        {isSignUp ? 'Sign Up' : 'Login'}
      </Button>
    </form>
  );
};