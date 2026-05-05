export default function SuccessPage() {
  return (
    <main style={styles.main}>
      <h1>Order Received</h1>
      <p style={styles.text}>
        The business will contact you shortly.
      </p>
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
  text: { marginTop: "10px", color: "#4ade80" },
};
