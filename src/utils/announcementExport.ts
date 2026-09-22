export const ANNOUNCEMENT_EXPORT_CARD_WIDTH = 880
export const ANNOUNCEMENT_EXPORT_PADDING = 0
export const ANNOUNCEMENT_EXPORT_BACKGROUND = '#000000'
const ANNOUNCEMENT_EXPORT_CARD_BACKGROUND = '#101010'

type ExportStyleMap = Record<string, string>

export type AnnouncementExportConfig = {
  cardWidth: number
  padding: number
  wrapperWidth: number
  backgroundColor: string
  wrapperStyles: ExportStyleMap
  cardStyles: ExportStyleMap
  scrollStyles: ExportStyleMap
}

const applyInlineStyles = (element: HTMLElement, styles: ExportStyleMap) => {
  Object.entries(styles).forEach(([key, value]) => {
    const cssProperty = key.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
    element.style.setProperty(cssProperty, value)
  })
}

export const buildAnnouncementExportConfig = (
  cardWidth = ANNOUNCEMENT_EXPORT_CARD_WIDTH,
  padding = ANNOUNCEMENT_EXPORT_PADDING,
  backgroundColor = ANNOUNCEMENT_EXPORT_BACKGROUND,
): AnnouncementExportConfig => {
  const wrapperWidth = cardWidth + padding * 2

  return {
    cardWidth,
    padding,
    wrapperWidth,
    backgroundColor,
    wrapperStyles: {
      // position: 'fixed',
      // left: '-100000px',
      // top: '0',
      width: `${wrapperWidth}px`,
      // padding: `${padding}px`,
      // boxSizing: 'border-box',
      background: backgroundColor,
      // overflow: 'visible',
      // zIndex: '-1',
    },
    cardStyles: {
      // width: `${cardWidth}px`,
      // maxWidth: 'none',
      // margin: '0',
      background: ANNOUNCEMENT_EXPORT_CARD_BACKGROUND,
      // backdropFilter: 'none',
      // webkitBackdropFilter: 'none',
      // overflow: 'visible',
    },
    scrollStyles: {
      overflow: 'visible',
    },
  }
}

export const createAnnouncementExportSandbox = (
  sourceElement: HTMLElement,
  config: AnnouncementExportConfig = buildAnnouncementExportConfig(),
) => {
  const wrapper = document.createElement('div')
  const clonedCard = sourceElement.cloneNode(true) as HTMLElement

  wrapper.setAttribute('aria-hidden', 'true')
  applyInlineStyles(wrapper, config.wrapperStyles)
  applyInlineStyles(clonedCard, config.cardStyles)

  clonedCard
    .querySelectorAll<HTMLElement>('.sample-scroll')
    .forEach((element) => applyInlineStyles(element, config.scrollStyles))

  wrapper.appendChild(clonedCard)
  document.body.appendChild(wrapper)

  return {
    wrapper,
    clonedCard,
    cleanup: () => {
      wrapper.remove()
    },
  }
}
