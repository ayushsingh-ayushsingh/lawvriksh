import Navbar from "@/components/custom/navbar";
import SidebarProfile from "@/components/custom/sidebarProfile";
import MainPageContent from "@/components/custom/mainPageContent";
import Timeline from "@/components/custom/timeline";

export function App() {
  return (
    <div className="bg-[#FFFAEA] min-h-screen">
      <div className="fixed w-full z-20">
        <Navbar />
      </div>
      <div className="h-15" />
      <main className="w-full px-4 py-2 md:px-6 md:py-4 min-h-screen">
        <div className="max-w-7xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-8 gap-16">
          <div className="order-1 md:order-2 md:max-w-md md:col-span-3">
            <SidebarProfile />
            <div>
              <Timeline />
            </div>
          </div>
          <div className="order-2 md:order-1 col-span-1 md:col-span-5">
            <MainPageContent />
          </div>
        </div>
      </main>
      <footer className="flex w-full justify-center text-black/75 items-center h-16 text-sm">
        Crafted with ♥️ by <a href="https://www.github.com/ayushsingh-ayushsingh" className="underline ml-2">Ayush Singh</a>
      </footer>
    </div>
  )
}

export default App;