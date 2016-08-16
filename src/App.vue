<template>
	<appbar></appbar>
	<div class="main">
		<router-view></router-view>	
	</div>
</template>

<style lang="stylus" scoped>
	div.main
		padding-top 70px
</style>

<script>
	import Appbar from './components/Appbar'

	export default {
		components: {
			Appbar
		}
	}
</script>