<template>
	<nav class="bg-white text-black px-4 py-2 shadow-md">
		<div class="mx-auto flex">
		<!-- Mobile Menu Toggle -->
		<button @click="toggleMenu" class="text-xl">☰</button>

		<img src="../assets/logosysmex.png" class="h-12 mx-auto" />

		<!-- Brand -->
		<router-link to="/" class="text-xl font-bold">QC Performance</router-link>
		</div>
	</nav>

  <!-- Sidebar -->
  <div class="fixed inset-0" v-if="isOpen" @click="toggleMenu"></div>

  	<aside
		class="fixed top-0 left-0 w-64 h-full bg-blue-500 shadow-lg transform transition-transform duration-300 ease-in-out"
		:class="{ '-translate-x-full': !isOpen, 'translate-x-0': isOpen }"
	>
		<button @click="toggleMenu" class="absolute top-2 right-2 text-white text-2xl">&times;</button>

		<ul class="mt-16 p-4">
			<li v-for="link in links" :key="link.path" class="py-2">
				<router-link :to="link.path" class="block text-white hover:underline" @click="toggleMenu">
				{{ link.text }}
				</router-link>
			</li>
		</ul>
	</aside>
</template>

<script lang="ts" setup>
	import { ref } from 'vue'

	const isOpen = ref(false)

	const links = ref([
		{ text: 'Home', path: '/' },
		{ text: 'About', path: '/about' },
		{ text: 'Services', path: '/services' },
		{ text: 'Contact', path: '/contact' },
	])

	const toggleMenu = () => {
		isOpen.value = !isOpen.value
	}
</script>

<style scoped>
	/* Hide sidebar off-screen */
	.-translate-x-full {
	transform: translateX(-100%);
	}
	.translate-x-0 {
	transform: translateX(0);
	}
</style>
