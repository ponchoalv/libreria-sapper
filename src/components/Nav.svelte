<script>
	import routes from './routes.js';
	import Hoverable from './Hoverable.svelte';
	import { slide } from 'svelte/transition';

	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

  .active {
		position: relative;
		display: inline-block;
	}

	.active::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 15px;
		background-color: rgb(255,62,0);
		transition: height 0.2s;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	
</style>

<nav>
	<ul>
			<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		
		{#each routes as route}
			<li>
				<Hoverable let:hovering={active}>
					<a transition:slide={active} rel='{route.prefetch ? 'prefetch' : ''}' class:selected='{segment === route.segment}' class:active href='{route.path}'>
						{route.display}
					</a>
				</Hoverable>
			</li>
		{/each}
	</ul>
</nav>