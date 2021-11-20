<script lang="ts">
  export let text: string;
  export let gradientStart: string = "";
  export let gradientEnd: string = "";
  export let classes: string = "";
  export let onClick: () => void;
</script>

<button
  on:click={onClick}
  class={`bg-gradient-to-br from-${gradientStart} to-${gradientEnd} transition-all py-3 px-5 rounded-lg text-white ${classes}`}
  >{text}</button
>
