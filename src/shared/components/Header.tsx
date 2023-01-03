import { Icon } from '@iconify-icon/solid'
import cls from './Header/Header.module.scss'

export default function Header(props: {
    text: string
}) {
    return <h1 class={"flex " + cls.text}> {props.text} <Icon icon="vscode-icons:file-type-bun" width="2em" /> </h1>
}
