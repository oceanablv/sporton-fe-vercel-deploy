import HeroSection from "./components/homes/hero";
import CategoriesSection from "./components/homes/categories";
import ProductSection from "./components/homes/products";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts()
  ])

  return <main>
    <HeroSection />
    <CategoriesSection categories={categories}/>
    <ProductSection products={products} />

  </main>
}
