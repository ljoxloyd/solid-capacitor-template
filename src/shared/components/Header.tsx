import { Icon } from '@iconify-icon/solid'
import clsx from 'clsx'
import * as theme from '../styles/theme.css'
import * as cls from './Header/Header.css'

export default function Header(props: {
    text: string
}) {
    return <h1 class={clsx(theme.flexRow, cls.text)}> {props.text} <Icon icon="vscode-icons:file-type-bun" width="2em" /> </h1>
}
