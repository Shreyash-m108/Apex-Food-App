const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border border-gray-200 bg-white p-3"
        >
          {/* image placeholder */}
          <div className="h-36 w-full rounded-lg bg-gray-200" />

          {/* text lines */}
          <div className="mt-3 h-4 w-3/4 bg-gray-200 rounded" />
          <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded" />
          <div className="mt-2 h-4 w-2/3 bg-gray-200 rounded" />
          <div className="mt-3 h-5 w-24 bg-gray-200 rounded" />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
