import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import './Terminal.css';

const commands = {
  help: `Comandos disponíveis:\n- help\n- echo [texto]\n- date\n- about\n- clear`,
  echo: (...args) => args.join(' '),
  date: () => new Date().toString(),
  about: 'Terminal mock do DeskMachine-OS. Digite "help" para ver os comandos disponíveis.',
  whoami: 'Você é um usuário do DeskMachine-OS!',
  ls: 'Documentos  Imagens  Vídeos  Música  Downloads',
  cd: (dir) => `Você não tem permissão para acessar o diretório /${dir}`,
  mkdir: (dir) => `Você não tem permissão para criar o diretório /${dir}.`,
  rmdir: (dir) => `Você não tem permissão para remover o diretório /${dir}.`,
  cat: (file) => `O arquivo ${file} está vazio ou não existe.`,
  nano: (file) => `O editor de texto não está disponível. O arquivo ${file} não pode ser editado.`,
  pwd: () => '/C/DeskMachine',
  history: 'Comandos anteriores: help, echo, date, about, whoami, ls, cd, mkdir, rmdir, cat, nano, pwd',
  ping: (host) => `Resposta de ${host}: bytes=32 tempo=20ms TTL=64`,
  fortune: '"Não deixe para amanhã o que você pode fazer depois de amanhã."',
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
