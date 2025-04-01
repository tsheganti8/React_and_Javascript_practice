/* Develop a paginated table: Design a table component that displays data in
pages and allows users to navigate between them. Include functionalities for
sorting and filtering data within each page. */

import React, { useState } from "react";
import "./PaginatedTable.css"; // Optional for styling

// Sample data for the table
const sampleData = [
  { id: 1, name: "Alice", age: 25, occupation: "Engineer" },
  { id: 2, name: "Bob", age: 30, occupation: "Designer" },
  { id: 3, name: "Charlie", age: 35, occupation: "Teacher" },
  { id: 4, name: "David", age: 28, occupation: "Developer" },
  { id: 5, name: "Eve", age: 24, occupation: "Artist" },
  { id: 6, name: "Frank", age: 32, occupation: "Manager" },
  { id: 7, name: "Grace", age: 29, occupation: "Scientist" },
  { id: 8, name: "Henry", age: 45, occupation: "Writer" },
  { id: 9, name: "Irene", age: 40, occupation: "Doctor" },
  { id: 10, name: "John", age: 38, occupation: "Mechanic" }
];

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5); // Number of rows to display per page
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });

  // Filter the data based on search term
  const filteredData = sampleData.filter(item =>
    Object.values(item).join(" ").toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (aValue < bValue) return sortConfig.direction === "ascending" ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  // Get data for current page
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = sortedData.slice(startIndex, startIndex + rowsPerPage);

  // Calculate total number of pages
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  // Handle column sorting
  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <h1>Paginated Table</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Name</th>
            <th onClick={() => handleSort("age")}>Age</th>
            <th onClick={() => handleSort("occupation")}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={currentPage === index + 1 ? "active" : ""}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PaginatedTable;
