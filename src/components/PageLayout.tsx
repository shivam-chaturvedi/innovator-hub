import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => (
  <>
    <Navbar />
    <main className="pt-16 overflow-x-hidden">{children}</main>
    <Footer />
  </>
);

export default PageLayout;
