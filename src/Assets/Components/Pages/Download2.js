import React, { useState } from 'react';
import '../../CSS/Download2.css';
function Download2() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    { name: 'Category 1', files: ['file1.pdf', 'file2.pdf'] },
    { name: 'Category 2', files: ['file3.pdf', 'file4.pdf'] },
    { name: 'Category 3', files: ['file5.pdf', 'file6.pdf'] },
  ];

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div className="pdf-downloader">
      <h1>PDF Downloader</h1>
      <div className="category-selector">
        <h2>Select a Category</h2>
        <div className="button-group">
          {categories.map((category, index) => (
            <button
              key={index}
              className="category-button"
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {selectedCategory && (
        <div className="file-list">
          <h3>{selectedCategory.name}</h3>
          <ul>
            {selectedCategory.files.map((file, index) => (
              <li key={index}>
                <a href={`/path/to/pdf/${file}`} download className="file-link">
                  {file}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Download2;
