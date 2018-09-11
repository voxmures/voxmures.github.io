<template>
	<transition :name="transition" :mode="mode">
		<slot></slot>
	</transition>
</template>

<script>
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

const DEFAULT_TRANSITION = 'fade';
const DEFAULT_MODE = 'out-in';

@Component({})
export default class TransitionPage extends Vue {
	transition = DEFAULT_TRANSITION;
	mode = DEFAULT_MODE;

	/* VUE.JS HOOKS */
	created() {
		this.$router.beforeEach((to, from, next) => {
			let transition = to.meta.transition || from.meta.transition || DEFAULT_TRANSITION;

			if (transition === 'slide') {
				const toDepth = to.path.split('/').length;
				const fromDepth = from.path.split('/').length;
				transition = toDepth < fromDepth ? 'slide-right' : 'slide-left';
			}

			this.transition = transition;

			next();
		});
	};
};
</script>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>