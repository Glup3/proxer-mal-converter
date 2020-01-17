const fetcher = require('proxer-list-exporter/dist/index').fetchProxerAnimeListHTML;
const getAnimes = require('proxer-list-exporter/dist/index').getAnimesFromHTML;
const exporter = require('proxer-list-exporter/dist/index').exportAnimesToMALAnimeXML;
const FileSaver = require('file-saver');

const button = document.getElementById('convert-btn');

const onClicki = async () => {
  try {
    const id = document.getElementById('proxer-id').value;
    button.innerHTML = 'Loading...';
    button.disabled = true;
    
    const html = await fetcher(id);
    const animes = getAnimes(html);
    const xml = await exporter(animes, 90);

    const blob = new Blob([xml], { type: 'application/xml' });
    const now = new Date();

    FileSaver.saveAs(blob, `${id}-${now.toISOString()}.xml`);
  } catch (e) {
    console.log(e);
  }

  button.innerHTML = 'Export';
  button.disabled = false;
}

button.addEventListener('click', onClicki);