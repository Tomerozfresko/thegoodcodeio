import "./style.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./components/main/Main.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to our App
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;
