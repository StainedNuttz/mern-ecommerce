import React, { useState, useEffect } from 'react';

import Button from '../../shared/components/UI/Button';

// TODO: REDO THIS WITH HOOK => usePagination

const Pagination = props => {
  const [currentPage, setCurrentPage] = useState(1);

  const [startBtnDisabled, setStartBtnDisabled] = useState(true);
  const [backBtnDisabled, setBackBtnDisabled] = useState(true);

  const [forwardBtnDisabled, setForwardBtnDisabled] = useState(false);
  const [endBtnDisabled, setEndBtnDisabled] = useState(false);

  // init page
  useEffect(() => {
    props.onInitPage(paginations[1]);
  }, []);

  // button states
  const firstPage = () => {
    if (forwardBtnDisabled) setForwardBtnDisabled(false);
    if (endBtnDisabled) setEndBtnDisabled(false);
    setBackBtnDisabled(true);
    setStartBtnDisabled(true);
  }
  const lastPage = () => {
    setForwardBtnDisabled(true);
    setEndBtnDisabled(true);
    if (backBtnDisabled) setBackBtnDisabled(false);
    if (startBtnDisabled) setStartBtnDisabled(false);
  }
  const otherPage = () => {
    if (forwardBtnDisabled) setForwardBtnDisabled(false);
    if (endBtnDisabled) setEndBtnDisabled(false);
    if (backBtnDisabled) setBackBtnDisabled(false);
    if (startBtnDisabled) setStartBtnDisabled(false);
  }
  
  const pageChangeHandler = newPage => {
    // handle button disabled/enabled states
    if (newPage === 1) {
      firstPage() 
    } else if (newPage === pages) {
      lastPage()
    } else {
      otherPage()
    }

    // handle page change logic
    setCurrentPage(newPage);
    props.onPageChange(paginations[newPage-1]);
  }

  let pages = Math.ceil(props.array.length / props.perPage);
  pages = (pages === 0) ? 1 : pages;

  console.log(pages)

  const [paginations, setPaginations] = useState([]);
  for (let i = 0; i < pages; i++) {
    // spread items equally for each pagination, last pagination will likely be a remainder of the total items per page
    paginations.push(props.array.splice(0, props.perPage))
    // setPaginations(paginations);
  }

  console.log(props.array)
  console.log(paginations)

  return (
    <div></div>
    // <>
    //   {paginations && (
    //     <ul className="inline-flex text-white rounded-lg">
    //       {/* LEFT BUTTON */}
    //       <li className="">
    //         <Button disabled={startBtnDisabled} onClick={() => pageChangeHandler(1)} className="p-2 rounded-l-lg">{'<<'}</Button>
    //       </li>
    //       <li className="">
    //         <Button disabled={backBtnDisabled} onClick={() => pageChangeHandler(currentPage - 1)} className="p-2">{'<'}</Button>
    //       </li>


    //       <li className="px-5 w-4 text-lg flex justify-center items-center bg-white text-gray-600 border-t border-b border-gray-200 shadow-xl">
    //         {currentPage}
    //       </li>

    //       {/* RIGHT BUTTON */}
    //       <li className="">
    //         <Button disabled={forwardBtnDisabled} onClick={() => pageChangeHandler(currentPage + 1)} className="p-2">{'>'}</Button>
    //       </li>
    //       {/* RIGHT BUTTON */}
    //       <li className="">
    //         <Button disabled={endBtnDisabled} onClick={() => pageChangeHandler(pages)} className="p-2 rounded-r-lg">{'>>'}</Button>
    //       </li>
    //     </ul>)
    //   }
    // </>
  );
}

export default Pagination;