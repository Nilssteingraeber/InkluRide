<script setup lang="ts">
import store from '@/store';
import { OhVueIcon } from 'oh-vue-icons'
import { computed, ref, watch } from 'vue';


const props = defineProps(["event"])

const amountTotal = computed(() => {
    console.log(personInput)
    console.log(props.event)
    return (personInput.value * props.event.pricePerPerson + 
        kmInput.value).toFixed(2)
})

const personInput = ref(1)

const kmInput = ref(0)

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

const price = computed(() => {
    return getDistanceFromLatLonInKm(parseFloat(props.event.location[0]), parseFloat(props.event.location[1]), 51.45704, 7.19708) * 1.5
})

watch(props.event, () => {
    if(props.event.location)
        kmInput.value = (getDistanceFromLatLonInKm(parseFloat(props.event.location[0]), parseFloat(props.event.location[1]), 51.45704, 7.19708) * 1.5)
}, { immediate: true })

watch(personInput, () => {
    if(props.event.location)
        kmInput.value = (getDistanceFromLatLonInKm(parseFloat(props.event.location[0]), parseFloat(props.event.location[1]), 51.45704, 7.19708) * 1.5)
}, { immediate: true })

const displayTransport = computed(() => {
    if(props.event.location)
    return (getDistanceFromLatLonInKm(parseFloat(props.event.location[0]), parseFloat(props.event.location[1]), 51.45704, 7.19708) * 1.5).toFixed(2)
})

</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <div class="col-3">
                            <div class="row">
                                <div class="col-12">
                                    Preis pro Person:
                                </div>
                                <div class="col-12">
                                    <a>{{ props.event.pricePerPerson }} €</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="col-6">
                                Personen:
                            </div>
                            <div class="col-6">
                                <input v-model="personInput" value="1" type="number" />
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="col-12">
                                Transport-Kosten:
                            </div>
                            <div class="col-12">
                                <input disabled v-model="displayTransport" type="number" />
                            </div>
                        </div>
                        <div class="mt-3"></div>
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    Preis gesamt:
                                </div>
                                <div class="col-12">
                                    <a>{{ amountTotal }} €</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="row justify-content-end">
                                <div class="col-2">
                                    <button class="www btn btn-outline-primary">Buchen</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-6">
        </div>
    </div>
</template>

<style>

.www {
    width: 100%;
}

</style>
