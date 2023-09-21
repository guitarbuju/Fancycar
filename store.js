import { create } from 'zustand'


export const useCarStore = create((set)=>({
    asignedCar:'',
    setAsignedCar:(car) => set({ asignedCar: car }),
})

)

export const useBuyerStore = create((set)=>({
    asignedBuyer:'',
    setAsignedBuyer:(buyer) => set({ asignedBuyer: buyer }),
})

)