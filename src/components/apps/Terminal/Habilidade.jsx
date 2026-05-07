import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import { commands } from './Terminal';
import './Terminal.css';

export default function Habilidade() {
  return (
    <div className="terminal-frame">
      <TerminalContextProvider>
        <ReactTerminal
          welcomeMessage={
            <div>
                <p>+{'-'.repeat(22)}+</p>
                <p>| Habilidades Técnicas |</p>
                <p>+{'-'.repeat(22)}+</p>
                <br />
                <p>LINGUAGENS:</p>
                <p>Python, JavaScript, TypeScript, SQL e Java. (Conhecimento adicional em C, C++, Kotlin e Rust).</p>
                <br />
                <p>FRONT-END:</p>
                <p>React, Next.js, HTML5, CSS3 e Tailwind CSS.</p>
                <br />
                <p>BACK-END:</p>
                <p>Node.js, Express, Django, FastAPI e Spring Boot.</p>
                <br />
                <p>CIÊNCIA DE DADOS:</p>
                <p>Pandas, Numpy, Scikit-learn, TensorFlow, Seaborn, Matplotlib, Jupyter Notebook e Power BI.</p>
                <br />
                <p>BANCO DE DADOS:</p>
                <p>MySQL, PostgreSQL, MongoDB, Redis.</p>
                <br />
                <p>DEVOPS:</p>
                <p>Docker, Git, GitHub e AWS.</p>
                <br />
                <p>TESTES:</p>
                <p>Pytest, Jest e Postman.</p>
                <br /> 
                <p>+{'-'.repeat(9)}+</p>
                <p>| Idiomas |</p>
                <p>+{'-'.repeat(9)}+</p>
                <br />
                <p>* INGLÊS - Avançado (TOEIC 900 / 2024)</p>
                <br />
                <p>* JAPONÊS - Iniciante (autodidata)</p>
                <br />
                <p>* ALEMÃO - Iniciante (em preparação para certificação)</p>           
                <br />
            </div>
          }
          prompt="C:\DeskMachine>"
          commands={commands}
          errorMessage="Comando não encontrado."
          theme="material-dark"
          showControlBar={false}
          showControlButtons={false}
          enableInput={true}
        />
      </TerminalContextProvider>
    </div>
  );
}
