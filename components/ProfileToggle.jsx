
import Link from "next/link";
import {DesctopToggle , MobileToggle} from "./ui/Toggle";
import ThemeToggle from "./ThemeToggle";


export const DesktopProfileToggle = ({session}) => {
  return (

    <div className="flex items-center justify-center gap-4">
      {/* <ThemeToggle /> */}
        <ThemeToggle />
        <DesctopToggle session={session} />
    </div>
  )
}



export const MobileProfileToggle = ({session}) =>{
    return (
      <div className="flex items-center justify-center gap-4">
         {/* <ThemeToggle /> */}
          <ThemeToggle />
          <MobileToggle session={session} />
      </div>
      )
}
