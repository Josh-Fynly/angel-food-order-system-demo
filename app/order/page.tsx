"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderPage() {
  const params = useSearchParams();
  const router = useRouter();
  const product = params.get("product") || "Selected Product";

  const [form, setForm] = useState({
    name: "",
    quantity: 1,
    contact: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/success");
  };

  return (
    <main style={styles.main}>
      <h1>Order</h1>
      <p style={styles.product}>{product}</p>

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          required
        />

        <input
          type="number"
          min="1"
          value={form.quantity}
          onChange={(e) =>
            setForm({ ...form, quantity: Number(e.target.value) })
          }
        />

        <input
          placeholder="Contact"
          value={form.contact}
          onChange={(e) =>
            setForm({ ...form, contact: e.target.value })
          }
          required
        />

        <button type="submit">Submit Order</button>
      </form>
    </main>
  );
}

const styles: any = {
  main: {
    background: "#0a0a0a",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
  },
  product: { marginBottom: "20px", color: "#aaa" },
  form: { display: "flex", flexDirection: "column", gap: "10px" },
};
