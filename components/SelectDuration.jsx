
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const SelectDuration = ({onUserSelect}) => {
  const options = ["30 sec", "60 sec"]

  
  return (
    <div className='mt-5'>

      {/* HEADER */}
      <div className=''>
        <h1 className="text-lg text-gray-800 font-medium">Duration</h1>
        <p className="text-md text-gray-500 ">Select the duration of the video</p>
      </div>

      {/* DROPDOWN */}
      <div className=''>
        <Select onValueChange={(value)=>{onUserSelect('duration', value)}}>
          <SelectTrigger className="w-full mt-2 p-6 lg:text-[16px]">
            <SelectValue placeholder="Duration Time" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default SelectDuration