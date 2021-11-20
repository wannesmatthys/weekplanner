<script lang="ts">
import { Router, Route, Link } from "svelte-navigator";

import Login from "../routes/auth/Login.svelte";
import Home from "../routes/home/Home.svelte";

import Avatar from "../assets/svelte.png";

import userStore from "../stores/user.store";
import Logout from "../routes/auth/Logout.svelte";

</script>

<Router basepath="/" primary={false}>
  <nav
    class="text-right py-3 px-4 text-lg bg-gradient-to-br from-green-500 to-green-600 text-white font-bold flex justify-between items-center"
  >
    <div class="text-xl">
      <Link to="/">Week planner</Link>
    </div>

    <div class="flex items-center">
      <div class="block px-4">
        {#if $userStore.authenticated}
          <Link to="logout">Logout</Link>
          {:else}
            <Link to="login">Login</Link>
        {/if}
        
      </div>

      <button class=" ">
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
    <Route path="logout" component={Logout} />
  </div>
</Router>
