"use client";

import { useGetUsersQuery } from "../../../features/apiSlice/usersApi";

const UsersPage = () => {
  const { data, isLoading, isError } = useGetUsersQuery(10);

  // ⭐ Skeleton Card Component
  const SkeletonCard = () => (
    <div className="p-5 rounded-xl shadow bg-white dark:bg-gray-800 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700"></div>

        <div className="flex-1 space-y-2">
          <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded"></div>
          <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="h-3 w-1/2 bg-gray-300 dark:bg-gray-700 rounded"></div>
        <div className="h-3 w-2/3 bg-gray-300 dark:bg-gray-700 rounded"></div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Users List
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(20)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen dark:bg-gray-900">
        <p className="text-red-500">Error loading users</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100  dark:bg-gray-900 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">
        Users List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((user) => (
          <div
            key={user.id}
            className="p-5 rounded-xl shadow bg-white dark:bg-gray-800 
            hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                {user.name.charAt(0)}
              </div>

              <div>
                <h2 className="font-semibold text-gray-800 dark:text-white">
                  {user.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              <p>{user.address?.city}</p>
              <p>🏢 {user.company?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
