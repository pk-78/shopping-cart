import React, { useEffect, useState } from "react";
import API_URL from "../Data";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  async function fetchProductData() {
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
      // console.log(data);
    } catch (err) {}

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="w-full px-10 pt-10 md:px-20 lg:px-40">
      <h1 className="text-6xl pb-10 font-bold text-center">Shop Now!</h1>
      {loading ? (
        <div className=" w-full flex items-center justify-center">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <Product post={post} key={post.id || index} />
          ))}
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}
