<template>
	<p>{{ fileLink }}</p>
</template>
<script setup lang="ts">
import { useApi, useStores } from '@directus/extensions-sdk';

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

const useFieldsData = async () => {
  const response = await api.get(`/files/?filter[id][_eq]=${props.primaryKey}`);
  return await response.data.data
}

const fieldsData = await useFieldsData()
const fileLink = `/assets/${fieldsData[0].id}/${fieldsData[0].filename_download}`
</script>
