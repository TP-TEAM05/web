<template>
  <div class="bg-gray-900 py-16 sm:py-24" id="our-team">
    <div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Meet our team
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-400">
          We are a group of students from the Faculty of Informatics and Information Technologies at the Slovak
          University of Technology.<br/>
          In our Team Project, we research and develop a system for cooperative driving of RC cars.
        </p>
      </div>
      <ul role="list"
          class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mx-0 lg:max-w-none lg:gap-8">
        <li v-for="person in people" :key="person.name" class="rounded-2xl bg-gray-800 px-8 py-10">
          <img class="mx-auto w-full aspect-square rounded-full" :src="person.imageUrl" alt="" style="object-fit: cover; object-position: 50% 25%; image-rendering: smooth"/>
          <h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{{ person.name }}</h3>
          <p class="text-sm leading-6 text-gray-400">{{ person.role }}</p>
          <ul role="list" class="mt-6 flex justify-center gap-x-6">
            <li v-if="person.linkedinUrl">
              <a :href="person.linkedinUrl" target="_blank" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd"
                        d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                        clip-rule="evenodd"/>
                </svg>
              </a>
            </li>
            <li v-if="person.instagramUrl">
              <a :href="person.instagramUrl" target="_blank" class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="h-5 w-5"
                     viewBox="0 0 16 16">
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'OurTeam',
  data() {
    return {
      people: [
        {
          name: 'Rastislav Bencel',
          role: 'Product Owner',
          imageUrl: 'img/no-user-image.jpg',
          linkedinUrl: '',
          instagramUrl: '',
        },
        {
          name: 'Jozef Juraško',
          role: 'Research Consultant',
          imageUrl: 'img/joz.jpg',
          linkedinUrl: '',
          instagramUrl: '',
        },
        {
          name: 'Michal Magula',
          role: 'Scrum Master & Team Leader',
          imageUrl: 'img/mic.jpg',
          linkedinUrl: 'https://www.linkedin.com/in/michal-magula-1714b71b4/',
          instagramUrl: 'https://www.instagram.com/michal.magula/',
        },
        {
          name: 'Tamara Janotková',
          role: 'Hardware Designer & Developer',
          imageUrl: 'img/tam.jpg',
          linkedinUrl: '',
          instagramUrl: '',
        },
        {
          name: 'Vanesa Milonová',
          role: 'Backend Developer',
          imageUrl: 'img/van.jpg',
          linkedinUrl: '',
          instagramUrl: '',
        },
        {
          name: 'Norbert Vígh',
          role: 'Lead Frontend Developer',
          imageUrl: 'img/nor.jpg',
          linkedinUrl: 'https://www.linkedin.com/in/norbert-v%C3%ADgh-711a7417b/',
          instagramUrl: 'https://www.instagram.com/norb._/',
        },
        {
          name: 'Eduard Žňava',
          role: 'UI/UX Designer, Frontend Developer',
          imageUrl: 'img/edu.jpg',
          linkedinUrl: 'https://www.linkedin.com/in/eduard-%C5%BE%C5%88ava-131776246/',
          instagramUrl: 'https://www.instagram.com/znavaeduard/',
        },
        {
          name: 'Jakub Hrnčár',
          role: 'Hardware Designer & Developer',
          imageUrl: 'img/jak.jpg',
          linkedinUrl: '',
          instagramUrl: '',
        },
        {
          name: 'Matyás Neilinger',
          role: 'Backend Developer',
          imageUrl: 'img/mat.jpg',
          linkedinUrl: '',
          instagramUrl: '',
        },
      ]
    }
  }
});
</script>
