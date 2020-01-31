import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const COOKIE_DESCRIPTION = "GATSBY_OPT_IN"

const ONE_YEAR_FROM_NOW = (() => {
  let aYearFromNow = new Date()
  aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1)
  return aYearFromNow
})()

export const userHasChosen = () => {
  return document.cookie.includes(`${COOKIE_DESCRIPTION}`)
}

export const userOptedIn = () => {
  return document.cookie.includes(`${COOKIE_DESCRIPTION}=true`)
}

export const userOptsIn = () => {
  document.cookie = `${COOKIE_DESCRIPTION}=true; path=/; expires=${ONE_YEAR_FROM_NOW.toUTCString()}`
  window.location.reload()
}

export const userOptsOut = () => {
  document.cookie = `${COOKIE_DESCRIPTION}=false; path=/; expires=${ONE_YEAR_FROM_NOW.toUTCString()}`
  window.location.reload()
}

export const OptInWrapper = ({ children }) => {
  const [hide, setHide] = useState(true)

  useEffect(() => {
    if (!userHasChosen()) setHide(false)
  }, [])

  if (hide) return null

  return <>{children}</>
}

OptInWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
