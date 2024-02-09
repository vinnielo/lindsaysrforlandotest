import sheetMusic from '../assets/images/sheet-music.jpg'
import openLotus from '../assets/images/openLotus.jpeg'


export default function Contact() {
    return (
       <>
       
        <section id="contact">
            <div className="text-center py-20 bg-amber-50">
                <h2 className='text-amber-600'>
                    Contact
                </h2>
                <p className="section-content mb-18">
                For questions or to be added to the monthly newsletter please contact us
                </p>
                
            </div>
        </section>

       <section id="contact-details">
        <div className=" pl-10 pr-10 bg-amber-50 md:pb-10">
            <div className="relative flex flex-col md:flex-row md:space-x-32">
                {/* image */}
                <div className="md:w-1/2">
                    <img src={openLotus} alt="Jan" className=" top-0 right-[50%]"/>
                </div>
                {/* items container */}
                <div className="flex flex-col mt-16 mb-24 space-y-12 text-xl md:w-1/2 md:mb-60 md:text-left md:pl-16">
                    {/* item 1 */}
                    <div>
                        <h4>email</h4>
                        <a href='mailto:orlandogroup.srf@gmail.com' className="max-w-md text-gray-700">orlandogroup.srf@gmail.com</a>
                    </div>
                    {/* item 2 */}
                    <div>
                        <h4>phone</h4>
                        <p className="max-w-md text-gray-700">(760) 613-7253</p>
                    </div>
                    {/* item 3 */}
                    <div>
                        <h4>address</h4>
                        <p className="max-w-md text-gray-700">Maitland Wellness Center<br />237 Lookout Place <br /> Maitland, FLORIDA, 32751</p>
                    </div>
                </div>
            </div>
        </div>
       </section>
      
       
       </> 
    )
}
