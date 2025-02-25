
/**
 * This component demonstrates how to use the `BearProvider` and `useBearStore`
 * hooks to create a store and consume it in a child component.
 * @import BearProvider from './BearProvider'
 * @import HookConsumer from './HookConsumer'
 * @returns React<ReactElement>
 */
function CandleStickChart(props, { ...children }) {
    return (
        <CandleStoreProvider >
            {...children}
        </CandleStoreProvider>
    )
}
