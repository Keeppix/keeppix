import GalleryLayout from "../components/GalleryLayout";
import Tabs from "../components/Tabs";

export default function Gallery() {
  return (
    <div>
      <Tabs tabs={["All", "Popular"]} />
      <GalleryLayout />
    </div>
  );
}
