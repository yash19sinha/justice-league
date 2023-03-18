import React from 'react'

const Aboutus = () => {
  return (
    <div>
        <div className="hero min-h-screen bg-slate-400">
        <div className="hero-content flex-col lg:flex-row">
            <img src="/images/img.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
        </div>
        <div className='bg-slate-900 p-5'>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box justify-center m-5">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box justify-center m-5">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box justify-center m-5">
            <div className="collapse-title text-xl font-medium">
                Focus me to see content
            </div>
            <div className="collapse-content"> 
                <p>tabIndex={0} attribute is necessary to make the div focusable</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus