import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import ProductDetail from "@/components/ProductDetail";
import { getProduct } from "@/lib/products";

const product = getProduct("cloud");
export const metadata: Metadata = { title: product?.title ?? "Cloud", description: product?.tagline };
export default function Page() {
  if (!product) notFound();
  return <PageShell><ProductDetail product={product} /></PageShell>;
}
