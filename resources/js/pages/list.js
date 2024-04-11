import loader from '../utils/loader'
import route from '../utils/route'

$(() => {
  $.ajax({
    method: 'GET',
    url: import.meta.env.VITE_API_URL,
    beforeSend: () => {
      loader.startLoader()
    },
  }).done((msg) => {
    if (!msg.length) {
      $('#noteSuggestion').css('display', 'flex')
      loader.stopLoader()
      return
    }
    renderTemplate(msg)
    loader.stopLoader()
  })
})

$(document).on('click', 'button', function () {
  const url = this.dataset.route
  if (url)
    route.to(url)
})

function renderTemplate(msg) {
  const wrapper = $('#notesWrapper')
  msg.forEach(note => wrapper.append(createNote(note)))
}

function createNote(note) {
  const { id, message } = note
  return `
    <div class="flex items-center bg-secondary text-secondary-foreground py-4 px-8 rounded-md text-lg ">
        <h6 class="flex-1">${message}</h6>
        <div>
            <button id="deleteNote" data-route="${getUrl(
                id,
            )}" class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">Удалить</button>
        </div>
    </div>
    `
}

function getUrl(id) {
  const [origin, query] = config.api.edit.split('BLANK')
  return origin + id + query
}
