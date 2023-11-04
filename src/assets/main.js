const API = 'https://youtube-v38.p.rapidapi.com/channel/videos/?id=UC8LeXCWOalN8SxlrPcG-PaQ&filter=videos_latest&hl=en&gl=US';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '18a38ba003mshefd9af9fb03f3a2p1e007djsne08967ae9ed2',
    'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
  }
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const videos = await fetchData(API);

        let view = `
            ${videos.contents.map(video => `
                <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.video.thumbnails[0].url}" alt="" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.video.title}
                    </h3>
                </div>
                </div>
            `).slice(0, 4).join('')};
        `;

        content.innerHTML = view;
    } catch(error) {
        console.log(error);
    }
})();