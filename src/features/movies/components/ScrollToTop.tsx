import React, { useState, useEffect } from "react"
import styles from "../Movies.module.scss"

const ScrollToTop: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!showScrollTop) return null

  return (
    <button
      className={styles.scrollTopButton}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className={styles.chevronUp}>&#8593;</span>
    </button>
  )
}

export default ScrollToTop
