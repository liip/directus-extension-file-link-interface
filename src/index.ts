import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'extension-public-file-link',
	name: 'Public File Link',
	icon: 'box',
	description: 'This interface displays the public link of a file.',
	component: InterfaceComponent,
	options: null,
	localTypes: ['presentation'],
	types: ['alias'],
	group: 'presentation',
});
