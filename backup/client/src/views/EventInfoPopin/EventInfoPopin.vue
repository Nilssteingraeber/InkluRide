<script setup lang="ts">
import store from '@/store'
import { OhVueIcon } from 'oh-vue-icons'
import EventInfoImage from './EventInfoImage.vue'
import EventInfoPrice from './EventInfoPrice.vue'
import EventInfoTimings from './EventInfoTimings.vue'
import { computed, ref, watch } from 'vue'

const currentEvent = computed(() => {
    return store.state.openedEvent.event
})

const closeOpenedEvent = () => {
    store.commit("openEvent", { id: -1, event: {} })
}


const currentPage = ref(0)

const pageClassTexts = computed(() => {
    const item = []

    for (let i = 0; i < 3; i++) {
        item.push([currentPage.value == i] ? " activePage " : " inactivePage ")
    }

    return item;
})

</script>

<template>
    <div class="popupBody flex" style="overflow-y: auto">
        <div class="flex container">
            <div class="d-flex row">
                <div class="col-11">
                    <div class="row upper-description-area">
                        <div class="row">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-12">
                                        <a class="event-title"> {{ currentEvent.title }}</a>
                                    </div>
                                    <div class="col-12">
                                        <a class="event-subtitle"> {{ currentEvent.subtitle }}</a>
                                    </div>
                                    <div class="m-3"></div>
                                    <div class="col-12">
                                        <a class="event-longinfo"> {{ currentEvent.longinfo }}</a>
                                    </div>

                                    <div class="m-3"></div>

                                    <div class="col-6">
                                        <div class="d-flex flex-row align-items-center">
                                            <div class="col-3 event-bf-icon">
                                                <OhVueIcon name="fa-wheelchair" scale="2" class="" />
                                            </div>

                                            <div class="col-3 event-bf-icon">
                                                <OhVueIcon name="fa-deaf" scale="2" class="" />
                                            </div>
                                            <div class="col-3 event-bf-icon">
                                                <OhVueIcon name="fa-sign-language" scale="2" class="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="m-2"></div>
                                </div>
                            </div>

                            <div class="col-6">
                                <EventInfoImage :event="currentEvent"/>
                            </div>
                        </div>
                    </div>
                    <div class="m-3"></div>
                    <div class="row upper-description-area">
                        <div class="col">
                            <EventInfoTimings :event="currentEvent"></EventInfoTimings>
                        </div>
                    </div>
                    <div class="m-3"></div>
                    <div class="row upper-description-area">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <EventInfoPrice :event="currentEvent"></EventInfoPrice>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-1 current-progress-bar align-content-center d-flex justify-content-end">
                    <div class="row">
                        <div class="col-12">

                            <div class="row">
                                <div class="col-12">
                                    <button class="btn btn-outline-secondary close-button" type="button"
                                        @click="closeOpenedEvent()">
                                        X
                                    </button>
                                </div>
                            </div>
                            <div class="my-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.inactivePage {
    border-radius: 5px;
    background-color: white;
    border-color: black;
    border-style: solid;
    border-width: 1px;
    margin: 4%;
    padding: 4%;
}

.activePage {
    border-radius: 5px;
    background-color: black;
    margin: 4%;
    padding: 4%;
}

.upper-description-area {
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    padding: 1%;
    box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.2);
}


.close-button {
    width: auto;
    font-size: x-large;
    height: fit-content;
}

.popupBody {
    width: 100%;
    height: 100%;
    padding: 2%;
    background-color: rgb(235, 235, 235);
}

.current-progress-bar {
    justify-content: center;
}

.event-longinfo {
    font-size: larger;
    color: rgb(50, 50, 50);
    margin-top: 20px;
}

.event-subtitle {
    font-size: larger;
    color: rgb(100, 100, 100);
}

.event-title {
    font-size: xx-large;
}

.time-slot {
    background-color: rgb(245, 245, 245);
    padding: 5%;
    border-radius: 5px;
}

.time-text {
    text-align: center;
    font-size: large;
}
</style>
