<script setup>
import { ref, computed } from "vue";
import ItemList from './components/ItemLists.vue';

let message = ref('');
let i = 0;
let items = ref([
    { id: i++, text:'piim', done: true },
    { id: i++, text:'viin', done: false },
    { id: i++, text:'sai', done: true },
    { id: i++, text:'leib', done: false },
]);

function addItem() {
    if(message.value.trim() !== ''){
        items.value.push({ id: i++, text: message.value.trim(), done: false });
    }
    message.value = '';
}

let doneItems = computed(() => {
    return items.value.filter(item => item.done);
});

let toDoItems = computed(() => {
    return items.value.filter(item => !item.done);
});
</script>

<template>
    <div class="container">
        <div class="content mt-3">

        <div class="field has-addons">
            <div class="control">
                <input v-model="message" @keydown.enter="addItem" class="input" type="text" placeholder="Item to add">
            </div>
            <div class="control">
                <button class="button is-info" @click="addItem">
                  Add
                </button>
            </div>
        </div>

        <ItemLists :items="items" title="All items"></ItemLists>
        <ItemLists :items="doneItems" title="Done items"></ItemLists>
        <ItemLists :items="toDoItems" title="To do items"></ItemLists>
        </div>
    </div>
</template>