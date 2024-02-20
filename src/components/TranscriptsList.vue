<template>
  <div class="bg-gray-950 py-16 sm:py-24 text-white" id="transcripts">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 class="text-3xl tracking-tight text-center text-white font-bold sm:text-4xl mb-8">
          Transcripts
        </h2>
        <div class="md:grid md:grid-cols-2 md:grid-rows-1 grid-flow-col gap-10">
          <section>
            <h3 class="text-xl tracking-tight mb-5 text-blue-500 font-medium">
              Winter Semester 2023/2024
            </h3>
            <div class="w-full grid grid-col-1 gap-2" v-for="(f, index) in pdfFilesWinter" :key="f.date">
              <a class="px-4 py-3 bg-slate-800 rounded-xl mb-2 flex items-end" :href="f.url" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-pdf my-1 me-2" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/>
                </svg>
                Transcript <span class="font-medium">#{{ index + 1 }}</span> <span class="text-slate-500 text-sm ">&nbsp;from {{ f.date }}</span>
              </a>
            </div>
          </section>
          <section>
            <h3 class="text-xl tracking-tight mb-5 text-blue-500 font-medium">
              Summer Semester 2023/2024
            </h3>
            <div class="w-full grid grid-col-1 gap-2" v-for="(f, index) in pdfFilesSummer" :key="f.date">
              <a class="px-4 py-3 bg-slate-800 rounded-xl mb-2 flex items-end" :href="f.url" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-pdf my-1 me-2" viewBox="0 0 16 16">
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  <path d="M4.603 14.087a.8.8 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.897-.787a7.7 7.7 0 0 1 1.482-.645 20 20 0 0 0 1.062-2.227 7.3 7.3 0 0 1-.43-1.295c-.086-.4-.119-.796-.046-1.136.075-.354.274-.672.65-.823.192-.077.4-.12.602-.077a.7.7 0 0 1 .477.365c.088.164.12.356.127.538.007.188-.012.396-.047.614-.084.51-.27 1.134-.52 1.794a11 11 0 0 0 .98 1.686 5.8 5.8 0 0 1 1.334.05c.364.066.734.195.96.465.12.144.193.32.2.518.007.192-.047.382-.138.563a1.04 1.04 0 0 1-.354.416.86.86 0 0 1-.51.138c-.331-.014-.654-.196-.933-.417a5.7 5.7 0 0 1-.911-.95 11.7 11.7 0 0 0-1.997.406 11.3 11.3 0 0 1-1.02 1.51c-.292.35-.609.656-.927.787a.8.8 0 0 1-.58.029m1.379-1.901q-.25.115-.459.238c-.328.194-.541.383-.647.547-.094.145-.096.25-.04.361q.016.032.026.044l.035-.012c.137-.056.355-.235.635-.572a8 8 0 0 0 .45-.606m1.64-1.33a13 13 0 0 1 1.01-.193 12 12 0 0 1-.51-.858 21 21 0 0 1-.5 1.05zm2.446.45q.226.245.435.41c.24.19.407.253.498.256a.1.1 0 0 0 .07-.015.3.3 0 0 0 .094-.125.44.44 0 0 0 .059-.2.1.1 0 0 0-.026-.063c-.052-.062-.2-.152-.518-.209a4 4 0 0 0-.612-.053zM8.078 7.8a7 7 0 0 0 .2-.828q.046-.282.038-.465a.6.6 0 0 0-.032-.198.5.5 0 0 0-.145.04c-.087.035-.158.106-.196.283-.04.192-.03.469.046.822q.036.167.09.346z"/>
                </svg>
                Transcript <span class="font-medium">#{{ index + 1 }}</span> <span class="text-slate-500 text-sm ">&nbsp;from {{ f.date }}</span>
              </a>
            </div>
            <p v-if="pdfFilesSummer.length == 0" class="text-gray-300 font-light leading-6 text-md p-3">
              Transcripts from the summer semester will be added later.
            </p>
          </section>
        </div>
      </div>
      <div class="md:grid md:grid-cols-2 md:grid-rows-1 grid-flow-col gap-10">
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TranscriptsList',
  data() {
    return {
      pdfFilesWinter: [
        {
          date: '03.10.2023',
          url: '/files/1transcript.pdf'
        },
        {
          date: '10.10.2023',
          url: '/files/2transcript.pdf'
        },
        {
          date: '17.10.2023',
          url: '/files/3transcript.pdf'
        },
        {
          date: '24.10.2023',
          url: '/files/4transcript.pdf'
        },
        {
          date: '31.10.2023',
          url: '/files/5transcript.pdf'
        },
        {
          date: '07.11.2023',
          url: '/files/6transcript.pdf'
        },
        {
          date: '14.11.2023',
          url: '/files/7transcript.pdf'
        },
        {
          date: '21.11.2023',
          url: '/files/8transcript.pdf'
        },
        {
          date: '28.11.2023',
          url: '/files/9transcript.pdf'
        },
        {
          date: '05.12.2023',
          url: '/files/10transcript.pdf'
        },
        {
          date: '12.12.2023',
          url: '/files/11transcript.pdf'
        }
      ],
      pdfFilesSummer: []
    };
  }
});
</script>
