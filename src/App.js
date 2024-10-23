import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Newsfeed from "./components/Newsfeed";
import RightSidebar from "./components/RightSidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-grow p-4 bg-gray-100">
          <Newsfeed />
        </main>

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
