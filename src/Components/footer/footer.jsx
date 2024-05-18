import React from 'react'

export default function Footer() {
  return (
    <>
    <footer className="text-white" style={{ backgroundColor: '#2c3e50' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 py-5">
            <div className="py-5 text-center">
              <h2>LOCATION</h2>
              <h5>2215 John Daniel Drive</h5>
              <h5>Clark, MO 65243</h5>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 py-5">
            <div className="py-5 text-center">
              <h2>AROUND THE WEB</h2>
              <div className="mt-3 d-flex flex-row justify-content-center">
                <div><i className="fa-brands fa-facebook mx-3 icon"></i></div>
                <div><i className="fa-brands fa-twitter mx-3 icon"></i></div>
                <div><i className="fa-brands fa-linkedin-in mx-3 icon"></i></div>
                <div><i className="fa-solid fa-globe mx-3 icon"></i></div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 py-5">
            <div className="py-5 text-center">
              <h2>ABOUT FREELANCER</h2>
              <h5>Freelance is a free to use, licensed Bootstrap theme created by Route</h5>
            </div>
          </div>
        </div>
      </div>
    </footer>
        </>
  )
}
