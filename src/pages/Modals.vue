<script setup>
import {ref} from 'vue'
import Modal from '../components/Modal.vue';
import ImgModal from '../components/ImgModal.vue';

let modalOpen = ref(false);
let modal2Open = ref(false);
let modal3Open = ref(false);
let modal4Open = ref(false);


</script>

<template>
    <div class="container mt-2">
        <button class="button is-primary" @click="modalOpen=true">Open Modal</button>
        <button class="button is-secundary" @click="modal2Open=true">Open Modal 2</button>
        <button class="button is-secundary" @click="modal3Open=true">Open Modal 3</button>
        <button class="button is-secundary" @click="modal4Open=true">Open Card Modal</button>

        <ImgModal :isOpen="modalOpen" @close="modalOpen=false" url="https://bulma.io/assets/images/placeholders/1280x960.png"></ImgModal>
        <ImgModal :isOpen="modal2Open" @close="modal2Open=false" url="https://picsum.photos/seed/karl/200/300"></ImgModal>
        <ImgModal :isOpen="modal3Open" @close="modal3Open=false" url="https://picsum.photos/seed/karl2/200/300"></ImgModal> 
        <modal :isOpen="modal4Open" @close="modal4Open=false">

            <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img
              src="https://bulma.io/assets/images/placeholders/1280x960.png"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img
                  src="https://bulma.io/assets/images/placeholders/96x96.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
    </div>

      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris. <a>@bulmaio</a>. <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
</div>
        </modal>
    </div>
</template>


