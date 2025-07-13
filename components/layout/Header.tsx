import SearchBar from "@/components/common/SearchBar"
import Image from "next/image"
import Button from "../common/Button"
import IconGallery from "../common/IconList"

const Header: React.FC = () => {
    return(
        <>
        <div className="flex flex-col gap-4">
            <div className="bg-[#34967C] text-white w-full h-12 flex flex-row items-center justify-center gap-4">
                <Image 
                    src="/assets/case.svg"
                    alt=""
                    width={24}
                    height={24}
                />
                <p>Overseas trip? Get the latest information on travel guides</p>
                <Button 
                type="button"
                variant="black">
                    More info
                </Button>
            </div>

            <div className="flex flex-row justify-between items-center px-[60px]">
                <Image 
                    src="/assets/alx-logo.svg"
                    alt="ALX logo"
                    width={58}
                    height={30}
                />

                <SearchBar />
                
                <div className="flex flex-row gap-2">
                    <Button
                    type="button"
                    variant="primary"
                    >
                        Sign in
                    </Button>
                    <Button
                    type="button"
                    variant="secondary"
                    >
                        Sign in
                    </Button>
                </div>
            </div>

            <div className="px-[60px] h-[84px]">
                <IconGallery />
            </div>
        </div>
        </>
    )
}

export default Header