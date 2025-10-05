import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* <Navbar></Navbar>
      <main className="min-h-dvh">{children}</main>
      <Footer></Footer> */}
      {/* <div className="flex flex-col min-h-screen">
        <div className="h-[70px]">
          <Navbar />
        </div>

        <main className="min-h-[calc(100vh-230px)]">{children}</main>

        <div className="h-[140px]">
          <Footer />
        </div>
      </div> */}
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        {/* Navbar fixed height */}
        <div className="h-[70px]">
          <Navbar />
        </div>

        {/* Main dynamic height */}
        <main className="flex-grow min-h-[calc(100vh-230px)]">{children}</main>

        {/* Footer fixed height */}
        <div className="h-[140px]">
          <Footer />
        </div>
      </div>
    </>
  );
}
