import { ReactNode, useState } from "react"
import { Container } from "./style"
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'

interface IShow {
    children: ReactNode;
    title: string;
}

export function ListShow({ children, title }: IShow) {

    const [show, setShow] = useState<boolean>(false)

    return (
        <Container
            show={show}
        >
            <div onClick={() => {
                show ? setShow(false) : setShow(true)
            }}>{title} {show ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</div>
            <ul >
                {children}
            </ul>
        </Container>
    )
}