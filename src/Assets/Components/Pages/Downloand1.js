import React, { useState } from 'react';
import '../../CSS/Download1.css';
import { FaFilePdf, FaDownload } from 'react-icons/fa'; // PDF icon and Download icon

const Download1 = () => {
    const [activeType, setActiveType] = useState('IPO');

    const handleDownload = (productName) => {
        const element = document.createElement("a");
        const file = new Blob([`${productName}: This is a sample download file for ${productName}.`], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${productName}-details.txt`;
        document.body.appendChild(element);
        element.click();
    };

    const productTypes = [
      'IPO', 'QIO', 'Right Offer Document', 'Bond', 'Notice'
  ];

  const products = [
      { name: 'Product 1', type: 'IPO' },
      { name: 'Product 2', type: 'IPO' },
      { name: 'Product 3', type: 'IPO' },
      { name: 'Product 4', type: 'IPO' },
      { name: 'Product 1', type: 'QIO' },
      { name: 'Product 2', type: 'QIO' },
      { name: 'Product 3', type: 'QIO' },
      { name: 'Product 3', type: 'Right Offer Document' },
      { name: 'Product 4', type: 'Right Offer Document' },
      { name: 'Product 5', type: 'Right Offer Document' },
      { name: 'Product 6', type: 'Right Offer Document' },
      { name: 'Product 4', type: 'Bond' },
      { name: 'Product 1', type: 'Bond' },
      { name: 'Product 2', type: 'Bond' },
      { name: 'Product 3', type: 'Bond' },
      { name: 'Product 3', type: 'Bond' },
      { name: 'Product 2', type: 'Notice' },
      { name: 'Product 3', type: 'Notice' },
      { name: 'Product 3', type: 'Notice' },
      // Add more products as needed
  ];


    return (
        <div className="download-container">
            <aside className="product-type-sidebar">
                {productTypes.map((type) => (
                    <button
                        key={type}
                        onClick={() => setActiveType(type)}
                        className={`product-type-btn ${activeType === type ? 'active' : ''}`}
                    >
                        {type}
                    </button>
                ))}
            </aside>

            <main className="product-main">
                <header className="header">
                    <h1>Product Showcase</h1>
                    <p>Select a product type to view available PDFs.</p>
                </header>

                <section className="product-list">
                    {products.filter(product => product.type === activeType).map((product) => (
                        <div className="product-card" key={product.name}>
                            <FaFilePdf className="pdf-icon" />
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <FaDownload 
                                    onClick={() => handleDownload(product.name)} 
                                    className="download-icon"
                                    size={24}
                                />
                            </div>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Download1;
