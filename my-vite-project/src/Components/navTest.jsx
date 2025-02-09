const navTest = () => {

    return(
        <header className="bg-white w-full">
        <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="" /> 
            </a>
            </div>
            <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                <span className="sr-only">Open main menu</span>
                <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
            <div className="relative">
                <button type="button" className="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900" aria-expanded="false">
                Product
                <svg className="size-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                    <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
                </button>
            </div>

            <a href="#" className="text-sm/6 font-semibold text-gray-900">Features</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Marketplace</a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Company</a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
        </nav>

        </header>
    )
}

export default navTest;