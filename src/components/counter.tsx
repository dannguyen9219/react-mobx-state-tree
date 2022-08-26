import { observer } from "mobx-react"
import { MSTStore } from "../models/root/root"
import { Button } from "./button"

export const Counter = observer(() => {
    const { counter } = MSTStore()

    return (
        <div className="flex flex-col items-center mt-20">
            <h4 className="text-2xl font-bold text-center">Counter</h4>
            <p
              style={{ fontVariant: "tabular-nums" }}
              className="text-2xl font-bold text-center"
            >
              {counter.count}
            </p>
            <div className="flex mt-2 space-x-3">
              <Button label="-" onClick={counter.decrement} />
              <Button label="+" onClick={counter.increment} />
            </div>
        </div>
    )
})