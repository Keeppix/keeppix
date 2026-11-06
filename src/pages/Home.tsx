import { useState } from "react";
import GalleryLayout from "../components/GalleryLayout";
import Tabs from "../components/Tabs";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="">
      {/* SEARCHBAR */}
      <div className="searchbar p-4">
        <input
          className="border border-gray-600 rounded-lg px-4 py-2 w-full outline-0"
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* TABS */}
      <Tabs tabs={["All", "Popular", "New"]} />

      {/* GALLERY */}
      <GalleryLayout />
    </div>
  );
}
