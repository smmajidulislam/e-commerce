"use client";

import Image from "next/image";
import { products } from "@/utils/featureProductsData";
import { Edit, Trash } from "lucide-react";

export default function ProductTable() {
  const handleEdit = (id) => {
    alert("Edit Product: " + id);
  };

  const handleDelete = (id) => {
    alert("Delete Product: " + id);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 dark:text-white text-center">
        Product List
      </h2>

      <div className="w-full overflow-x-auto rounded-xl shadow border dark:border-[#333]">
        <table className="w-full min-w-200 bg-white dark:bg-[#222]">
          <thead className="bg-gray-100 dark:bg-[#1a1a1a]">
            <tr className="text-left">
              <th className="p-4">Image</th>
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Old Price</th>
              <th className="p-4">Rating</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t dark:border-[#333] hover:bg-gray-50 dark:hover:bg-[#2a2a2a] transition"
              >
                <td className="p-4">
                  <div className="relative w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                <td className="p-4 font-medium dark:text-white">
                  {product.title}
                </td>

                <td className="p-4 text-[#e11d48] font-semibold">
                  ${product.price}
                </td>

                <td className="p-4 line-through text-gray-400">
                  {product.oldPrice && `$${product.oldPrice}`}
                </td>

                <td className="p-4 text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </td>

                <td className="p-4">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={() => handleEdit(product.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-lg hover:opacity-80 transition"
                    >
                      <Edit size={16} />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="flex items-center gap-1 px-3 py-1 bg-red-500 text-white rounded-lg hover:opacity-80 transition"
                    >
                      <Trash size={16} />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
