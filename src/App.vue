<script setup>
import Tabs from './components/Tabs.vue';

</script>
<template>
     <Tabs></Tabs>
     <div class="container mt-3"></div>
     <Suspense>
        <RouterView></RouterView>
     </Suspense>
     
</template>