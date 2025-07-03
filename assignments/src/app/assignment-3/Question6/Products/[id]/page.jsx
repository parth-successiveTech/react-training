// app/products/[id]/page.jsx
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const products = [
  { id: '1', name: 'Laptop', description: 'A high-performance laptop.' },
  { id: '2', name: 'Phone', description: 'A smartphone with a great camera.' },
  { id: '3', name: 'Headphones', description: 'Noise-cancelling headphones.' }
];

export default function ProductDetail({ params }) {
  const router = useRouter();
  const { id } = params;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find(p => p.id === id);
    setProduct(found);
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
}
