import React, { Component, useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from "axios";
import { useHistory } from "react-router-dom";
const ProductsAdd = (props) =>{

  let history = useHistory();
    const [state,setState] = useState({
      name: '',
      location: ''
  });
  


const handleInput = (e) => {
  setState({...state,[e.target.name]: e.target.value});
}

const savePost = async (e) => {
  e.preventDefault();

  const res = await axios.post("http://localhost:8000/api/create", state);
  if(res.data.status === 200){
      history.push("/product-ui/product-list");
  }
}
 
    return (
      <div>
        <div className="col-md-8 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Add Product Form</h4>
                <p className="card-description"> Add Product form layout </p>
                <form className="forms-sample" onSubmit={savePost}>
                  <Form.Group className="row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Name</label>
                    <div className="col-sm-9">
                    <input type="text" name="name" className="form-control highlight" 
                                value={state.name} onChange={handleInput}
                                placeholder="Enter the Name" required/>
                    </div>
                  </Form.Group>
                  <Form.Group className="row">
                    <label htmlFor="Location" className="col-sm-3 col-form-label">Location</label>
                    <div className="col-sm-9">
                    <input type="text" name="location" className="form-control highlight" 
                                value={state.location} onChange={handleInput}
                                placeholder="Enter the Location" required/>
                    </div>
                  </Form.Group>
                 
                
                  <button type="submit" className="btn btn-primary mr-2">Submit</button>
                  <button className="btn btn-dark">Cancel</button>
                </form>
                {console.log(state)}
              </div>
            </div>
          </div>
        
      </div>
    );
  
}

export default ProductsAdd;