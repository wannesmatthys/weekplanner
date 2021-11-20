<script lang="ts">

import type { IAuthResponse } from "src/interfaces/interfaces";

import GoogleLoginButton from "../../components/GoogleLoginButton.svelte";
import store from "../../stores/user.store";
import { navigate } from "svelte-navigator";

const signIn = (authResponse: IAuthResponse) => {
  localStorage.setItem("user", JSON.stringify(authResponse.user));
  localStorage.setItem("accessToken", authResponse.accessToken);
  
  store.set({
    authenticated: true,
    user: authResponse.user,
    accessToken: authResponse.accessToken
  });

  navigate("/");
}

</script>

<div class="flex justify-center pt-10">
  <div class="w-100 bg-white rounded-xl">
    <GoogleLoginButton 
      clientId="47240299209-n1j75ib761r6c7vr81vm5tit357qe8a3.apps.googleusercontent.com"
      onSuccess={signIn}
    />
  </div>
</div>
