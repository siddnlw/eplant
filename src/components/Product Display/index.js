import './style.css';
import React, { useState } from 'react';
import ProductTile from '../Product Tile';
import { Slider, RangeSlider, Row, Col, InputGroup, InputNumber } from 'rsuite';

function ProductDisplay() {
  const [value, setValue] = React.useState([10, 50]);
  return (
    <div className="ProductDisplay">
      <div className="filters-section">
        <div className="filters-container">
          <div className="filters-title">
            Shop by Departments
          </div>
          <select className="filter" id="">
            <option value="" selected disabled>Select a item</option>
            <option value="">Tree</option>
            <option value="">Plants</option>
            <option value="">Flowers</option>
          </select>
          <div className='filter-links'>
            <span>Fruits Trees & Bushes</span>
            <span>Seeds</span>
            <span>Bushes & Shrubs</span>
            <span>Perennials</span>
            <span>Succulents</span>
            <span>Trerrariums</span>
            <span>Houseplants</span>
            <span>Vines & Groundcovers</span>
            <span>Bulbs</span>
            <span>Flowers</span>
          </div>
          <div className="price-range">
            <h5>Price Range</h5>
            <hr />
            <div className="price-range-slider">
              <Row>
                <Col>
                  <RangeSlider
                    progress
                    style={{ marginTop: 16 }}
                    value={value}
                    onChange={value => {
                      setValue(value);
                    }}
                  />
                </Col>
                <Col>
                  <InputGroup>
                    <InputNumber
                      min={0}
                      max={100}
                      value={value[0]}
                      onChange={nextValue => {
                        const [start, end] = value;
                        if (nextValue > end) {
                          return;
                        }
                        setValue([nextValue, end]);
                      }}
                    />
                    <InputNumber
                      min={0}
                      max={100}
                      value={value[1]}
                      onChange={nextValue => {
                        const [start, end] = value;
                        if (start > nextValue) {
                          return;
                        }
                        setValue([start, nextValue]);
                      }}
                    />
                  </InputGroup>
                </Col>
              </Row>
            </div>
          </div>
          <div className="size-available">
            <h5>Size</h5>
            <hr />
            <div className="sizes">
              <div>
                <span>Small</span>
                <span>(300)</span>
              </div>
              <div>
                <span>Medium</span>
                <span>(125)</span>
              </div>
              <div>
                <span>Large</span>
                <span>(50)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section">
        <div className="product-section-header">
          <div className="product-title-bar">
            <span className="product-title-bar-active">All Products</span>
            <span>New Arrivals</span>
            <span>Sale</span>
          </div>
          <div className="product-sort-by-container">
            <select className="product-sort-by" name="" id="">
              <option value="" selected disabled>Sort by</option>
              <option value="">Tree</option>
              <option value="">Flowers</option>
            </select>
          </div>
        </div>
        <div className="product-section-products">
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
            <ProductTile/>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;