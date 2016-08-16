<template>
	<header>
		<nav class="container">
			<h1>
				<a href="/">Logo</a>
			</h1>
			<a href=""></a>
			<ul>
				<li><a href="">介绍</a></li>
				<li><a href="">关于</a></li>
				<li><a href="javascript:void(0);" class="button" @click="login">登陆</a></li>
				<li><a href="" class="button button-primary" v-link="{ name: 'admin' }">注册</a></li>
			</ul>
		</nav>
	</header>
	<overlay v-if="showLogin" transition="fade" :show.sync="showLogin"></overlay>
</template>

<script>
import Overlay from './Overlay'

export default {
	data () {
		return {
			showLogin: false
		}
	},
	methods: {
		login () {
			this.showLogin = true
		}
	},
	components: {
			Overlay
		}
}
</script>

<style lang="stylus" scoped>
@import '../assets/_variables.styl'
header
	background $bgColor
	position fixed
	top 0
	left 0
	right 0
	z-index 100
	box-shadow 0 1px 1px rgba(0,0,0,.1)
	nav
		&:after
			content ''
			clear both
			display block
		h1
			margin 20px
			font-size 28px
			line-height 30px
			float left
		ul
			float right
			li
				display inline-block
				a
					display block
					height 70px
					line-height 70px
					padding 0 20px
					font-size 14px
					&.button
						height 28px
						line-height 28px
						margin 20px
				&:last-child a.button
					margin 20px 0
</style>