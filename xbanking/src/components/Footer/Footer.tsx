import Logo from '/img/logo.svg'
import Telegram from '/img/bxl_telegram.svg'
import Twitter from '/img/bxl_twitter.svg'
import Medium from '/img/bxl_medium.svg'
import Youtube from '/img/bxl_youtube.svg'

export default function Footer() {
  return (
    <footer className="py-16 border-t-2 border-lite-grey bg-white md:py-10 sm:py-8">
      <div className="mx-auto px-4 xl:px-8 w-full max-w-[1760px]">
        <div className="grid grid-flow-col items-start justify-between gap-10 lg:flex lg:flex-col lg:items-center">
          <div className='flex flex-col gap-5 justify-between h-full lg:w-full lg:items-center lg:gap-0'>
            <a href="#" className="w-fit">
              <img src={Logo} alt="logo icon" className="max-w-full" />
            </a>

            <div>
              <p className="text-sm text-black lg:hidden">
                &copy; xbanking.org 2021 - 2024 | <br />
                CRYPTO GEMS LTD 71-75 Shelton  <br />
                Street, London, UK, WC2H 9JQ <br />
              </p>
            </div>
          </div>

          <nav className="col-span-2 lg:col-span-1 lg:w-full">
            <div className="grid grid-cols-3 gap-5 justify-items-center sm:grid-cols-1">
              <ul className="flex flex-col gap-2 sm:min-w-32 sm:text-center">
                <li className="mb-2.5 font-bold text-base text-black">Resources</li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="#">
                    Super Wallet
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://xbanking.org/blog/">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://t.me/xbanking/1202">
                    Referral program
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://help.xbanking.org">
                    Help Center
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://api.xbanking.org/api/v2/assets">
                    API
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 sm:min-w-32 sm:text-center">
                <li className="mb-2.5 font-bold text-base text-black">Analytics</li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://dune.com/xbankingorg/xbanking">
                    Dune Analytics
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://defillama.com/protocol/xbanking">
                    DeFiLlama
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://www.stakingrewards.com/provider/xbanking">
                    Staking Rewards
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://skynet.certik.com/projects/xbanking">
                    Certik
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2 sm:min-w-32 sm:text-center">
                <li className="mb-2.5 font-bold text-base text-black">Company</li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="https://t.me/xbankingcommunity">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a className="text-grey font-normal text-base 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow"
                    target="_blank"
                    href="#">
                    Brand Kit
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <div className='flex flex-col gap-5 justify-between h-full lg:w-full lg:items-center'>
            <ul className='flex items-center gap-6 justify-end'>
              <li>
                <a href="https://t.me/xbanking" target="_blank" className='transition-all duration-300 filter-social'>
                  <img src={Telegram} alt="Telegram icon" width={26} height={26} />
                </a>
              </li>
              <li>
                <a href="https://x.com/xbanking_org" target="_blank" className='transition-all duration-300 filter-social'>
                  <img src={Twitter} alt="Twitter icon" width={26} height={26} />
                </a>
              </li>
              <li>
                <a href="https://xbanking.medium.com/" target="_blank" className='transition-all duration-300 filter-social'>
                  <img src={Medium} alt="Medium icon" width={26} height={26} />
                </a>
              </li>
              <li>
                <a href="https://youtube.com/@xbanking" target="_blank" className='transition-all duration-300 filter-social'>
                  <img src={Youtube} alt="Youtube icon" width={26} height={26} />
                </a>
              </li>
            </ul>

            <div className="flex items-end justify-end gap-3">
              <a href="#" className="text-grey font-normal text-xs 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow">
                Privacy Policy
              </a>
              <a href="#" className="text-grey font-normal text-xs 
                                transition-all duration-300 border-b border-b-transparent 
                                hover:border-b-yellow hover:text-yellow">
                Terms of Use
              </a>
            </div>
          </div>

          <div className='hidden lg:flex lg:w-full lg:justify-center'>
            <p className="text-sm text-black">
              &copy; xbanking.org 2021 - 2024 | <br />
              CRYPTO GEMS LTD 71-75 Shelton  <br />
              Street, London, UK, WC2H 9JQ <br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}