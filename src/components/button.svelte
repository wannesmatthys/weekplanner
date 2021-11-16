<script>
  export let text;
  export let gradientStart;
  export let gradientEnd;
  export let classes;
</script>

<button
  class={`bg-gradient-to-br from-${gradientStart} to-${gradientEnd} transition-all py-3 px-5 rounded-lg text-white ${classes}`}
  >{text}</button
>
