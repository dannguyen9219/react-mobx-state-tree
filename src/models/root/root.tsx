import { types, onSnapshot, Instance } from "mobx-state-tree"
import { createContext, useContext } from "react";

// Application Screen || Define Imports
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
import { Counter } from "../counter/counter";

const RootModel = types.model({
  counter: Counter,
})

let initialState = RootModel.create({
  counter: {
    count: 0,
  },
})

export const rootStore = initialState

onSnapshot(rootStore, (snapshot) => {
  console.log("Snapshot: ", snapshot)
  localStorage.setItem("rootState", JSON.stringify(snapshot))
})

export type RootInstance = Instance<typeof RootModel>

const RootStoreContext = createContext<null | RootInstance>(null)

export const Provider = RootStoreContext.Provider

export const MSTStore = () => {
  const store = useContext(RootStoreContext)
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider")
  }
  return store
}