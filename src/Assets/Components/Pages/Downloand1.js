import React from 'react';
import '../../CSS/Download1.css';

const Download1 = () => {
    const handleDownload = (productName) => {
        const element = document.createElement("a");
        const file = new Blob([`${productName}: This is a sample download file for ${productName}.`], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${productName}-details.txt`;
        document.body.appendChild(element);
        element.click();
      };
    
      const products = [
        { name: 'Product 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 6', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 7', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 8', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { name: 'Product 9', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      ];
    
      return (
        <div className="product-container">
          <header>
            <h1>Product Showcase</h1>
            <p>Explore our range of products below.</p>
          </header>
    
          <section className="product-list">
            {products.map((product) => (
              <div className="product-card" key={product.name}>
                <img src="https://via.placeholder.com/200" alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <button onClick={() => handleDownload(product.name)} className="download-btn">Download</button>
              </div>
            ))}
          </section>
        </div>
      );
    };
    
export default Download1;
