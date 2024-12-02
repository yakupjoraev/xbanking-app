import Logo from '/img/logo.svg';
import Chrome from '/img/chrome.svg';
// import Certik from '/img/certik.svg';

export default function Header() {
    return (
        <header className="py-9 xl:py-6 lg:py-4">
            <div className="mx-auto px-4 xl:px-8 w-full max-w-[1760px]">
                <nav className="flex justify-between items-center gap-20 lg:flex-col lg:gap-6">
                    <div className='flex justify-between items-center gap-20 xl:gap-10 lg:gap-6'>
                        <a href="#" className="w-fit xl:w-40 lg:w-32">
                            <img src={Logo} alt="logo icon" className="max-w-full" />
                        </a>

                        <div className='w-fit'>
                            <ul className='flex gap-12 items-center xl:gap-6 lg:gap-4'>
                                <li>
                                    <a className='text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow' href="#">Pools</a>
                                </li>
                                <li>
                                    <a className='text-black font-semibold text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow' href="#">Savings</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-fit md:w-full'>
                        <ul className='flex gap-5 items-center md:flex-col'>
                            <li className='md:w-full flex'>
                                <a href="" className='min-w-32 w-fit py-[10px] px-6 bg-purple rounded-lg 
                            text-white font-semibold text-center text-base border-2 border-transparent
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24 md:w-full md:text-center'>
                                    Dashboard
                                </a>
                            </li>
                            <li className='md:w-full flex'>
                                <a href="" className='min-w-32 w-fit py-[10px] px-6 bg-transparent rounded-lg 
                            text-black font-semibold text-center text-base border-2 border-yellow
                            transition-all duration-300 hover:text-yellow hover:border-yellow
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24 md:w-full md:text-center'>
                                    Support
                                </a>
                            </li>

                            <li className='flex items-center gap-5 md:w-full'>
                                <a href="" className='flex items-center gap-2 md:w-full'>
                                    <div className='w-10 h-10 min-w-10 bg-lite-grey rounded-full'></div>
                                    <div className='bg-lite-grey rounded-2xl py-[10px] px-4 font-weight-semibold text-base text-grey'>0x3214...4df54gdfg</div>
                                </a>

                                <a href="" className='flex items-center justify-center'>
                                    <img width={42} height={42} src={Chrome} alt="google chrome" />
                                </a>
                            </li>
                        </ul>

                        {/* <ul className='flex gap-5 items-center'>
                            <li><a href="" target='_blank'><img src={Certik} alt="Certik" className='xl:w-28 lg:w-20' /></a></li>
                            <li>
                                <a href="" className='min-w-32 w-fit py-3 px-6 bg-blue rounded 
                            text-white font-semibold text-base border-2 border-transparent
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24'>
                                    Dashboard
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </nav>
            </div>
        </header>
    );
}
