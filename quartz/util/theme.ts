export interface ColorScheme {
  light: string
  lightgray: string
  gray: string
  heading1: string
  darkgray: string
  dark: string
  secondary: string
  tertiary: string
  outline: string
  highlight: string
  note: string
  outerbar: string
  textcolor: string
  calloutinfocolor: string
  statblockcolor: string
}

interface Colors {
  lightMode: ColorScheme
  darkMode: ColorScheme
}

export interface Theme {
  typography: {
    header: string
    body: string
    code: string
  }
  cdnCaching: boolean
  colors: Colors
  fontOrigin: "googleFonts" | "local"
}

export type ThemeKey = keyof Colors

const DEFAULT_SANS_SERIF =
  "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Microsoft YaHei Light', sans-serif"
const DEFAULT_MONO = "ui-monospace, SFMono-Regular, SF Mono, Menlo, monospace"
const DEFAULT_HEADER = "'Fira Code','Calisto MT', 'Palatino Black', 'Book Antiqua', 'Georgia', 'Suez One', serif"

export function googleFontHref(theme: Theme) {
  const { code, header, body } = theme.typography
  return `https://fonts.googleapis.com/css2?family=${code}&family=${header}:wght@400;700&family=${body}:ital,wght@0,400;0,600;1,400;1,600&display=swap`
}

export function joinStyles(theme: Theme, ...stylesheet: string[]) {
  return `
${stylesheet.join("\n\n")}

:root {
  --light: ${theme.colors.lightMode.light};
  --lightgray: ${theme.colors.lightMode.lightgray};
  --gray: ${theme.colors.lightMode.gray};
  --heading1: ${theme.colors.lightMode.heading1};
  --darkgray: ${theme.colors.lightMode.darkgray};
  --dark: ${theme.colors.lightMode.dark};
  --secondary: ${theme.colors.lightMode.secondary};
  --tertiary: ${theme.colors.lightMode.tertiary};
  --highlight: ${theme.colors.lightMode.highlight};
  --note: ${theme.colors.lightMode.note};
  --outline: ${theme.colors.lightMode.outline};
  --outerbar: ${theme.colors.lightMode.outerbar};
  --textcolor: ${theme.colors.lightMode.textcolor};
  --statblockcolor: ${theme.colors.lightMode.statblockcolor};
  --calloutinfocolor: ${theme.colors.lightMode.calloutinfocolor};
  --headerFont: "${theme.typography.header}", ${DEFAULT_HEADER};
  --bodyFont: "${theme.typography.body}", ${DEFAULT_SANS_SERIF};
  --codeFont: "${theme.typography.code}", ${DEFAULT_MONO};
}

:root[saved-theme="dark"] {
  --light: ${theme.colors.darkMode.light};
  --lightgray: ${theme.colors.darkMode.lightgray};
  --gray: ${theme.colors.darkMode.gray};
  --darkgray: ${theme.colors.darkMode.darkgray};
  --dark: ${theme.colors.darkMode.dark};
  --secondary: ${theme.colors.darkMode.secondary};
  --tertiary: ${theme.colors.darkMode.tertiary};
  --note: ${theme.colors.darkMode.note};
  --highlight: ${theme.colors.darkMode.highlight};
  --outline: ${theme.colors.darkMode.outline};
  --heading1: ${theme.colors.darkMode.heading1};
}
`
}
