import SelectDuration from "@/components/SelectDuration"
import SelectTopic from "@/components/SelectTopic"
import SelectTStyle from "@/components/SelectTStyle"
import { Button } from "@/components/ui/button"



const CreateNew = () => {
  return (
    <div className='p-4 bg-[#F7F8FA]  w-full h-full rounded-md'>
        <h2 className='text-xl font-bold'>Create a new video</h2>

        <div className='mt-10 '>
        {/* SELECT TOPIC */}
        <SelectTopic />

        {/* SELECT STYLE */}
        <SelectTStyle />

        {/* SELECT DURATION */}
        <SelectDuration />

        {/* CREATE BUTTON */}
        <Button>Create</Button>
                    
        </div>
    </div>
  )
}

export default CreateNew