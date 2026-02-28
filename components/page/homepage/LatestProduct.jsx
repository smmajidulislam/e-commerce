"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { products } from "../../../utils/featureProductsData";

export default function LatestProductSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-white">
        Latest Products
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.slice(5).map((product) => (
          <Link key={product.id} href={`/${product.id}`} className="block">
            <div className="bg-white dark:bg-[#222] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
              {/* Image */}
              <div className="relative w-full h-44">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="py-2 px-4">
                <h3 className="font-semibold text-lg text-gray-800 dark:text-white line-clamp-1">
                  {product.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-1">
                  {product.description}
                </p>

                <div className="flex items-center gap-1 mt-2">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {product.rating}
                  </span>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl font-bold text-[#e11d48]">
                    ${product.price}
                  </span>

                  {product.oldPrice && (
                    <span className="text-sm line-through text-gray-400">
                      ${product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
