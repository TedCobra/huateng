<template>
	<div id="app">
		<Navigate />
		<!-- view -->
		<router-view />
	</div>
</template>

<script>
import Navigate from './components/Navgate.vue';
export default {
	components: {
		Navigate
	}
};
</script>
