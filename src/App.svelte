<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";

  import Login from "./routes/auth/login.svelte";
  import Home from "./routes/home/home.svelte";

  export let url = "";
</script>

<Router {url}>
  <nav>
    <Link to="/">Week planner</Link>
    <Link to="login">Login</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
  </div>
</Router>
