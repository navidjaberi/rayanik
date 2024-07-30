import { useLoadingIndicator } from '#app/composables/loading-indicator';

export function startLoading() {
  console.log('Starting loading indicator!');
  useLoadingIndicator().start();
}

export function stopLoading() {
  console.log('Stoping loading indicator!');
  useLoadingIndicator().finish();
}
