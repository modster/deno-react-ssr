import createSelectors from "./selectors.ts"
import { create } from 'zustand'


export interface CandleState {
    Symbol: string
    Exchange: string
    Date: Date
    Open: number
    High: number
    Low: number
    Close: number
    Volume: number
    updateSymbol: (Symbol: string) => void
    updateExchange: (Exchange: string) => void
    updateDate: (Date: Date) => void
    updateOpen: (Open: number) => void
    updateHigh: (High: number) => void
    updateLow: (Low: number) => void
    updateClose: (Close: number) => void
    updateVolume: (Volume: number) => void
}

// Create your store, which includes both state and (optionally) actions
export const useCandleStore = create<CandleState>((set) => ({
    Symbol: "",
    Exchange: "",
    Date: new Date(),
    Open: 0,
    High: 0,
    Low: 0,
    Close: 0,
    Volume: 0,
    updateSymbol: (Symbol) => set(() => ({ Symbol: Symbol })),
    updateExchange: (Exchange) => set(() => ({ Exchange: Exchange })),
    updateDate: (Date) => set(() => ({ Date: Date })),
    updateOpen: (Open) => set(() => ({ Open: Open })),
    updateHigh: (High) => set(() => ({ High: High })),
    updateLow: (Low) => set(() => ({ Low: Low })),
    updateClose: (Close) => set(() => ({ Close: Close })),
    updateVolume: (Volume) => set(() => ({ Volume: Volume })),
}))
// const useStoreBase = create<BearState>()((set) => ({
//     bears: 0,
//     increase: (by) => set((state) => ({ bears: state.bears + by })),
//     increment: () => set((state) => ({ bears: state.bears += 1 }))
//   }));

/**
 * 
 * @param {CandleState} useCandleStore
 * @returns {CandleStateSelector}
 */
export default createSelectors(useCandleStore)

/** 
 * @function CandleProvider wrapper
 * This component is responsible for creating the store and providing it to the
 * rest of the application. It uses the `useRef` hook to ensure that the store is
 * only created once, even if the component is re-rendered.
 * @import useRef from React
 * @type {CandleStoreProvider} 
 * @returns {React.ReactElement}
 */
function CandleStoreProvider({ children, ...props }: CandleProviderProps) {
    const storeRef = useRef<CandleStore>()
    if (!storeRef.current) {
        storeRef.current = createBearStore(props)
    }
    return (
        <BearContext.Provider value={storeRef.current}>
            {children}
        </BearContext.Provider>
    )
}
