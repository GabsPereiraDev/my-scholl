import { ListShow } from "./show";
import { Container } from "./style";
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io'

export function AsideDashboard() {
    return (
        <Container>
            <header>
                Socrates
            </header>
            <div>
                <ul>
                    <ListShow title="Dashboard">
                        <li><IoIosArrowForward />administração</li>
                        <li><IoIosArrowForward />Estudantes</li>
                        <li><IoIosArrowForward />Parentes</li>
                    </ListShow>
                    <ListShow title="Estudantes">
                        <li><IoIosArrowForward />Todos os Estudantes</li>
                        <li><IoIosArrowForward />Detalhes Sobre Estudantes</li>
                        <li><IoIosArrowForward />Novo Estudante</li>
                    </ListShow>
                    <ListShow title="Professores">
                        <li><IoIosArrowForward />Todos os Professores</li>
                        <li><IoIosArrowForward />Delhates de Professor</li>
                        <li><IoIosArrowForward />Novo Professor</li>
                    </ListShow>
                    <ListShow title="Livraria">
                        <li><IoIosArrowForward />Todos Livros</li>
                        <li><IoIosArrowForward />Adicionar Livro</li>
                    </ListShow> 
                        <ListShow title="Contas">
                            <li><IoIosArrowForward />Cobranças de taxas</li>
                            <li><IoIosArrowForward />Criar nova Cobrança</li>
                            <li><IoIosArrowForward />Todas as Despesas</li>
                            <li><IoIosArrowForward />Adicionar Despesas</li>
                        </ListShow>
                        <ListShow title="Classes">
                            <li><IoIosArrowForward />Todas as Classes</li>
                            <li><IoIosArrowForward />Adicionar Nova Classe</li>
                        </ListShow>
                        <li>
                            <div>Assuntos</div>
                        </li>
                        <li>
                            <div>Rotina de Classe</div>
                        </li>
                </ul>
            </div>
        </Container>
    )
}