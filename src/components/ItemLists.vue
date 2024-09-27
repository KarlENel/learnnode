<script setup>
defineProps(['items', 'title']);
</script>

<template>
    <h1></h1>
    <ul>
        <li v-for="item in items">
            <label class="checkbox">
              <input type="checkbox" v-model="item.done" />
              {{ item.text }}
            </label>
        </li>
    </ul>
</template>