import "./WebBrowser.css";
import "./Experiencia.css";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";

export default function Experiencia() {
    return (
        <div className="frame">
            <Menu link="http://gustavo.oliveira.com/experience/" />
            <div className="experiencia-content">
                <h1>Minhas Experiências</h1>
                <h2>ZD ALIMENTOS | Análise de Dados e Previsão</h2>
                <h3>Programa InovaSkill</h3>
                <p>
                    Desenvolvimento de um modelo de previsão de demanda utilizando análise de dados, substituindo processos manuais baseados em planilhas. A solução contribuiu para a redução de 27% nos custos operacionais, apoiando decisões de planejamento e compras. <a href="https://docs.google.com/presentation/d/e/2PACX-1vT4eaWOjzUQ5DR8e25V2HONwv7ced_2-nlTJC5OYP7Spt79PEe-fth_-lJPg63-ZhypArrOXNZQTRQW/pub?start=false&loop=false&delayms=3000" target="_blank" rel="noopener noreferrer">Visualizar apresentação final</a>.
                </p>
                <strong>Atividades realizadas</strong>
                <ul>
                    <li>
                        Tratamento, organização e análise de dados históricos
                    </li>
                    <li>
                        Construção e validação de modelos preditivos
                    </li>
                    <li>
                        Geração de informações para apoio à tomada de decisão
                    </li>
                    <li>
                        Aplicação de conceitos de inovação e gestão de projetos
                    </li>
                </ul>
                <h3>Estágio</h3>
                <p>
                    Após o término do projeto inicial, realizei estágio na empresa para dar continuidade à solução, ampliando suas funcionalidades e apoiando o uso prático dos dados no dia a dia da organização.
                </p>
                <strong>Atividades realizadas</strong>
                <ul>
                    <li>
                        Continuidade no desenvolvimento da plataforma de previsão de demanda
                    </li>
                    <li>
                        Organização, tratamento e análise de dados operacionais
                    </li>
                    <li>
                        Apoio à tomada de decisão por meio de dados e indicadores
                    </li>
                    <li>
                        Criação e manutenção de dashboards no Power BI para visualização de informações estratégicas
                    </li>
                    <li>
                        Atualização e melhoria de relatórios gerenciais
                    </li>
                    <li>
                        Suporte à área na interpretação dos dados e resultados
                    </li>
                </ul>
                <h2>UNESP TUPÃ | Iniciação Científica em Desenvolvimento de Software</h2>
                <p>
                    Participação no desenvolvimento de um sistema eletrônico de monitoramento de plantas de soja em ambiente aberto, com foco em coleta de dados, baixo custo e escalabilidade. O projeto foi apresentado no VI Congresso Brasileiro de Iniciação Científica em Engenharia e Tecnologia, auxiliando na divulgação científica e obtendo reconhecimento acadêmico. <a href="https://docs.google.com/document/d/e/2PACX-1vQwObTMLteQyyESt04PqXYdueP7bvmGXQLOJUa___jiC2FIRIVDAq4VJZvXghae-w/pub" target="_blank" rel="noopener noreferrer">Visualizar resumo</a>.
                </p>
                <strong>Atividades realizadas</strong>
                <ul>
                    <li>
                        Integração de sensores e módulos de comunicação
                    </li>
                    <li>
                        Desenvolvimento de soluções eficientes e de baixo consumo energético
                    </li>
                    <li>
                        Análise e acompanhamento de dados coletados
                    </li>
                    <li>
                        Apresentação do projeto em congresso científico nacional
                    </li>
                </ul>
                <h2>ATIVIDADES COMPLEMENTARES</h2>
                <h3>Oficina de Cerâmica Chieko Nishimura | Voluntariado</h3>
                <p>
                    Atuo como voluntário na oficina de cerâmica da Fundação Shunji Nishimura de Tecnologia, auxiliando na organização das atividades e no apoio aos participantes. Também elaboro e modelo peças e esculturas que exigem colaboração, paciência e atenção aos detalhes.
                </p>
            </div>
            <Footer />
        </div>
    )
}
