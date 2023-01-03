import { SplashScreen } from "@capacitor/splash-screen"
import { onMount } from "solid-js"
import Header from "../shared/components/Header"

export default function App() {
    onMount(() => {
        console.log('app mounted')
        SplashScreen.hide()
    })

    return <>
        <Header text="Solid App" />
    </>
}
