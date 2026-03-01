import { Suspense } from "react";

const fetchTechnology = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=20",
    {
      cache: "no-store",
    },
  );
  if (!res.ok) throw new Error("Failed to load data");

  return res.json();
};

const TechnologyContent = async () => {
  const data = await fetchTechnology();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((tech) => (
        <div
          key={tech.id}
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 transition hover:shadow-lg"
        >
          <h2 className="mt-3 text-sm font-semibold text-gray-800 dark:text-white">
            {tech.title}
          </h2>
        </div>
      ))}
    </div>
  );
};

const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="h-60 rounded-xl bg-gray-200 dark:bg-gray-700 animate-pulse"
      />
    ))}
  </div>
);

const TechnologyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Promise Priority UI
      </h1>

      <Suspense fallback={<LoadingSkeleton />}>
        <TechnologyContent />
      </Suspense>
    </div>
  );
};

export default TechnologyPage;
