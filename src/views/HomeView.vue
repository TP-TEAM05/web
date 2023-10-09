<template>
  <HeroSection></HeroSection>

  <div class="bg-white py-16 sm:py-24" id="about">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <h2 class="text-3xl tracking-tight text-center sm:text-4xl mb-8">
          About ReCo
        </h2>
      </div>
      <div class="md:grid md:grid-cols-2 md:grid-rows-1 grid-flow-col gap-10">
        <div class="text-justify text-slate-900 flex justify-center items-center">
          <p class="mb-12 md:mb-0 text-lg">
            <strong>ReCo</strong> is a team project of a group of students from the Faculty of Informatics and
            Information Technologies of the Slovak University of Technology in Bratislava.
            The aim of the project is to create a system for cooperative driving of RC cars.
            The system consists of a server, a web application used for monitoring and giving instructions to the RC
            cars, and receiver nodes in the cars, that gather information from sensors, as well as control the cars
            according to instructions.
          </p>
        </div>
        <div>
          <img src="img/rc_car_traxxas.jpg" alt="RC car">
        </div>
      </div>
    </div>

  </div>

  <OurTeam></OurTeam>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import OurTeam from "@/components/OurTeam.vue";
import HeroSection from "@/components/HeroSection.vue";

export default defineComponent({
  name: 'HomeView',
  components: {
    HeroSection,
    OurTeam
  }
});
</script>
