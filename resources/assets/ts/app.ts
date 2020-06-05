import axios from 'axios'

interface Qiita {
  title: string,
  rendered_body: string
}

const $jsList = document.querySelector('.js-list')
if ($jsList !== null) {
  ; (async () => {
    const { data } = await axios.get<Qiita[]>('https://qiita.com/api/v2/items')
    for (const datum of data) {
      const $article = document.createElement('article')
      $article.innerHTML = `
        <h2>${datum.title}</h2>
        ${datum.rendered_body}
      `
      $jsList.appendChild($article)
    }
  })()
}