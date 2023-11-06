import Logo from "../components/taouaf/Logo"; // Assicurati che il percorso sia corretto


function pageTaouaf() {
  return (
    <div>
      <Logo />
      <h1>Taouaf Widad</h1>
      <p>Soluzione breve:ho creato una nuova brench che è la copia della master,così le modifiche rimangono salvate ,mentre nella master 
        per eliminare le modifiche fatte ho inserito questi componenti : git checkout master / git log / git reset --hard (codice della commit)
      </p>
    </div>
  );
}

export default pageTaouaf;
