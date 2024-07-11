<script setup lang="ts">
import store from '@/store';
import { OhVueIcon } from 'oh-vue-icons'
import EventInfoImage from "../EventInfoPopin/EventInfoImage.vue"
import { LMap, LMarker, LTileLayer, LIcon, LControlLayers, LPopup } from '@vue-leaflet/vue-leaflet'
import { computed } from 'vue';
import { LatLng } from 'leaflet';
import { format } from 'date-fns';

const id = 12;

const props = defineProps(["event"])

const handleView = (id: number) => {
  store.commit("openEvent", {id: props.event._id, event: props.event})
}

const location = computed(() => {
  return new LatLng(parseFloat(props.event.location[0]), parseFloat(props.event.location[1]))
})

const eventDate = computed(() => {
  return format(new Date(props.event.eventTimings.startDate), "dd.MM.yyyy")
})

const eventTime = computed(() => {
  return format(new Date(props.event.eventTimings.startDate), "HH:mm") + " Uhr to " + format(new Date(props.event.eventTimings.endDate), "HH:mm") + " Uhr"; 
})

</script>

<template>
  <l-marker :lat-lng="location">
    <l-popup>
      <div class="popupMapBody">
        <div class="container">
          <div class="row">
            <p style="font-size: large"> {{ props.event.title }}</p>
          </div>
          <div class="time-slot-popin">
            <div class="d-flex flex-row align-items-center">
              <div class="col-3">
                <OhVueIcon name="bi-calendar-event" scale="1.1" class="" />
              </div>
              <div class="col-9 time-text">{{ eventDate }}</div>
            </div>
            <hr>
            <div class="d-flex flex-row align-items-center">
              <div class="col-3">
                <OhVueIcon name="hi-clock" scale="1.1" class="" />
              </div>
              <div class="col-9 time-text">{{ eventTime }}</div>
            </div>
          </div>
          <div class="m-3"></div>
          <div class="icons-box">
            <div class="d-flex flex-row align-items-center">
              <div class="col-3">
                <OhVueIcon name="fa-wheelchair" scale="1.5" class="" />
              </div>
              <div class="col-3">
                <OhVueIcon name="fa-deaf" scale="1.5" class="" />
              </div>
              <div class="col-3">
                <OhVueIcon name="fa-sign-language" scale="1.5" class="" />
              </div>
            </div>
          </div>

          <div class="m-3"></div>
          <div class="row">
            <button class="btn btn-outline-secondary" type="button" @click="handleView(id)">Anschauen</button>
          </div>
        </div>
      </div>
    </l-popup>
  </l-marker>
</template>

<style>
.time-slot-popin {
  padding: 5%;
  border-radius: 5px;
}

.icons-box {
  background-color: rgb(230, 230, 230);
  padding: 5%;
  border-radius: 5px;
}

.time-text {
  text-align: center;
  font-size: large;
}

.popupMapBody {
  background-color: white;
}

.leaflet-popup-content-wrapper {}

.leaflet-popup-content-wrapper .leaflet-popup-content {}

.leaflet-popup-tip-container {}
</style>
