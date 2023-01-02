import { SplashScreen } from "@capacitor/splash-screen"
import { onMount } from "solid-js"

export default function Solid() {
    onMount(() => {
        SplashScreen.hide()
    })

    return <h1> Solid App </h1>
}


