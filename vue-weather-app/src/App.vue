<script setup>
import { reactive } from 'vue';
import axios from 'axios';
import TheTitle from './components/TheTitle.vue';
import TheForm from './components/TheForm.vue';
import TheResults from './components/TheResults.vue';
import './assets/base.css';

const results = reactive({
  country: '',
  cityName: '',
  temperature: '',
  conditionText: '',
  icon: '',
});

const getWeather = (city) => {
  axios
    .get(
      `https://api.weatherapi.com/v1/current.json?key=f4d70881aba641ad99a21558243004&q=${city}&aqi=no`
    )
    .then((res) => {
      results.country = res.data.location.country;
      results.cityName = res.data.location.name;
      results.temperature = res.data.current.temp_c;
      results.conditionText = res.data.current.condition.text;
      results.icon = res.data.current.condition.icon;
    });
};
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <TheTitle />
      <TheForm @submit-form="getWeather" />
      <TheResults :results="results" />
    </div>
  </div>
</template>

<style></style>
