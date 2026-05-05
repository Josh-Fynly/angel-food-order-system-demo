"use client";

import { useRouter } from "next/navigation";

type Product = {
  name: string;
  price: string;
  image: string;
};

const products: Product[] = [
  {
    name: "Fresh Prawns",
    price: "₦5,000/kg",
    image:
      "https://images.unsplash.com/photo-1604908176997-4317b9b7c1e6?w=800",
  },
  {
    name: "Dried Meat",
    price: "₦2,800/250g",
    image:
      "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=800",
  },
  {
    name: "Fresh Crab",
    price: "₦3,200/kg",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?w=800",
  },
  {
    name: "Pepper Mix",
    price: "₦800/100g",
    image:
      "https://images.unsplash.com/photo-1604908177522-0400d7c0c4ef?w=800",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main style={styles.main}>
      <h1 style={styles.title}>Angel Food & Spices</h1>
      <p style={styles.subtitle}>
        Fresh seafood and spices with reliable delivery
      </p>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.name} style={styles.card}>
            <img src={product.image} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button
              style={styles.button}
              onClick={() =>
                router.push(
                  `/order?product=${encodeURIComponent(product.name)}`
                )
              }
            >
              Order
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

const styles: any = {
  main: {
    background: "#0a0a0a",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  title: { fontSize: "28px", fontWeight: 600 },
  subtitle: { color: "#aaa", marginBottom: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
  },
  card: {
    background: "#111",
    borderRadius: "12px",
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  button: {
    marginTop: "10px",
    width: "100%",
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
  },
};
