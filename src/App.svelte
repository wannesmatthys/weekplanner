<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";

  import Login from "./routes/auth/login.svelte";
  import Home from "./routes/home/home.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav
    class="text-right py-4 px-4 text-lg bg-gradient-to-br from-green-500 to-green-600 text-white font-bold flex justify-between"
  >
    <div class="text-xl">
      <Link to="/">Week planner</Link>
    </div>
    <div class="text-right">
      <Link to="login">Login</Link>
    </div>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
  </div>
</Router>
