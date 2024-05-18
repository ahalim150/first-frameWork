import React from 'react'

export default function contacts() {
  return (
    <>
    <div id='contact' className="mt-5">
        <div className="mb-4">
            <div className="pt-3 container">
                <div className="text-center pt-4 mt-5">
                    <h2 className="text-uppercase mb-3 fs-1 fw-bolder">contact section</h2>
                    <div className="d-flex align-items-center justify-content-center mb-3">
                        <div className="line me-3" style={{ height: '4px', width: '80px', backgroundColor: '#2c3e50' }}></div>
                        <i className="fa-solid fa-star" style={{ Color: '#1abc9c' }}></i>
                        <div className="line ms-3" style={{ height: '4px', width: '80px', backgroundColor: '#2c3e50' }}></div>
                    </div>
                </div>
                <form className="w-50 p-3 mx-auto mt-5 ng-untouched ng-pristine ng-valid">
                    <input id="userName" type="text" placeholder="userName" name="userName" className="my-4 form-control border-0 border-bottom py-3" />
                    <input id="userAge" type="text" placeholder="userAge" name="userAge" className="my-4 form-control border-0 border-bottom py-3" />
                    <input id="userEmail" type="text" placeholder="userEmail" name="userEmail" className="my-4 form-control border-0 border-bottom py-3" />
                    <input id="userPassword" type="text" placeholder="userPassword" name="userPassword" className="my-4 form-control border-0 border-bottom py-3" />
                    <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}> send Message </button>
                </form>
            </div>
        </div>
    </div>
  </>
  )
}
