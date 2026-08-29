import { useState, useEffect } from "react";
import AdminLoginPage from "@/pages/AdminLoginPage";

const ProtectedAdminRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authData = sessionStorage.getItem("adminAuth");
    if (authData) {
      try {
        const parsed = JSON.parse(authData);
        setIsAuthenticated(parsed.authenticated === true);
      } catch {
        setIsAuthenticated(false);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!isAuthenticated) {
    return (
      <AdminLoginPage
        onSuccess={() => {
          setIsAuthenticated(true);
        }}
      />
    );
  }

  return <>{children}</>;
};

export default ProtectedAdminRoute;
