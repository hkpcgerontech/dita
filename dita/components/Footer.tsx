import router from "next/dist/client/router";

function Footer() {
    return (
    
    <main>
        <div className="justify-items-center grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("/")} className="font-bold hover:scale-110 cursor-pointer">HOME</h5>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("services")} className="font-bold hover:scale-110 cursor-pointer">SERVICES</h5>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("aboutUs")} className="font-bold hover:scale-110 cursor-pointer">ABOUT</h5>
            </div>

            <div className="space-y-4 text-xs text-gray-800">
                <h5 onClick={() => router.push("contactUs")} className="font-bold hover:scale-110 cursor-pointer">CONTACT</h5>
            </div>

        </div>

        <div>


            
        </div>


    </main>
    
    
    );
}

export default Footer;