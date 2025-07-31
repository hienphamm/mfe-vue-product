import {createApp, h, provide} from 'vue';
import App from './App.vue';
import router from './router';

let appInstance: ReturnType<typeof createApp> | null = null;

export async function mount(el: Element, props: {} = {}) {
    if (appInstance) return;
    const remoteStore = await import('global_store/store');
    appInstance = createApp({
        setup() {
            provide('globalStore', remoteStore)
            return () => h(App, props);
        }
    });
    appInstance.use(router);
    appInstance.mount(el);

    return () => {
        if (appInstance) {
            appInstance.unmount();
            if (el.innerHTML) el.innerHTML = '';
            appInstance = null;
        }
    };
}

if (document.getElementById('app')) {
    mount(document.getElementById('app')!);
}