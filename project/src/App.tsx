import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import FileUploader from './components/FileUploader';
import DocumentList from './components/DocumentList';
import DocumentViewer from './components/DocumentViewer';
import ChatInterface from './components/ChatInterface';
import AIModelSelector from './components/AIModelSelector';
import { useStore } from './store/useStore';

function App() {
  const { theme } = useStore();
  
  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Set dark mode by default
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-300 to-dark-500 text-gray-100">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-center mb-3 gradient-text">
            Document Management & AI Analysis
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Upload your documents, analyze them with AI, and get intelligent insights through our advanced summarization and chat features.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <FileUploader />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-dark-200 rounded-xl shadow-lg p-6 border border-dark-100">
              <h2 className="text-xl font-semibold mb-4 text-gray-100">Your Documents</h2>
              <DocumentList />
            </div>
            
            <div className="bg-dark-200 rounded-xl shadow-lg p-6 border border-dark-100">
              <AIModelSelector />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-1 gap-8"
          >
            <div className="h-[400px]">
              <DocumentViewer />
            </div>
            
            <div className="h-[500px]">
              <ChatInterface />
            </div>
          </motion.div>
        </div>
      </main>
      
      <footer className="bg-dark-300 border-t border-dark-100 py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 DataMind. All rights reserved.</p>
          <p className="mt-2">Secure document management with advanced AI capabilities.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;