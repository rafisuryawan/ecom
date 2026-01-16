import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// Data produk yang sama dengan yang ada di ProductList
const productsData = [
  { 
    id: 1, 
    name: "COFFEE + GOODBRIEF", 
    class: "green",
    imageUrl: "https://i.pinimg.com/1200x/5d/00/c7/5d00c7c9aef23b3eaf104761557f63e5.jpg" 
  },
  { 
    id: 2, 
    name: "GOODBRIEF JOB TYPES", 
    class: "cyan",
    imageUrl: "https://via.placeholder.com/600/00bcd4/ffffff?text=Job+Types" 
  },
  { 
    id: 3, 
    name: "GOODBRIEF - ALL I GOT WAS THIS SHIRT", 
    class: "dark",
    imageUrl: "" // Jika kosong akan pakai placeholder
  },
  { 
    id: 4, 
    name: "GOODBRIEF ICON AND WORDMARK", 
    class: "dark",
    imageUrl: "https://via.placeholder.com/600/1a1a1a/ffffff?text=Icon+Wordmark" 
  }
];

export default function ProductDetail() {
  const { id } = useParams();
  
  // Mencari produk berdasarkan ID dari URL
  const product = productsData.find(p => p.id === parseInt(id));

  // State untuk tombol interaktif
  const [selectedType, setSelectedType] = useState('TEE');
  const [selectedFit, setSelectedFit] = useState('MEN');
  const [selectedStyle, setSelectedStyle] = useState('BASIC HEAVYWEIGHT');

  // Jika produk tidak ditemukan
  if (!product) return <div>Produk tidak ditemukan</div>;

  return (
    <div className="detail-container">
      <Link to="/" className="back-btn">← BACK TO CATALOG</Link>
      
      <div className="detail-layout">
        {/* SISI KIRI: Menampilkan ImageURL dari data produk */}
        <div className={`preview-section ${product.class}`}>
          {product.imageUrl ? (
            <img src={product.imageUrl} alt={product.name} className="detail-main-img" />
          ) : (
            <div className="image-placeholder">No Image Image</div>
          )}
        </div>

        {/* SISI KANAN: Pilihan yang bisa dipencet */}
        <div className="options-section">
          <h1 className="detail-title">{product.name}</h1>
          
          <section className="option-group">
            <span className="step-num">01.</span>
            <label className="label-header">TYPE</label>
            <div className="selection-grid">
              {['TEE', 'LONG SLEEVE', 'HOODIE'].map((type) => (
                <button 
                  key={type}
                  className={`option-box ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              ))}
            </div>
          </section>

          <section className="option-group">
            <span className="step-num">02.</span>
            <label className="label-header">FIT</label>
            <div className="selection-grid fit-grid">
              {['MEN', 'WOMEN'].map((fit) => (
                <button 
                  key={fit}
                  className={`option-box ${selectedFit === fit ? 'active' : ''}`}
                  onClick={() => setSelectedFit(fit)}
                >
                  {fit}
                </button>
              ))}
            </div>
          </section>

          <section className="option-group">
            <span className="step-num">03.</span>
            <label className="label-header">STYLE</label>
            <div className="selection-grid style-grid">
              <button 
                className={`option-box style-card ${selectedStyle === 'BASIC HEAVYWEIGHT' ? 'active' : ''}`}
                onClick={() => setSelectedStyle('BASIC HEAVYWEIGHT')}
              >
                <strong>BASIC HEAVYWEIGHT</strong>
                <p>Classic oversized fit, S-5X</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}