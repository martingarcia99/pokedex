import { create } from 'zustand';

interface SearchStore {
    isOpen: boolean;
    filter: string;
    currentSearch: string;
    openModal: () => void;
    closeModal: () => void;
    setFilter: (filter: string) => void;
    setCurrentSearch: (search: string) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
    isOpen: false,
    filter: '',
    currentSearch: '',
    openModal: () => set({ isOpen: true }),
    closeModal: () => set({ isOpen: false, filter: '', currentSearch: '' }),
    setFilter: (newValue) => set({ filter: newValue }),
    setCurrentSearch: (newValue) => set({ currentSearch: newValue }),
}));