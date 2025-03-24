<script setup lang="ts">
	import { ref } from 'vue'
	import Sidebar from '@/components/SideBar.vue'
</script>

<template>
	<div class="container mx-auto">
		<main>
			<table>
				<thead>
					<tr>
						<th class="py-5 px-10 text-left">Test Name</th>
						<th class="p-5">#Result</th>
						<th class="p-5">Cal. Mean</th>
						<th class="p-5">Cal. SD</th>
						<th class="p-5">Cal. CV</th>
						<th class="p-5">Quo Mean</th>
						<th class="p-5">Quo SD</th>
						<th class="p-5">Quo CV</th>
						<th class="p-5">BIAS(%)</th>
						<th class="p-5">Total Error (%)</th>
						<th class="p-5">TEA</th>
						<th class="p-5">TEA Unit</th>
						<th class="p-5">SIGMA</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-t">
						<td class="px-10">Hemoglobin</td>
						<td class="py-2 px-5 text-center">9</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">9</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">9</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">9</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">0</td>
						<td class="py-2 px-5 text-right">9</td>
					</tr>
				</tbody>
				
			</table>
		</main>
	</div>
</template>
