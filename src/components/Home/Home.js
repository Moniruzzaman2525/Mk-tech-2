


import React from 'react';

const Home = () => {
    return (
        <div className="carousel my-20 w-full">
            <div id="slide1" className="carousel-item  relative w-full">
                <div className='md:flex items-center mx-auto'>
                    <div className='flex-1'>
                        <img className='w-full mb-10 md:w-2/3 mt-10 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Sheikh_Mujibur_Rahman_in_1950.jpg/220px-Sheikh_Mujibur_Rahman_in_1950.jpg" alt="" />
                    </div>
                    <div className='flex-1 text-justify mt-10'>
                        <h2 className='text-xl md:text-3xl text-center'>মুজিবের অঙ্গীকার উন্নয়ন <br /> অর্থায়নের উৎস হবে পুঁজি বাজার</h2>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='md:flex items-center mx-auto'>
                    <div className='flex-1'>
                        <img className='w-full mb-10 md:w-2/3 mt-10 mx-auto' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Sheikh_Mujibur_Rahman_Announcing_6_Points_At_Lahore.jpg/220px-Sheikh_Mujibur_Rahman_Announcing_6_Points_At_Lahore.jpg" alt="" />
                    </div>
                    <div className='flex-1 text-justify mt-10'>
                        <h2 className='text-xl md:text-3xl text-center'>মুজিবের অঙ্গীকার উন্নয়ন <br /> অর্থায়নের উৎস হবে পুঁজি বাজার</h2>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Home;