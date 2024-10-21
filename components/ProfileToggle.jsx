
import Link from "next/link";
import {DesctopToggle , MobileToggle} from "./ui/Toggle";


export const DesktopProfileToggle = ({session}) => {
  return (

    <div className="flex items-center justify-center gap-4">
      {/* <ThemeToggle /> */}
        <DesctopToggle session={session} />
    </div>
  )
}



export const MobileProfileToggle = ({session}) =>{
    return (
      <div className="flex items-center justify-center gap-4">
         {/* <ThemeToggle /> */}
          <MobileToggle session={session} />
      </div>
      )
}
