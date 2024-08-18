import React, { useState } from 'react';

const FilterToggle = (props: { onToggle: () => void }) => {
  const [filtersOpen, setFilterOpen] = useState(false);

  return (
    <div
      className={`filters-button w-32 p-2 rounded-md flex flex-row justify-center h-full
                          text-white cursor-pointer transition-colors border-2 border-transparent hover:border-green-700 hover:shadow-green-800 hover:shadow-sm ${
                            filtersOpen ? 'bg-green-600' : 'bg-secondary'
                          }`}
      onClick={() => setFilterOpen(!filtersOpen)}
    >
      {filtersOpen ? (
        <div className="open">Hide Filters</div>
      ) : (
        <div className="closed">Open Filters</div>
      )}
    </div>
  );
};

export default FilterToggle;
