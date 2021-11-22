<script lang="ts">
    import userStore from "../../stores/user.store";
    import { navigate } from "svelte-navigator";

    import FullCalendar from "../../components/FullCalendar.svelte";

    const events = [
		{ title: 'Office - Bureau 3', start: new Date() },
	];

    if (!$userStore.authenticated) navigate("login");
</script>

<FullCalendar {events} />