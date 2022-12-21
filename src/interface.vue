<template>
  <p>{{ fileLink }}</p>
</template>
<script setup lang="ts">
import { useApi } from '@directus/extensions-sdk';
import { ref, watch, watchEffect } from 'vue';
import { getPublicURL } from './utils';

const props = defineProps({
  collection: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  primaryKey: {
    type: Number
  }
});

const api = useApi();
const fileData = ref({});
const fileLink = ref('');
const baseUrl = getPublicURL();

watchEffect(async () => {
  const response = await api.get(`/files/?filter[id][_eq]=${props.primaryKey}`);
  const data = response.data.data[0];
  fileData.value = data;
});


watch([fileData], () => {
  fileLink.value = `${baseUrl}assets/${fileData.value.id}/${fileData.value.filename_download}`
});

</script>
