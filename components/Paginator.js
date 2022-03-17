import { useState, useEffect } from 'react';
import ShowComponent from "./ShowComponent";

export default function Paginator({ items, itemsPerPage, pageLimit }) {
  const [pages] = useState(Math.ceil(items.length / itemsPerPage));
  const [currentPage, setCurrentPage] = useState(1);

  function getNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function getPrevPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedItems = () => {
    const startIndex = currentPage * pageLimit - pageLimit;
    const endIndex = startIndex + pageLimit;
    console.log('what is ittttttt', items.slice(startIndex, endIndex));
    return items.slice(startIndex, endIndex);
  }

  return (
    <div>

      {currentItems && currentItems.map((show) => (
         <ShowComponent key={show.id} show={show}/>
      ))}

      <div className={`flex justify-between`}>
        <div className={`flex space-x-1`}>
          <div className={`bg-black text-white w-fit px-4 py-2`}>
            FIRST
          </div>
          <div 
            className={`bg-black text-white w-fit px-4 py-2 ${currentPage === 1 ? 'disabled' : ''}`}
            onClick={getPrevPage}>
            PREV
          </div>
        </div>

        <div className={`flex space-x-1`}>
          <div 
            className={`bg-black text-white w-fit px-4 py-2 ${currentPage === pages ? 'disabled' : ''}`}
            onClick={getNextPage}>
            NEXT
          </div>
          <div className={`bg-black text-white w-fit px-4 py-2`}>
            LAST
          </div>
        </div>
      </div>

    </div>
  );
}