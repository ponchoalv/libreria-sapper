<script>
	import Nav from '../components/Nav.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<svelte:head>
	<meta name="Description" content="App para la gestion de libería álvarez">
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>