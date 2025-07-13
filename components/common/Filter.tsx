import Button from "./Button"

const Filter:React.FC = () => {
    return(
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-center gap-4">
                <Button
                    type="button"
                    variant="ghost"
                >
                    All
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                >
                    Top Villa
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                >
                    Free Reschedule
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                >
                    Book Now, Pay Later
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                >
                    Self Check In
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                >
                    Instant Book
                </Button>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
                <Button
                    type="button"
                    variant="ghost"
                    icon= {true}
                >
                    Filter {<img width={20} height={18} src={"/assets/filter.svg"} />}
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                >
                    <span className="text-gray-400">filter by:</span>Highest Price
                </Button>
            </div>
        </div>
    )
}

export default Filter