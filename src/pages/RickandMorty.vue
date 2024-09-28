<script setup>
    import axios from 'axios';
    import {ref} from 'vue';
    import CharacterCard from '../components/CharacterCard.vue';
    
    let chars = ref([]);
    let info = ref([]);
    let current = 1;
    axios.get('https://rickandmortyapi.com/api/character').then(response => {
        console.log(response);
        chars.value = response.data.results;
        info.value = response.data.info;
    });
    function getCharacter(page){
        axios.get('https://rickandmortyapi.com/api/character', {
            params: {
                page
            }
        }).then(response => {
        console.log(response);
        chars.value = response.data.results;
        info.value = response.data.info;
    });
    }

    function next(){
        getCharacter(++current);
    }
    function prev(){
        getCharacter(--current);
    }
</script>

<template>
    <button class="button is-primary" @click="prev" :disable="current<=1">Prev</button>
    <button class="button is-primary" @click="next" :disable="current>=info.page">Next</button>
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="char in chars">
            <CharacterCard :char="char"></CharacterCard>
        </div>
        
    </div>
</template>