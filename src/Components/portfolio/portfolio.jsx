import React from 'react'
import './portfolio.css'

import img1 from "../../assets/imgs/portfolio/port1.png"
import img2 from "../../assets/imgs/portfolio/port2.png"
import img3 from "../../assets/imgs/portfolio/port3.png"

export default function portfolio() {
  return (
    <>
    <div id='portfolio' style={{ backgroundColor: '#1abc9c' }}>
        <div className="pt-5 mt-5">
                <div className="text-center pt-4 pb-4">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder text-white">portfolio component</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white" style={{ height: '4px', width: '80px' }}></div>
                        <i className="fa-solid fa-star text-white"></i>
                        <div className="line ms-3 bg-white" style={{ height: '4px', width: '80px' }}></div>
                    </div>
                </div>
        <div className="container pb-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="rounded-3 overflow-hidden position-relative">
                        <img className="w-100 rounded-3" src={img1} />
                        <div className="shadow position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="rounded-3 overflow-hidden position-relative">
                        <img className="w-100 rounded-3" src={img2} />
                        <div className="shadow position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="rounded-3 overflow-hidden position-relative">
                        <img className="w-100 rounded-3" src={img3} />
                        <div className="shadow position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="rounded-3 overflow-hidden position-relative">
                        <img className="w-100 rounded-3" src={img1} />
                        <div className="shadow position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="rounded-3 overflow-hidden position-relative">
                        <img className="w-100 rounded-3" src={img2} />
                        <div className="shadow position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="rounded-3 overflow-hidden position-relative">
                        <img className="w-100 rounded-3" src={img3} />
                        <div className="shadow position-absolute start-0 w-100 top-0 h-100 d-flex justify-content-center align-items-center" style={{ cursor: 'pointer' }}>
                            <i className="text-white fa-solid fa-plus fa-6x"></i>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </>
  )
}
