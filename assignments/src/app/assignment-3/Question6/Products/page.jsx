// app/products/page.jsx
'use client';
import Link from 'next/link';

const products = [
  { id: '1', name: 'Laptop', description: 'A high-performance laptop.' },
  { id: '2', name: 'Phone', description: 'A smartphone with a great camera.' },
  { id: '3', name: 'Headphones', description: 'Noise-cancelling headphones.' }
];

export default function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <strong>{product.name}</strong> - {product.description}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
