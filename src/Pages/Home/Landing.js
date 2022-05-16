import React from 'react';
import busketGirl from '../../assets/images/bucketgirl.png';
const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[85vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div className=' '>
                        <h1 class="text-5xl font-bold">Professional Clining service</h1>
                        <p class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[100vh] lg:w-[500px] shrink-0'>
                        <img src={busketGirl} class="max-w-44 " alt='' />
                    </div>
                </div>

            </div>
            <div className='shadow-lg p-12'>
                <h1>Get Free Estimate</h1>
                <div className=''>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                </div>
            </div>
        </>
    );
};

export default Landing;