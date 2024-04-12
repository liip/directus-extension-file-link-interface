<template>
	<div v-if="isFilesCollection">
		<div class="container">
			<p class="force-select">{{ fileLink }}</p>
			<v-button v-tooltip="t('copy_to_clipboard')" secondary x-small icon @click="copyToClipboard(fileLink)">
				<v-icon name="content_copy" />
			</v-button>
		</div>
		<v-notice>
			{{ t('notice') }}
		</v-notice>
	</div>
	<p v-else>
		{{ t('incompatible_collection') }}
	</p>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { getPublicURL } from './utils/get-root-path';
import { useI18n } from 'vue-i18n';

const props = defineProps({
	collection: {
		type: String,
		required: true,
	},
});

const baseUrl: string = getPublicURL();
const fileData = inject('values', ref<Record<string, any>>({}));
const fileLink = computed(() => `${baseUrl}assets/${fileData.value?.id}/${fileData.value?.filename_download}`);

const copyToClipboard = async (text: string) => {
	if (window.isSecureContext) {
		await navigator.clipboard.writeText(text);
	} else {
		console.warn('Copying to clipboard only works with \'https://\' (see: https://w3c.github.io/clipboard-apis/#dom-navigator-clipboard)');
	}
};

// This interface only works with the directus_files collection
const isFilesCollection = props.collection === 'directus_files';

const { t } = useI18n({
	messages: {
		'de-DE': {
			notice:
				'Der öffentliche Dateilink kann verwendet werden, um eine Datei freizugeben. Dies funktioniert nur, wenn die Datei öffentlich ist.',
			copy_to_clipboard: 'In Zwischenablage kopieren',
			incompatible_collection: `Dieser Feldtyp funktioniert nur mit der 'directus_files' collection.`,
		},
		'en-US': {
			notice: 'The public file link can be used to share a file with everyone. This only works if the file is public.',
			copy_to_clipboard: 'Copy to clipboard',
			incompatible_collection: `This field type only works with the 'directus_files' collection.`,
		},
	},
});
</script>

<style scoped>
.container {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1rem;
}

.force-select {
	user-select: all;
}
</style>
