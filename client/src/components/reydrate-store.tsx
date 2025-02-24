import { create } from 'zustand'
import { persist } from 'zustand/middleware'


export const useBoundStore = create(
    persist(
        (set, get) => ({
            // ...
        }),
        {
            // ...
            onRehydrateStorage: (state) => {
                console.log('hydration starts')

                // optional
                return (state, error) => {
                    if (error) {
                        console.log('an error happened during hydration', error)
                    } else {
                        console.log('hydration finished')
                    }
                }
            },
        },
    ),
)
