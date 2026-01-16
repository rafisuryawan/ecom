import { Link } from 'react-router-dom';

// const products = [
//   { id: 1, name: "COFFEE + GOODBRIEF", type: "On-Demand", class: "green" },
//   { id: 2, name: "GOODBRIEF JOB TYPES", type: "On-Demand", class: "cyan" },
//   { id: 3, name: "GOODBRIEF - ALL I GOT WAS THIS SHIRT", type: "On-Demand", class: "dark" },
//   { id: 4, name: "GOODBRIEF ICON AND WORDMARK", type: "On-Demand", class: "dark" },
// // ];

const products = [
  { 
    id: 1, 
    name: "COFFEE + GOODBRIEF", 
    type: "On-Demand", 
    class: "green",
    imageUrl: "https://i.pinimg.com/1200x/5d/00/c7/5d00c7c9aef23b3eaf104761557f63e5.jpg" // Ganti dengan URL gambar asli
  },
  { 
    id: 2, 
    name: "GOODBRIEF JOB TYPES", 
    type: "On-Demand", 
    class: "cyan",
    imageUrl: "" // Contoh jika gambar kosong
  },
  {
    id: 3, 
    name: "COFFEE + GOODBRIEF", 
    type: "On-Demand", 
    class: "green",
    imageUrl: "https://via.placeholder.com/300x400/2d3e2d/ffffff?text=Kaos+1"
  },
  {
     id: 4, 
    name: "COFFEE + GOODBRIEF", 
    type: "On-Demand", 
    class: "green",
    imageUrl: "https://via.placeholder.com/300x400/2d3e2d/ffffff?text=Kaos+1"
  }
];

export default function ProductList() {
  return (
    <div className="container">
      <div className="product-grid">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-card">
            <div className={`product-image ${product.class}`}>
              {product.imageUrl ? (
                <img src={product.imageUrl} alt={product.name} className="main-img" />
              ) : (
                <div className="image-placeholder">No Image Available</div>
              )}
            </div>
            <hr className="divider" />
            <div className="product-info">
              <h3 className="product-title">{product.name}</h3>
              <p className="product-status">{product.type}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}