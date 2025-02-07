export default function Footer(){
    return(
        <>
<footer >
<div className="relative border-t bg-gray-700 border-[#353951] text-white">
<div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-4">
    <div className="flex justify-center -z-40">
        <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent">
        </div>
    </div>
    <div className="flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm lg:text-lg">© Developed by <a target="_blank" className="text-orange-500" href="www.linkedin.com/in/mujtaba-sohail-dar-27937b280">Mujtaba Sohail Dar</a></p>
        <div className="flex items-center gap-5">
            <a target="_blank" className="flex items-center gap-2 uppercase hover:text-[#16f2b3]" href="https://github.com/MDar123">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"></path>
                </svg><span className="text-sm lg:text-lg">Star</span>
            </a>
        </div>
    </div>
</div>
</div>
    </footer>
        </>
    )
}