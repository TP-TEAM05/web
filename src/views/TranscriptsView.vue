<template>
  <HeroSection></HeroSection>

  <div class="bg-white py-16 sm:py-24" id="about">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 class="text-3xl tracking-tight text-center sm:text-4xl mb-8">
          Transcripts
        </h2>
        <div class="w-full grid grid-col-1 gap-2" v-for="f in pdfFiles" :key="f.name">
          <a class="p-4 border rounded-xl mb-2" :href="f.url">{{ f.name }}</a>
          
        </div>
      </div>
      <div class="md:grid md:grid-cols-2 md:grid-rows-1 grid-flow-col gap-10">
      </div>
    </div>
  </div>

  <OurTeam></OurTeam>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'TranscriptsView',
  data() {
    return {
      pdfFiles: [
        {
          name: 'Transcript 3.10.2023',
          url: '/files/1transcript.pdf'
        },
        {
          name: 'Transcript 10.10.2023',
          url: '/files/2transcript.pdf'
        },
        {
          name: 'Transcript 17.10.2023',
          url: '/files/3transcript.pdf'
        },
        {
          name: 'Transcript 24.10.2023',
          url: '/files/4transcript.pdf'
        },
        {
          name: 'Transcript 31.10.2023',
          url: '/files/5transcript.pdf'
        },
        {
          name: 'Transcript 7.11.2023',
          url: '/files/6transcript.pdf'
        },
        {
          name: 'Transcript 14.11.2023',
          url: '/files/7transcript.pdf'
        },
        {
          name: 'Transcript 21.11.2023',
          url: '/files/8transcript.pdf'
        },
        {
          name: 'Transcript 28.11.2023',
          url: '/files/9transcript.pdf'
        },
        {
          name: 'Transcript 5.12.2023',
          url: '/files/10transcript.pdf'
        },
        {
          name: 'Transcript 12.12.2023',
          url: '/files/11transcript.pdf'
        }
      ]
    };
  }
});
</script>
