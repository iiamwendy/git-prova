

import Logo from "../components/taouaf/Logo"; // Assicurati che il percorso sia corretto
 


function pageTaouaf() {
  return (
    <div>
      <Logo />
      <h1>Taouaf Widad</h1>
 
      <p>Soluzione per ripostarla avanti la branch: sulla branch dedicata devi inserire il comando     
        git checkout feature/taouaf-init
        devo aggioranre la branch con le ultime modifiche di master :git pull origin master
        ora devo eseguire una commit delle modifiche sulla mia branch : git add .    
        git commit -m " aggiornamento"
        ora faccio la push delle modifiche :
        git push origin taouaf-init
</p>


<p>Antipasto: Crostino</p>
<p>Primo Piatto: Riso</p>
<p>Secondo Piatto: Filetto di Merluzzo</p>
<p>Dolce: Tiramisù</p>
<p>soluzione:per unire le 4 commit : git rebase -i 8b9c4f4</p>



      <p>Soluzione breve:ho creato una nuova brench che è la copia della master,così le modifiche rimangono salvate ,mentre nella master 
        per eliminare le modifiche fatte ho inserito questi componenti : git checkout master / git log / git reset --hard (codice della commit)
      </p>


    </div>
  );
}

export default pageTaouaf;
