import { Routes as Router, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlabalStyles";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import CreateCabinForm from "./features/cabins/CreateCabinForm";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0, // 1 hour
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles />
        <Router>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/cabins" element={<Cabins />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="/creatcabin" element={<CreateCabinForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Router>

        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px ",
              backgroundColor: "var(--color-gray-0)",
              color: "var(--color-gray-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
