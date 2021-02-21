import React, { useState, useEffect } from "react";

const mockData = ["Siri", "Alexa", "Google", "Facebook", "Twitter", "Linkedin"];

const SearchInput = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const filteredResults = mockData.filter((data) =>
      data.toLowerCase().includes(query)
    );
    setResults(filteredResults);
  }, [query]);

  return (
    <>
      <input
        type="text"
        id="searchInput"
        className="px-1 m-1 rounded-lg focus:outline-none"
        placeholder="Search"
        value={query ? query : ""}
        onChange={handleChange}
      />
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default SearchInput;
