<script>
  export let text;
  export let gradientStart;
  export let gradientEnd;
  export let classes;
</script>

<button
  class={`bg-gradient-to-br from-${gradientStart} to-${gradientEnd} transition-all hover:from-blue-600 hover:to-indigo-600 py-3 px-5 rounded-lg text-white ${classes}`}
  >{text}</button
>
