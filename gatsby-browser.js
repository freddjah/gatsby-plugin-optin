import { userOptedIn } from "."

const addScripts = scripts => {
  scripts.forEach(script => {
    const tag = document.createRange().createContextualFragment(script)

    document.getElementById("___gatsby").appendChild(tag)
  })
}

export const onRouteUpdate = (_, { scripts }) => {
  if (scripts && userOptedIn()) {
    addScripts(scripts)
  }
}
