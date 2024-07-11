<script setup lang="ts">
import {
	VueElement,
	computed,
	createApp,
	getCurrentInstance,
	nextTick,
	onBeforeUnmount,
	onMounted,
	reactive,
	ref,
	watch
} from 'vue'
import Sidebar from './Sidebar/Sidebar.vue'
import store from '@/store'
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/leaflet.css'
import { LMap, LMarker, LTileLayer, LIcon, LControlLayers, LPopup } from '@vue-leaflet/vue-leaflet'
import { LaMarkerSolid } from 'oh-vue-icons/icons'
import MapPopupItem from './Mapitems/MapPopupItem.vue'
import App from '@/App.vue'
import L, { LatLng } from 'leaflet'
import EventInfoPopin from './EventInfoPopin/EventInfoPopin.vue'
import { event } from 'jquery'

const pop = ref(null)

const home = { lat: 51.49798, lon: 7.25588 }

const map = ref(null)

const classTextMap = computed(() => {
	console.log(store.state.openedEvent._id)
	return store.state.openedEvent.id == -1 ? 'full' : 'half'
})

const classTextPopin = computed(() => {
	return store.state.openedEvent.id == -1 ? 'd-none' : 'full'
})

watch(() => classTextMap, async () => {
	await nextTick()
	if (map.value) {
		const leafletMap = map.value.leafletObject
		if (leafletMap) {
			closeAllPopups()
			leafletMap.invalidateSize()
			leafletMap.setView([51.48861, 7.21641], 18)

			allowMapMovement(store.state.eventOpened == -1)
		}
	}
})


const currentlyOpenedEvent = ref({})

const allowMapMovement = (value: boolean) => {
	const leafletMap = map.value.leafletObject

	if (value) {
		leafletMap.dragging.enable();
		leafletMap.touchZoom.enable();
		leafletMap.doubleClickZoom.enable();
		leafletMap.scrollWheelZoom.enable();
		leafletMap.boxZoom.enable();
		leafletMap.keyboard.enable();

	} else {
		leafletMap.dragging.disable();
		leafletMap.touchZoom.disable();
		leafletMap.doubleClickZoom.disable();
		leafletMap.scrollWheelZoom.disable();
		leafletMap.boxZoom.disable();
		leafletMap.keyboard.disable();
	}
}

const closeOpenedEvent = () => {
	allowMapMovement(true)
	store.commit("openEvent", -1)
}

const closeAllPopups = () => {
	if (map.value) {
		const leafletMap = map.value.leafletObject
		if (leafletMap) {
			leafletMap.eachLayer((layer: any) => {
				if (layer instanceof L.Popup) {
					leafletMap.closePopup(layer)
				}
			})
		}
	}
}

onMounted(async () => {
	await nextTick()
	loadEntries()
})

const center = [51.48861, 7.21641]
const zoom = 14
const url = 'http://localhost:5173/api'

const events = reactive({ list: {} })

const loadEntries = () => {
	fetch(url + '/events').then((result) => {
		result.json().then((json) => {
			console.log(json)
			events.list = json
		})
	})
}

watch(() => store.state.openedEvent, () => {
	console.log(store.state.openedEvent)
	const leafletMap = map.value.leafletObject
	
})

const a = new LatLng(51.45704, 7.19708)


const customIcon = L.icon({
        iconUrl: '/src/assets/HouseIcon.png', // Pfad zu deinem benutzerdefinierten Icon
        iconSize: [37, 37], // Größe des Icons
        iconAnchor: [12, 41], // Punkt des Icons, der auf die Markerposition zeigt
        popupAnchor: [1, -34], // Punkt, von dem sich der Popup öffnet, relativ zum iconAnchor
        shadowUrl: '', // (Optional) Pfad zu einem Schattenbild
        shadowSize: [41, 41], // (Optional) Größe des Schattens
      })

</script>

<!-- <template>
	<div class="row" style="height: 100%;">
		<div :class="classTextMap" style="height: 100%;">
			<div class="map" id="map">{{ map }}</div>
		</div>
		<div :class="classTextInfo" style="height: 100%;">
			Hallo
		</div>
	</div>
    
</template> -->

<template>
	<div class="d-flex flex-row" style="height: 100%">
		<div :class="classTextMap">
			<l-map ref="map" id="map" v-model:zoom="zoom" :center="center">
				<l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
					name="OpenStreetMap"></l-tile-layer>
				<l-control-layers />
				<l-marker :lat-lng="a" :icon="customIcon"></l-marker>
				<div v-for="event in events.list" :key="event._id">
					<MapPopupItem :event="event"></MapPopupItem>
				</div>
			</l-map>
		</div>
		<div :class="classTextPopin">
			<EventInfoPopin></EventInfoPopin>
		</div>
	</div>
</template>

<style>
/* @keyframes event-open-ani {
	0% {
		width: 100%;
	}

	100% {
		width: 50%;
	}
}

.event-open {
	animation-name: event-open-ani;
	animation-duration: 0.5s;
	animation-fill-mode: forwards;
} */

.withShadow {
	box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5);
}

.half {
	width: 30%;
}

.full {
	width: 100%;
}


#map:before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: block;
	z-index: 1000;
	pointer-events: none;

	box-shadow: inset 0px 0px 5px 2px rgba(0, 0, 0, 0.25);
}

.map {
	transition: 0.5s;
	width: 100%;
	height: 100%;
}

.trans {
	transition: 0.2s;
}

.page {
	height: 100%;
	width: 100%;
	background-color: #36a5913b;
}
</style>
