<script>
	import { stores } from '@sapper/app';
	const { preloading, page, session } = stores();
	session.update( (n) => {return {user: "ponchooooooo"}});
</script>

<svelte:head>
	<title>Acerca</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>