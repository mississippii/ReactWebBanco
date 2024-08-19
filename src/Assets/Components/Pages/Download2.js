import React, { useState } from 'react';
import '../../CSS/Download1.css';
import { FaFilePdf, FaDownload } from 'react-icons/fa'; // PDF icon and Download icon

const Download2 = () => {
    const [activeType, setActiveType] = useState('BO Account Opening & Closing');

    const handleDownload = (productName) => {
        const element = document.createElement("a");
        const file = new Blob([`${productName}: This is a sample download file for ${productName}.`], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${productName}-details.txt`;
        document.body.appendChild(element);
        element.click();
    };

    const productTypes = [
        'BO Account Opening & Closing', 'Transfer & Transmission', 'Other'
    ];

    const products = [
        { name: 'Product 1', type: 'BO Account Opening & Closing' },
        { name: 'Product 2', type: 'BO Account Opening & Closing' },
        { name: 'Product 3', type: 'BO Account Opening & Closing' },
        { name: 'Product 4', type: 'BO Account Opening & Closing' },
        { name: 'Product 1', type: 'BO Account Opening & Closing' },
        { name: 'Product 2', type: 'BO Account Opening & Closing' },
        { name: 'Product 3', type: 'BO Account Opening & Closing' },
        { name: 'Product 3', type: 'Transfer & Transmission' },
        { name: 'Product 4', type: 'Transfer & Transmission' },
        { name: 'Product 5', type: 'Transfer & Transmission' },
        { name: 'Product 6', type: 'Transfer & Transmission' },
        { name: 'Product 4', type: 'Transfer & Transmission' },
        { name: 'Product 1', type: 'Other' },
        { name: 'Product 2', type: 'Other' },
        { name: 'Product 3', type: 'Other' },
        { name: 'Product 3', type: 'Other' },
        { name: 'Product 2', type: 'Other' },
        { name: 'Product 3', type: 'Other' },
        { name: 'Product 3', type: 'Other' },
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

export default Download2;
