import { createRouter, createWebHistory } from 'vue-router'
import FormQcPage from '@/components/templates/FormQcPage.vue'
import ViewQcPage from '@/components/templates/ViewQcPage.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
		{
			path: '/',
			redirect: '/qc'  // Add this redirect
		},
		{
			path: '/qc',
			name: 'viewqc',
			component: ViewQcPage,
		},
		{
			path: '/qc/new',
			name: 'formqc',
			component: FormQcPage,
		},
	]
})

export default router
