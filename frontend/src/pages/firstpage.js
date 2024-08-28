import React from 'react';

const Firstpage = () => {
  return (
    <div className="container text-center">
      <h1 className="my-4">Welcome to My Home Page</h1>
      <div className="row">
        <div className="col-12 col-md-4 mb-3">
          <img src='photo.avif' alt="Display" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src='photo1.avif' alt="Display" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src='photo2.avif' alt="Display" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src='photo.avif' alt="Display" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src='photo1.avif' alt="Display" className="img-fluid rounded" />
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src='photo2.avif' alt="Display" className="img-fluid rounded" />
        </div>
      </div>
    </div>
  );
}

export default Firstpage;
