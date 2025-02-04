// components/Bookshelf.js
"use client";

import { useState, useEffect } from "react";

const Bookshelf = ({ books }) => {
  const [hoveredBook, setHoveredBook] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      books.forEach((book, index) => {
        const img = document.getElementById(index + 1);
        if (img) {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
          const w = window.innerWidth;

          let newWidth, newHeight;

          if (w <= 1500 && w >= 1200) {
            newWidth = width / 5;
            newHeight = height / 5;
          } else if (w <= 1200) {
            newWidth = width / 6;
            newHeight = height / 6;
          } else if (w >= 1500) {
            newWidth = width / 3;
            newHeight = height / 3;
          }

          img.style.width = `${newWidth}px`;
          img.style.height = `${newHeight}px`;
        }
      });
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set sizes

    return () => window.removeEventListener("resize", handleResize);
  }, [books]);

  return (
    <div id="books" className="flex overflow-x-scroll p-4">
      {books.map((book, index) => (
        <div key={index} className="relative mx-2">
          <img
            id={index + 1}
            src={`/jpg/${index + 1}.jpg`}
            alt={book.Title}
            className="book-images"
            onMouseEnter={() => setHoveredBook(book)}
            onMouseLeave={() => setHoveredBook(null)}
          />
          {hoveredBook === book && (
            <div
              id="description"
              className="absolute bottom-full left-0 bg-white p-2 shadow-lg"
              style={{ display: "flex" }}
            >
              <p id="number">#{book.Number}</p>
              <p id="title">{book.Title}</p>
              <p id="author">{book.Author}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
