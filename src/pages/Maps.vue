<script setup>
import LeafletMap from '../components/LeafletMap.vue';
import { ref } from 'vue';

let map1Zoom = ref(19);
let map1Lat = ref(59.42693);
let map1Lng = ref(24.74350);

</script>

<template>
    <input type="range" min="1" max="19" step="1" v-model="map1Zoom" > {{ map1Zoom }}
    <button
        class="button is-primary"
        @click="map1Lat=40.71114;
        map1Lng=-74.00242">Go to New York</button>
    <LeafletMap
        :lat="map1Lat"
        :lng="map1Lng"
        :zoom="map1Zoom"
        @zoom="map1Zoom=$event$"
        @move="map1Lat=$event.lat; map1Lng=$event.lng"></LeafletMap>
    <LeafletMap lat="59" lng='24' zoom="7"></LeafletMap>
    <LeafletMap lat="0" lng='0' zoom="12"></LeafletMap>

</template>