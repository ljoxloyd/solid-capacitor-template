import { globalStyle, style } from '@vanilla-extract/css'
import { px } from './utils.css'

globalStyle('html, body', {
    backgroundColor: 'black',
    color: 'white',
    fontSize: px(16)
})

export const flexRow = style({
    display: 'flex',
    alignItems: 'center',
    gap: '1ch'
})

export const flexCol = style({
    display: 'flex',
    flexDirection: 'column',
})
