import { create } from 'zustand';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

interface DocumentState {
  documents: any[];
  setDocuments: (documents: any[]) => void;
  addDocument: (document: any) => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],
  setDocuments: (documents) => set({ documents }),
  addDocument: (document) => set((state) => ({ 
    documents: [...state.documents, document] 
  })),
}));