import { defineInterface } from '@directus/extensions-sdk';
import InterfaceComponent from './interface.vue';

export default defineInterface({
	id: 'custom',
	name: 'File Link',
	icon: 'box',
	description: 'This interface displays the filelink',
	component: InterfaceComponent,
	options: null,
	types: ['alias'],
});
