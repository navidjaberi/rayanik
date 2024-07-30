const isStarted = ref(false);

export default defineNuxtPlugin({
  // eslint-disable-next-line unused-imports/no-unused-vars
  async setup(nuxtApp) {},
  hooks: {
    // You can directly register Nuxt app runtime hooks here
    'page:loading:end': async function () {
      console.log('Calling startLoading function from a plugin!');
      startLoading();
    },
  },
});
