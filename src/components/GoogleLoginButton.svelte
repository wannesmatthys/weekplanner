<script lang="ts">
    import Button from './Base/Button.svelte';
	import type { IAuthResponse } from 'src/interfaces/interfaces';

	export let clientId: string;
	export let onFailure: (err: unknown) => void = (err: unknown) => console.log(err);
	export let onSuccess: (res: IAuthResponse) => void = (res: IAuthResponse) => console.log(res);

	const authorize = async (): Promise<void> => {
		gapi.load('auth2', async () =>{
			const auth2 = gapi.auth2.init({
				client_id: clientId,
				scope: "profile email openid"
			});
			
			try {
				const code = await auth2.grantOfflineAccess();
				fetch(`https://weekplanner-backend.herokuapp.com//auth/google?code=${code.code}`).then(res => res.json()).then(onSuccess).catch(onFailure);
			} catch (err: unknown) {
				onFailure(err);
			}
		});
     }
</script>

<svelte:head>
	<script src='https://apis.google.com/js/api.js'></script>
</svelte:head>

<Button onClick={authorize} text="Sign in with Google" classes="bg-red-500 w-100" />
