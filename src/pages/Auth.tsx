import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';

const Auth = () => {
  const location = useLocation();
  const isSignUp = location.pathname === '/signup';

  return (
    <div className="min-h-screen bg-[#FFF9F4] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0)]">
          <h2 className="text-3xl font-black mb-6">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </h2>
          <AuthForm type={isSignUp ? 'signup' : 'login'} />
          <p className="mt-4 text-center">
            {isSignUp ? (
              <>
                Already have an account?{' '}
                <Link to="/login" className="font-bold underline">
                  Login
                </Link>
              </>
            ) : (
              <>
                Need an account?{' '}
                <Link to="/signup" className="font-bold underline">
                  Sign Up
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;