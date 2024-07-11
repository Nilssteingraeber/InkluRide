<script setup lang="ts">
import store from '@/store';
import { addDays, format } from 'date-fns';
import { OhVueIcon } from 'oh-vue-icons'
import { computed } from 'vue';

const event = defineProps(["event"])

const data = computed(() => {
    const startDate = new Date('2024-07-12T08:00:00Z')
    const eventsDates = [
        { date: new Date('2024-07-12T08:15:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T08:15:00Z'), "kk:mm") },
        { date: new Date('2024-07-12T11:00:00Z'), name: "Mittagessen", pretty: format(new Date('2024-07-12T11:00:00Z'), "kk:mm")},
        { date: new Date('2024-07-12T12:00:00Z'), name: "Führung", pretty: format(new Date('2024-07-12T12:00:00Z'), "kk:mm") },
    ]
    const endDate = new Date('2024-07-12T13:00:00Z')

    const data = { startDate, eventsDates, endDate }

    const prettyStartDate = format(startDate, "kk:mm")
    const prettyEndDate = format(endDate, "kk:mm")

    return {data, prettyStartDate, prettyEndDate}
})



</script>

<template>
    <div class="col-12">
        <div class="row">
            <div class="dateEntryStart entry">
                Begin um {{ data.prettyStartDate }}
            </div>
            <div v-for="item in data.data.eventsDates" class="dateEntryEvents entry">
                {{ item.name }} um {{ item.pretty }}
            </div>
            <div class="dateEntryEnd entry">
                Ende um {{ data.prettyEndDate }}
            </div>
        </div>
    </div>
</template>

<style>

.string {
    background-color: rgb(0,0,0,1);
    width: 100%;
    height: 5px;
}

.entry {
    margin: 2%;
    padding: 10px;
    box-shadow: 0px 0px 3px rgb(25, 25, 25, 0.1);
    
    outline: solid rgb(0,0,0,0.1) 1px;
}

.dateEntryStart {
    
    border-radius: 15px;
    width: fit-content;
    margin-right: 1%;
    margin-left: 1%;
    outline: solid rgb(0,200,0,0.5) 2px;
}

.dateEntryEvents {

    border-radius: 15px;
    width: fit-content;
    margin-right: 1%;
    margin-left: 1%;
}


.dateEntryEnd {

    border-radius: 15px;
    width: fit-content;
    margin-right: 1%;
    margin-left: 1%;
}

</style>
