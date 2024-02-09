

export default function Events() {
    return (
        <>
        <section>
            <div className="section-container my-20">
                <h3 className="">Book with Jan for your next event</h3>
                <p className="text-gray-700">Harpist Jan Jennings plays elegant harp music that will make your event unforgettable! Jan has played for events at almost every wedding venue in Central Florida for more than 25 years. As author of the book, "The Harpist's Complete Wedding Guidebook," she considers weddings her specialty and will work with you to make your event unique and special. She plays all musical styles such as romantic ballads, classical, movie themes, pop, Celtic, country, and more! Clients often comment on Jan's attention to detail, vast repertoire, and professionalism. Let Jan provide the music that your guests will rave about long after your wedding!</p>

                {/* button container */}
                <div className="flex flex-col justify-center w-full space-y-6 text-xl md:flex-row md:space-y-0 md:space-x-4">
                    <a href="/Contact" className="btn my-16 ">Contact Jan</a>
                </div>

                {/* to do: add items container with up to date links */}
            </div>
        </section>
        </>
    )
}