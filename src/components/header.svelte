<script lang="ts">
  import { Router, Route, Link } from "svelte-routing";

  import Login from "../routes/auth/login.svelte";
  import Home from "../routes/home/home.svelte";

  import Avatar from "../assets/svelte.png";

  export let url = "";
</script>

<Router {url}>
  <nav
    class="text-right py-3 px-4 text-lg bg-gradient-to-br from-green-500 to-green-600 text-white font-bold flex justify-between items-center"
  >
    <div class="text-xl">
      <Link to="/">Week planner</Link>
    </div>

    <div class="flex items-center">
      <div class="block px-4">
        <Link to="login">Login</Link>
      </div>

      <button class="bg-white flex rounded-full py-2 px-3">
        <img
          class="rounded-full my-auto lg:w-8 lg:h-8 md:w-10 md:h-10 sm:w-12 sm:h-12"
          src={Avatar}
          alt="User Icon"
          title="User Icon"
        />
        <p class="p-1 my-auto text-green-600">Username</p>
      </button>
    </div>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="login" component={Login} />
  </div>
</Router>
