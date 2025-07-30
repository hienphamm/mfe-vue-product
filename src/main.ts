import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

let appInstance: ReturnType<typeof createApp> | null = null;

export function mount(el: Element, props: { currentPath?: string } = {}) {
    if (appInstance) return;
    appInstance = createApp(App, props);
    appInstance.use(router);
    if (props.currentPath) {
        router.replace(props.currentPath);
    }
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