<script>
  import Button from "../../components/button.svelte";
  import Input from "../../components/input.svelte";
</script>

<div class="flex justify-center pt-10">
  <div class="w-1/3 bg-white rounded-xl">
    <form class="p-6">
      <h1 class="text-3xl text-center pb-5">Join game</h1>

      <label for="gameId" class="pb-1 block">Game ID</label>
      <Input
        type="text"
        id="gameId"
        placeholder="Enter your game ID"
        classes="mb-3"
      />

      <label for="gamePassword" class="pb-1 block">Game Password</label>
      <Input
        type="text"
        id="gamePassword"
        placeholder="Enter the game password"
        classes="mb-3"
      />

      <Button
        text="Join game"
        gradientStart="blue-500"
        gradientEnd="indigo-500"
        classes="w-full mt-3 mb-1"
      />
    </form>
  </div>
</div>
