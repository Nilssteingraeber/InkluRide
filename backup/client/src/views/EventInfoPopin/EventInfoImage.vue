<script setup lang="ts">
import store from '@/store';
import { OhVueIcon } from 'oh-vue-icons'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { computed, nextTick, ref, watch } from 'vue';
import { event } from 'jquery';

const props = defineProps(["event"])

const imageUrlRef = ref([__STATIC_DATA_PATH__ + "/static/images/1/Bergwerk_Info_001.png"])

watch(() => props.event.images, () => {
    imageUrlRef.value = props.event.images.map((str) => __STATIC_DATA_PATH__ + str)
})

const le = computed(async () => {
    return await nextTick().then(() => imageUrlRef.value.length ?? 1)
    return imageUrlRef.value.length ?? 1
})

const imageUrl = [__STATIC_DATA_PATH__ + "/static/images/1/Bergwerk_Info_001.png", __STATIC_DATA_PATH__ + "/static/images/1/Bergwerk_Info_001.png", __STATIC_DATA_PATH__ + "/static/images/1/Bergwerk_Info_001.png", __STATIC_DATA_PATH__ + "/static/images/1/Bergwerk_Info_001.png"]

</script>

<template>
    <carousel :slidesCount="le" :items-to-show="1" :transition="500" :autoplay="4000"
        :wrap-around="true">
        <slide v-for="slide in imageUrlRef" :key="slide">
            <img class="info-image rounded " :src="slide"></img>
        </slide>

        <template #addons>
            <navigation />
            <pagination />
        </template>
    </carousel>
</template>

<style>
.info-image {
    width: 80%;
    margin: 5%;
    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.8);
}
</style>
