"use client";
import { Provider } from "react-redux";
import store from "./store/store"; // Assuming your store is in a 'store' folder

export function Providers({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
