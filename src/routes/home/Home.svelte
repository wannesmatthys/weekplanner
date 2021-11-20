<script lang="ts">
    import userStore from "../../stores/user.store";
    import { navigate } from "svelte-navigator";

    if (!$userStore.authenticated) navigate("login");
</script>

<h1>Lol</h1>
