const fetcher = require('proxer-list-exporter/dist/index').fetchProxerAnimeListHTML;

const button = document.getElementById('convert-btn');

const onClicki = () => {
  fetcher('519518').then(a => console.log(a));  
}

button.addEventListener('click', onClicki);