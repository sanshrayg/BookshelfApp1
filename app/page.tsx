// pages/index.js
import Bookshelf from "../components/Bookshelf";

const books = [
  { Number: 1, Title: "Book 1", Author: "Author 1" },
  { Number: 2, Title: "Book 2", Author: "Author 2" },
  { Number: 3, Title: "Book 3", Author: "Author 3" },
  // Add more books as needed
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sanshray's Bookshelf</h1>
      <Bookshelf books={books} />
    </div>
  );
}
