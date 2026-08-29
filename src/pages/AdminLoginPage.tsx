import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Lock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { verifyAdminPin } from "@/lib/supabase";

const AdminLoginPage = ({ onSuccess }: { onSuccess: () => void }) => {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const isValid = await verifyAdminPin(pin);

      if (isValid) {
        sessionStorage.setItem("adminAuth", JSON.stringify({ authenticated: true, timestamp: Date.now() }));
        onSuccess();
      } else {
        setError("Invalid PIN. Please try again.");
        setPin("");
      }
    } catch (err) {
      setError("Error verifying PIN. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="border border-border bg-card p-8 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="flex justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="font-heading text-2xl font-bold uppercase tracking-wide">Admin Access</h1>
            <p className="text-sm text-muted-foreground">Enter your PIN to access the admin panel</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="pin" className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-2 block">
                6-Digit PIN
              </label>
              <input
                id="pin"
                type="password"
                inputMode="numeric"
                maxLength={6}
                value={pin}
                onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full px-4 py-3 border border-border bg-background text-foreground text-center text-2xl tracking-widest font-mono rounded focus:outline-none focus:border-primary"
              />
            </div>

            {/* Error message */}
            {error && (
              <div className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 px-3 py-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* Submit button */}
            <Button
              type="submit"
              disabled={pin.length !== 6 || loading}
              className="w-full font-heading"
            >
              {loading ? "Verifying..." : "Login"}
            </Button>
          </form>

          {/* Footer */}
          <p className="text-xs text-muted-foreground text-center">
            Session expires when you close your browser
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLoginPage;
