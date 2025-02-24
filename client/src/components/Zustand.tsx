import { create } from "zustand"

// You need to wrap Maps and Sets inside an object,
// and when you want it's update to be reflected
// (e.g. in React), you do it by calling the setState on it:
const useFooBar = create(() => ({ foo: new Map(), bar: new Set() }))

// Without wrapping it in an object, it doesn't work.
// const useTheWrongWay = create(() => new Set())

// let wrong = 0
let foo = 0
let bar = 0

function updateFoo() {
    ++foo

    // If you want to update some React component that
    // uses `useFooBar`, you have to call setState
    // to let React know that an update happened.
    // Following React's best practices, you should
    // create a new Map/Set when updating them:
    useFooBar.setState((prev) => ({
        foo: new Map(prev.foo).set(foo, foo),
    }))
}

function updateBar() {
    ++bar
    useFooBar.setState((prev) => ({
        bar: new Set(prev.bar).add(bar),
    }))
}

// function updateTheWrongWay() {
//   ++wrong
//   useTheWrongWay.setState((prev) => new Set(prev).add(wrong))
// }

function App() {
    const { foo, bar } = useFooBar()
    // const wrong = useTheWrongWay()

    return (
        <div className="App">
            <div>foo = {foo}</div>
            <div>bar = {bar}</div>
            <br />
            <button onClick={updateFoo}>Click me to update foo</button>
            <button onClick={updateBar}>Click me to update bar</button>
        </div>
    )
}
export default App