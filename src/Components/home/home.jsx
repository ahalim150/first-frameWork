import React from 'react'
import hero from "../../assets/imgs/home/avataaars.svg"

export default function home() {
  return (
    <>
    <div id='home' className='mt-5' style={{ backgroundColor: '#1abc9c' }}>
        <div className="mt-5 d-flex justify-content-center align-items-center text-white">
            <div className="mt-5 text-center">
                <img src={hero} className="mt-5 mb-3 w-75" />
                <div className="text-center pt-4 color-white">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">start Framework</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3 bg-white" style={{ height: '4px', width: '80px' }}></div>
                        <i className="fa-solid fa-star"></i>
                        <div className="line ms-3 bg-white" style={{ height: '4px', width: '80px' }}></div>
                    </div>
                </div>
                <div className='mb-5'>Graphic Artist - Web Designer - Illustrator</div>
            </div>
        </div>
    </div>
  </>
  )
}
