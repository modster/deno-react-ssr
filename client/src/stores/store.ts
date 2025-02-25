import create from "zustand";

import createSelectors from "./selectors";

interface BearState {
  bears: number;
  increase: (by: number) => void;
  increment: () => void;
}

const useStoreBase = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
  increment: () => set((state) => ({ bears: state.bears += 1 })),
}));

export default createSelectors(useStoreBase);
