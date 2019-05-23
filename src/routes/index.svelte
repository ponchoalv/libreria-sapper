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
	
	@keyframes home-logo {
    0% {
        transform: rotate(0deg);
    }
    33% {
        transform: rotate(40deg);
    }
		66% {

			transform: rotate(-40deg);
		}
		90% {
			transform: rotate(0deg);
		}
		95% {
			transform: scale(1.3);
		}
		100% {
			transform: scale(1);
		}
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
		animation-name: home-logo;
    animation-duration: 6s;
    animation-iteration-count: infinite;
    animation-timing-function: easy-in-out;
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
	<img alt='Logo librería Alvarez' src='logo-black.png'>
	<figcaption>HIGH FIVE! BABYYYY</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
