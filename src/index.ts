import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'custom',
	name: 'Public File Link',
	icon: 'box',
	description: 'This interface displays the public link of a file on its details page.',
	component: InterfaceComponent,
	options: null,
	localTypes: ['presentation'],
	types: ['alias'],
	group: 'presentation',
});
