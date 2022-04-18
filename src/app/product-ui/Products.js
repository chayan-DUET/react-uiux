import React, { Component,  useEffect, useState } from 'react';

class Products extends Component {
  state = {
    books: []
}

componentDidMount() {
  fetch('http://localhost:8000/api/view')
  .then((response) => response.json())
  .then(data => {
    {console.log(data.response)}
      this.setState(state =>
      {return state.books = data.response })
  });
}
  render () {
    return (
      <div>
       {/*  <ul>
                {this.state.books.map((book) => (
                    <li key={book.id}>{book.name}</li>
                ))}
            </ul> */}
        <div className="page-header">
          <h3 className="page-title"> Basic Tables </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Basic tables</li>
            </ol>
          </nav>
        </div>
        <div className="row">
          <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Basic Table</h4>
                <p className="card-description"> Add className <code>.table</code>
                </p>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>location</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.books.map(book => (<tr key = {book.id}>
                      <td>{book.name}</td>
                      <td>{book.location}</td>
                  </tr>))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Products;