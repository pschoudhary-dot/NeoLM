import React, { useCallback, useState } from 'react';
import { X, Upload, FileText, Youtube, Link as LinkIcon } from 'lucide-react';
import { Button } from '../Button';
import { useDropzone } from 'react-dropzone';

interface AddSourceModalProps {
  onClose: () => void;
}

export const AddSourceModal: React.FC<AddSourceModalProps> = ({ onClose }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(prev => [...prev, ...acceptedFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'text/plain': ['.txt'],
      'text/markdown': ['.md'],
      'audio/mpeg': ['.mp3'],
    }
  });

  const handleFileInputClick = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.txt,.md,.mp3';
    input.multiple = true;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        setFiles(prev => [...prev, ...Array.from(files)]);
      }
    };
    input.click();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white border-4 border-black p-4 sm:p-8 max-w-2xl w-full shadow-[8px_8px_0px_0px_rgba(0,0,0)] my-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Add sources</h2>
          <button 
            onClick={onClose} 
            className="hover:bg-black/10 rounded-full p-2"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div 
          {...getRootProps()} 
          className={`border-4 border-black p-4 sm:p-8 mb-6 text-center cursor-pointer
            ${isDragActive ? 'bg-blue-50' : ''} transition-colors`}
        >
          <input {...getInputProps()} />
          <Upload className="w-12 h-12 mx-auto mb-4" />
          <p className="text-lg font-bold mb-2">
            {isDragActive ? 'Drop files here' : 'Drop files here'}
          </p>
          <p className="text-gray-600 mb-4">or</p>
          <Button onClick={handleFileInputClick}>Choose File</Button>
          <p className="mt-4 text-sm text-gray-600">
            Supported: PDF, TXT, MD, MP3
          </p>
        </div>

        {files.length > 0 && (
          <div className="mb-6 border-4 border-black p-4">
            <h3 className="font-bold mb-2">Selected Files:</h3>
            <ul className="space-y-2">
              {files.map((file, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span className="truncate">{file.name}</span>
                  <Button 
                    variant="outline"
                    onClick={() => setFiles(files.filter((_, i) => i !== index))}
                    className="ml-2"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { icon: FileText, label: 'Google Drive' },
            { icon: FileText, label: 'Google Docs' },
            { icon: Youtube, label: 'YouTube' },
            { icon: LinkIcon, label: 'Paste URL' },
          ].map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className="flex items-center justify-center gap-2 py-4 sm:py-6"
              onClick={() => alert(`${item.label} integration coming soon!`)}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </Button>
          ))}
        </div>

        <div className="mt-6 flex justify-between items-center">
          <span className="text-sm text-gray-600">
            Sources: {files.length}/50
          </span>
          {files.length > 0 && (
            <Button 
              onClick={() => {
                alert('Files uploaded successfully!');
                setFiles([]);
                onClose();
              }}
            >
              Upload {files.length} file{files.length !== 1 ? 's' : ''}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};