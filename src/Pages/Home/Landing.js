import React from 'react';
import busketGirl from '../../assets/images/bucketgirl.png';
const Landing = () => {
    return (
        <>
            <div class="hero h-screen lg:h-[85vh] bg-accent mt-16">
                <div class="hero-content flex-col lg:flex-row">

                    <div className=''>
                        <h1
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="100"
                            class="text-5xl font-bold">Professional Clining service</h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="900"
                            data-aos-delay="400"
                            class="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button
                            data-aos="zoom-in"
                            class="btn btn-primary">Get Started</button>
                    </div>
                    <div data-aos="fade-left" className='h-[100vh] lg:w-[500px] shrink-0'>
                        <img src={busketGirl} class="max-w-44 " alt='' />
                    </div>
                </div>

            </div>
            <div className='shadow-2xl p-10 mt-[-50px] relative z-30 w-5/6 rounded-2xl bg-base-200 mx-auto'>
                <h1 className='text-2xl mb-5 text-primary'>Get Free Estimate</h1>
                <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-2 gap-3'>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                </div>
                <button className='btn btn-primary mt-4'>Get a Quote</button>
            </div>
        </>
    );
};

export default Landing;