
import { Footer } from "../footer";
import { Header } from "../Header";
import { AsideDashboard } from "./aside";
import { Container } from "./style";


export function Dashboard() {
    return (
        <Container>
            <AsideDashboard />
            <div>
                <Header></Header>
            </div>
        </Container>
    )
}