import { StoreApi, UseBoundStore } from "zustand";

type State = Record<string, unknown>;

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

const createSelectors = <S extends UseBoundStore<StoreApi<State>>>(
  _store: S,
) => {
  const store = _store as WithSelectors<typeof _store>;
  store.use = {};
  type StateKeys = keyof ReturnType<typeof store.getState>;
  for (const k of Object.keys(store.getState()) as StateKeys[]) {
    store.use[k] = () => store((s) => s[k]);
  }

  return store;
};

export default createSelectors;
