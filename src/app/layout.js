import "./globals.css";
import NavBar from "@/components/common/navbar/Navbar";
import Footer from "@/components/common/footer/Footer";

export const metadata = {
  title: "Odyssey",
  description: "Experience the Excellence !!!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased relative`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
