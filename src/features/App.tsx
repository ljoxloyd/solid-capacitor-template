import { SplashScreen } from "@capacitor/splash-screen"
import { onMount } from "solid-js"
import { Icon } from '@iconify-icon/solid'

export default function App() {
    onMount(() => {
        console.log('app mounted')
        SplashScreen.hide()
    })

    return <>
        <h1 class="flex"> Solid App <Icon icon="vscode-icons:file-type-bun" width="2em" /> </h1>
    </>
}


