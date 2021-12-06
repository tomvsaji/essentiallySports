import Image  from "next/image"
import style from "./navbar.module.css"

export default function navbar() {
    return (
        <div className={style.container}>
            <Image src="/images/image 2.png" width="25" height="25" />
            <Image src="/images/image 1.png" width="230" height="42" />
            <Image src="/images/image 3.png" width="18" height="18"/>
        </div>
    )
}


