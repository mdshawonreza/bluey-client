import image6 from '../../assets/Group 63.png'
import './buybluey.css'

const Buybuley = () => {
    return (
        <section id='joinUs' className="max-w-[400px] lg:max-w-[950px] mx-auto py-3 md:py-20 flex flex-col md:flex-row justify-center items-end gap-12 md:gap-0 min-h-screen">

            <div className="flex justify-center items-end ml-0 md:ml-[82px]">
                <div className="w-20 md:w-56 h-96 border-curve ">

                    <div className='h-80 border-small flex justify-center flex-col  mr-12 items-center'>
                        <p className='curve-p text-white font-semibold'>Create a Wallet</p>

                    </div>
                    <div className='h-32 flex justify-center -ml-16 -mt-[2px]'>
                        <div className='w-14 h-8 absolute bg-[#010637fa] border-extra-small rounded-b-full '>


                        </div>

                    </div>
                </div>
                <div className="w-20 md:w-56 h-80 -mx-8 md:-mx-20 border-curve ">

                    <div className='h-4/5 border-small flex justify-center mr-12 items-center'>
                        <p className='curve-p text-white font-semibold'>Get Some Sol</p>

                    </div>
                    <div className='h-1/5 flex justify-center -ml-16 -mt-[2px]'>
                        <div className='w-14 h-8 absolute bg-[#010637fa] border-extra-small rounded-b-full '>


                        </div>

                    </div>
                </div>
                <div className="w-20 md:w-56  h-72  border-curve ">
                    <div className='h-[224px] border-small flex justify-center mr-12 items-center'>
                        <p className='curve-p text-white font-semibold'>Go to Uniswap</p>

                    </div>
                    <div className=' flex justify-center -ml-16 -mt-[2px]'>
                        <div className='w-14 h-8 absolute bg-[#010637fa] border-extra-small rounded-b-full '>


                        </div>

                    </div>

                </div>
                <div className="w-20 md:w-56 -mx-8 md:-mx-20  h-64 border-curve  ">

                    <div className='h-[192px] border-small flex justify-center mr-12 items-center'>
                        <p className='curve-p text-white font-semibold'>Go to BLUEY</p>

                    </div>
                    <div className='flex justify-center -ml-16 -mt-[2px] '>
                        <div className='w-14 h-8 absolute bg-[#010637fa] border-extra-small rounded-b-full '>
                            


                        </div>

                    </div>
                </div>


            </div>
            <div className='flex flex-col   max-w-xl mx-auto'>
                <h1 className=' absolute  -ml-60 -mt-28 text-xl md:text-[57px] text-[#fff] font-semibold'>
                    How to buy $BLUEY
                </h1>
                <img className='w-[250px] md:w-[270px] h-[250px] md:h-[270px] ' src={image6} alt="" />
            </div>

        </section>
    );
};

export default Buybuley;