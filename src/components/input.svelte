<script>
  export let type;
  export let id;
  export let placeholder;
  export let classes;
</script>

<input
  class={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${classes}`}
  {id}
  {type}
  {placeholder}
/>
