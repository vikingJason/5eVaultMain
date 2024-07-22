import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      mapFn: (node) => {
        node.displayName = node.displayName.toUpperCase()
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "📄 " + node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["authoring content", "tags", "hosting"])
        return !omit.has(node.name.toLowerCase())
      },
    })),
    Component.MobileOnly(Component.TableOfContents()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Graph(),
    Component.Backlinks(),
    Component.MobileOnly(Component.Explorer({
      mapFn: (node) => {
        node.displayName = node.displayName.toUpperCase()
        if (node.depth > 0) {
          // set emoji for file/folder
          if (node.file) {
            node.displayName = "📄 " + node.displayName
          } else {
            node.displayName = "📁 " + node.displayName
          }
      },
      filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["authoring content", "tags", "hosting"])
        return !omit.has(node.name.toLowerCase())
      },
    })),
  ],

}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}