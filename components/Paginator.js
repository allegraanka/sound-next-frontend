import { useState } from 'react';
import ShowComponent from "./ShowComponent";

export default function Paginator({ shows }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const totalItems = shows.length;

  const idxOfLastItem = currentPage * itemsPerPage;
  const idxOfFirstItem = idxOfLastItem - itemsPerPage;
  const currentShows = shows.slice(idxOfFirstItem, idxOfLastItem);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // CHANGE PAGE
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return(
    <div className={``}>
      {currentShows && currentShows.map((show) => (
         <ShowComponent key={show.id} show={show}/>
      ))}

      <ul className='flex items-center mb-12'>
        <span className={`mx-2`}>←</span>

        {pageNumbers.map(number => (
          <a key={number} onClick={() => paginate(number)}>
            <li className={`flex items-center justify-center w-10 h-10 border-2 mx-2`}>
              {number}
            </li>
          </a>
        ))}
        
        <span className={`mx-2`}>→</span>
      </ul>
    </div>
  );
}