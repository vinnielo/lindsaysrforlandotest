import facebookIcon from '../assets/images/icon-facebook.svg'
import instagramIcon from '../assets/images/icon-instagram.svg'
import youTubeIcon from '../assets/images/youtube-logo.svg'
import logo from '../assets/images/logo.png'
import selfRealizationLogo from '../assets/images/srf-wordmark-navy.png'
import srfLogo from '../assets/images/Updated_logo.png'


export default function Footer() {
    return (
        <footer className="bg-gray-200">
            {/* <!-- container --> */}
            <div className="container max-w-6xl py-10 mx-auto">
                {/* <!-- footer flex container --> */}
                <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                    {/* <!-- menu and logo container  --> */}
                    <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-8 pb-10">
                        {/* <!-- logo --> */}
                        {/* <div className="h-8">
                        <img src={srfLogo} alt="Jan Jennings Logo" className="w-14 md:ml-3"/>
                        </div> */}
                        <div className="md:pl-6 flex">
                            <img className="max-h-10" src={srfLogo} alt="Self Realization Fellowship Logo" />
                            <img className="max-h-10 pr-10 " src={selfRealizationLogo} alt="Self Realization Fellowship Logo" />
                        </div>
                        <p className='text-amber-600 md:pl-16  text-xl'>Orlando Meditation Group</p>

                    </div>

                    {/* <!-- social and copy container --> */}
                    <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                        {/* <!-- icons container --> */}
                        <div className="flex items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0 md:pr-10">
                            <p>Connect with SRF</p>
                            {/* <!-- icon 1 --> */}
                            <div className="h-8 group">
                                <a href="https://www.facebook.com/selfrealizationfellowship/" target="_blank">
                                    <img src={facebookIcon} alt="Facebook Icon" className="duration-200 ficon h-6" />
                                </a>
                            </div>
                            {/* <!-- icon 2 --> */}
                            <div className="h-8 group">
                                <a href="https://www.instagram.com/selfrealizationfellowship/" target="_blank">
                                    <img src={instagramIcon} alt="Instagram Icon" className="h-6" />
                                </a>
                            </div>
                            {/* <!-- icon 3 --> */}
                            <div className="h-8 group">
                                <a href="https://www.youtube.com/user/YoganandaSRF" target="_blank">
                                    <img src={youTubeIcon} alt="YouTube Icon" className="h-6" />
                                </a>
                            </div>


                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-center mx-auto space-x-4 md:justify-end md:mx-0 md:pr-10">
                          <a href='https://yogananda.org/contact-us-free-literature' target="_blank"><p>Free Literature</p></a>
                          <a href='https://yogananda.org/frequently-asked-questions' target="_blank"><p>FAQ</p></a>
                          <a href='https://yogananda.org/lessons' target="_blank"><p>Apply for Lessons</p></a>
                          <a href='https://yogananda.org/locations-map' target="_blank"><p>Find a Location</p></a>
                        </div>
                        {/* <!-- copy --> */}
                        <div className="text-xs">
                            &copy; 2024 SRF Orlando Meditation Group. All Rights Reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}