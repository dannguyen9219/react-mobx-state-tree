import { observer } from "mobx-react"
import { MSTStore } from "../models/root/root"

export const Counter = observer(() => {
    const { counter } = MSTStore()

    return (
        <div>
            <h4>Counter</h4>
            <p>{counter.count}</p>
        </div>
    )
})