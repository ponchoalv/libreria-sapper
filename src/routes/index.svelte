<script>
import { cubicIn } from 'svelte/easing';

function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				let eased = cubicIn(t);
				return `transform: scale(${eased}) rotate(${eased * 1080}deg);`
			}
		};
	}
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}
	
	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
    margin-right: 11px;
    margin-bottom: 4px;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success AND GREATNESSS!</h1>

<figure>
	<img in:spin="{{duration: 1000}}" alt='Logo librería Alvarez' src='logo-black.png'>
	<figcaption>HIGH FIVE! BABYYYY</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
