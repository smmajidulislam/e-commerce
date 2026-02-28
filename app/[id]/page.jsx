import Image from "next/image";
import { products } from "@/utils/featureProductsData";
import { Star } from "lucide-react";
import Navbar from "@/components/global/Navbar";
import Footer from "@/components/global/Footer";

export default async function Page({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="text-center text-xl p-20">Product Not Found</div>;
  }

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto mt-20 px-4 py-10">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="relative w-full h-87.5 md:h-125 rounded-xl overflow-hidden shadow-lg">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold dark:text-white">
              {product.title}
            </h1>

            <p className="text-gray-500 mt-3">{product.description}</p>

            <div className="flex items-center gap-2 mt-4">
              <Star className="text-yellow-500 fill-yellow-500" size={18} />
              <span>{product.rating}</span>
            </div>

            <div className="flex items-center gap-3 mt-5">
              <span className="text-3xl font-bold text-[#e11d48]">
                ${product.price}
              </span>

              {product.oldPrice && (
                <span className="line-through text-gray-400">
                  ${product.oldPrice}
                </span>
              )}
            </div>

            <button className="mt-6 bg-[#e11d48] text-white py-3 rounded-lg hover:opacity-90 transition">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
