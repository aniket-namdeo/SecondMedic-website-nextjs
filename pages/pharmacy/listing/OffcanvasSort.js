// components/OffcanvasSort.js
import React from "react";
import { Offcanvas } from "react-bootstrap";

const OffcanvasSort = ({ show, handleClose }) => {
  return (
    <Offcanvas
      show={show}
      onHide={handleClose}
      placement="bottom"
      className="filter-menu"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sort by</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="custom-radio">
          <input type="radio" name="sort" id="relevances" hidden />
          <label for="relevances">Relevances</label>
        </div>
        <div className="custom-radio">
          <input type="radio" name="sort" id="lowtohigh" hidden />
          <label for="lowtohigh">Price: Low to High</label>
        </div>
        <div className="custom-radio">
          <input type="radio" name="sort" id="hightolow" hidden />
          <label for="hightolow">Price: High to Low</label>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default OffcanvasSort;
