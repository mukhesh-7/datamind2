import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, FileText, Settings, Sparkles } from 'lucide-react';
import { useStore } from '../store/useStore';
import Button from './ui/Button';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useStore();

  return (
    <header className="bg-dark-200 border-b border-dark-100 py-4 px-6 sticky top-0 z-10 backdrop-blur-sm bg-opacity-80">
      <div className="flex items-center justify-between">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center mr-3 shadow-glow">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-white flex items-center">
            DataMind
            <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-primary-500/20 text-primary-400 border border-primary-500/30 flex items-center">
              <Sparkles className="h-3 w-3 mr-1" />
              BETA
            </span>
          </h1>
        </motion.div>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="text-gray-400 hover:text-white"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button variant="primary" size="sm">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;