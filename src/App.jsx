

import AppLayout from "./components/layout/AppLayout";
import { CryptoContextProvider } from "./context/crypto-context";

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

export default function App() {
  return (
    <CryptoContextProvider>
<AppLayout/>
    </CryptoContextProvider>
  );
}
