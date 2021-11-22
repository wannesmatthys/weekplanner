<script lang="ts">
import '@fullcalendar/core/vdom';
import '@fullcalendar/core';
import { Calendar, CalendarOptions, EventSourceInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { onMount } from 'svelte';

export let events: EventSourceInput = [];

onMount(() => {
    const calendarEl: HTMLElement = document.getElementById('calendar')!;

    const calendar: Calendar = new Calendar(calendarEl, {
        plugins: [ dayGridPlugin, timeGridPlugin ],
        headerToolbar: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay',
		},
        events,
        weekends: true,
        height: 800,
        firstDay: 1
    } as CalendarOptions);

    calendar.render();
});
</script>

<div class="p-3">
    <div id="calendar"></div>
</div>


