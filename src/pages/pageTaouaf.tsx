

function pageTaouaf() {
  return (
    <div>
      <h1>Taouaf Widad</h1>
      <p>Soluzione per ripostarla avanti la branch: sulla branch dedicata devi inserire il comando     
        git checkout feature/taouaf-init
        devo aggioranre la branch con le ultime modifiche di master :git pull origin master
        ora devo eseguire una commit delle modifiche sulla mia branch : git add .    
        git commit -m " aggiornamento"
        ora faccio la push delle modifiche :
        git push origin feature/taouaf-init
</p>
    </div>
  );
}

export default pageTaouaf;
