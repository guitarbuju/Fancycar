

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Car store with persistence
export const useCarStore = create(
  persist(
    (set) => ({
      asignedCar: '',
      setAsignedCar: (car) => set({ asignedCar: car }),
    }),
    {
      name: 'car-storage', 
      getStorage: () => localStorage, 
    }
  )
);


export const useBuyerStore = create(
  persist(
    (set) => ({
      asignedBuyer: '',
      setAsignedBuyer: (buyer) => set({ asignedBuyer: buyer }),
    }),
    {
      name: 'buyer-storage',
      getStorage: () => localStorage,
    }
  )
);
