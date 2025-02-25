import { Provider, ProviderProps, useRef, createContext } from "react"
import { create, StoreApi } from 'zustand'
// import createSelectors from "./selectors.ts"

const CandleContext = createContext<StoreApi<State> | null>(null)

export interface State {
    [key: string]: unknown
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

export const useCandleStore = create<State>((set) => ({
    Symbol: "",
    Exchange: "",
    Date: new Date(),
    Open: 0,
    High: 0,
    Low: 0,
    Close: 0,
    Volume: 0,
    updateSymbol: (Symbol) => set(() => ({ Symbol })),
    updateExchange: (Exchange) => set(() => ({ Exchange })),
    updateDate: (Date) => set(() => ({ Date })),
    updateOpen: (Open) => set(() => ({ Open })),
    updateHigh: (High) => set(() => ({ High })),
    updateLow: (Low) => set(() => ({ Low })),
    updateClose: (Close) => set(() => ({ Close })),
    updateVolume: (Volume) => set(() => ({ Volume })),
}))

export function CandleStickProvider({ children }: ProviderProps<State>) {
    const storeRef = useRef<Provider<State>>()
    if (!storeRef.current) {
        storeRef.current = useCandleStore()
    }
    return (
        <CandleContext.Provider value={storeRef.current}>
            {children}
        </CandleContext.Provider>
    )
}

// export createSelectors(useCandleStore)