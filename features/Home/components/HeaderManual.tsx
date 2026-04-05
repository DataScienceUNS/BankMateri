import { SearchField } from "@heroui/react"

export const HeaderManual = () => {
    return (
        <header className="flex w-full items-center justify-between bg-blue-500 px-6 py-4 text-white">
            
            
            <div className="font-bold">
                icon
            </div>

            <div className="hidden md:block mx-4 flex-grow max-w-md">
                <div className="flex flex-col gap-4">
                    <SearchField name="search">
                        <SearchField.Group>
                        <SearchField.SearchIcon />
                        <SearchField.Input className="w-[280px]" placeholder="Search Materi..." />
                        <SearchField.ClearButton />
                        </SearchField.Group>
                    </SearchField>
                </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
                <div className="flex justify-between align-between">
                    <div>
                        Home
                    </div>
                    <div>
                        Materi
                    </div>
                    <div>
                        About us
                    </div>
                </div>
                <div>
                    Profile
                </div>
            </div>

            <div className="block md:hidden">
                hamburger
            </div>
            
        </header>
    )
}