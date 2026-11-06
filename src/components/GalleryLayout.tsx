export default function GalleryLayout() {
  return (
    <div className="gallery p-2.5">
      <div className="grid grid-cols-2 gap-4">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-600 rounded-lg p-2"
          >
            <img
              src={`https://via.placeholder.com/150?text=Image+${index + 1}`}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
