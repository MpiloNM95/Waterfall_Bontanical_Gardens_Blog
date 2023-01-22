import Link from 'next/link';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return( 
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#4285f4] flex items-center">
                <ArrowUturnLeftIcon className="h-5 w-6 text-[#4285f4] mr-2"/>
                Go To Website
            </Link>
            
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar