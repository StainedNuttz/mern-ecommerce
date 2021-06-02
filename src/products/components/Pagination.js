import { findAllByTestId } from '@testing-library/dom';
import React, { useState, useEffect } from 'react';

import Button from '../../shared/components/UI/Button';

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

  const onForward = () => {
    const newPage = currentPage + 1;
    if (newPage === pages) { 
      setForwardBtnDisabled(true);
      setEndBtnDisabled(true);
    } else if (backBtnDisabled && newPage > 1) {
      setBackBtnDisabled(false)
      setStartBtnDisabled(false);
    }
    pageChangeHandler(newPage);
  }
  
  const onBack = () => {
    const newPage = currentPage - 1;
    if (newPage === 1) { 
      setBackBtnDisabled(true);
      setStartBtnDisabled(true);
    } else if (forwardBtnDisabled && newPage < pages) {
      setForwardBtnDisabled(false) 
      setEndBtnDisabled(false)
    }
    pageChangeHandler(newPage);
  }

  const onGotoStart = () => {
    setForwardBtnDisabled(false);
    setEndBtnDisabled(false);
    setBackBtnDisabled(true);
    setStartBtnDisabled(true);
    pageChangeHandler(1);
  }

  const onGotoEnd = () => {
    setForwardBtnDisabled(true);
    setEndBtnDisabled(true);
    setBackBtnDisabled(false);
    setStartBtnDisabled(false);
    pageChangeHandler(pages);
  }

  const pageChangeHandler = page => {
    setCurrentPage(page);
    console.log('new page', page)
    props.onPageChange(paginations[page-1]);
  }

  let pages = Math.ceil(props.array.length / props.perPage);
  pages = (pages === 0) ? 1 : pages;

  const paginations = [];
  for (let i = 0; i < pages; i++) {
    // spread items equally for each pagination, last pagination will likely be a remainder of the total items per page
    paginations.push(props.array.splice(0, props.perPage));
  }

  return (
    <>
      {paginations && (
        <ul className="inline-flex text-white rounded-lg">
          {/* LEFT BUTTON */}
          <li className="">
            <Button disabled={startBtnDisabled} onClick={onGotoStart} className="p-2 rounded-l-lg">{'<<'}</Button>
          </li>
          <li className="">
            <Button disabled={backBtnDisabled} onClick={onBack} className="p-2">{'<'}</Button>
          </li>


          <li className="px-5 w-4 text-lg flex justify-center items-center bg-white text-gray-600 border-t border-b border-gray-200 shadow-xl">
            {currentPage}
          </li>

          {/* RIGHT BUTTON */}
          <li className="">
            <Button disabled={forwardBtnDisabled} onClick={onForward} className="p-2">{'>'}</Button>
          </li>
          {/* RIGHT BUTTON */}
          <li className="">
            <Button disabled={endBtnDisabled} onClick={onGotoEnd} className="p-2 rounded-r-lg">{'>>'}</Button>
          </li>
        </ul>)
      }
    </>
  );
}

export default Pagination;