"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(res.data);
      } catch (error) {
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-lg font-semibold">Loading...</p>;

  if (error)
    return (
      <p className="text-center mt-10 text-red-600 font-semibold">
        Error: {error}
      </p>
    );

  return (
    <main className="p-5">
      <h1 className="text-3xl font-bold mb-8">User Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="rounded-lg overflow-hidden shadow border bg-white hover:shadow-md transition"
          >
            {/* Top Section */}
            <div className="bg-blue-600 p-3 text-white">
              <h2 className="font-bold text-lg">{user.name}</h2>
              <p className="text-sm opacity-80">@{user.username}</p>
            </div>

            {/* Middle Info */}
            <div className="p-4 space-y-3">
              <div>
                <p className="text-xs font-semibold text-gray-600">Company</p>
                <p className="font-bold text-gray-800">{user.company.name}</p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-600">Website</p>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  className="text-blue-600 font-medium underline"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
