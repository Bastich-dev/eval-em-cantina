import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

export default function ProviderQuery({ children }) {
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
