import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import './Terminal.css';

const commands = {
  help: `Comandos disponíveis:\n- help\n- echo [texto]\n- date\n- about\n- clear`,
  echo: (...args) => args.join(' '),
  date: () => new Date().toString(),
  about: 'Terminal mock do DeskMachine-OS. Digite "help" para ver os comandos disponíveis.',
};

export default function Terminal() {
  return (
    <div className="terminal-frame">
      <TerminalContextProvider>
        <ReactTerminal
          welcomeMessage={
            <div>
              <p>DeskMachine OS.</p>
              <p>Copyright (C) DeskMachine Corp. 1995-2026.</p>
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
