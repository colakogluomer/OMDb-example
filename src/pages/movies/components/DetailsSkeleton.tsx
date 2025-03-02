import React from "react"
import styles from "../Movies.module.scss"

const DetailsSkeleton: React.FC = () => {
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className={styles.skeletonButton}></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className={styles.skeletonDetailsPoster}></div>
        </div>
        <div className="col-md-8">
          <div className={styles.skeletonTitle}></div>

          <div className="d-flex flex-wrap gap-3 text-muted mb-4 mt-3">
            <div className={styles.skeletonBadge}></div>
            <div className={styles.skeletonBadge}></div>
            <div className={styles.skeletonBadge}></div>
            <div className={styles.skeletonBadge}></div>
          </div>

          <div className="mb-4 mt-4">
            <div className={styles.skeletonSubtitle}></div>
            <div className="d-flex flex-wrap gap-3 mt-2">
              <div className={styles.skeletonRating}></div>
              <div className={styles.skeletonRating}></div>
              <div className={styles.skeletonRating}></div>
            </div>
          </div>

          <div className="mb-4">
            <div className={styles.skeletonSubtitle}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonText}></div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6 mb-3 mb-md-0">
              <div className={styles.skeletonSubtitle}></div>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
            </div>
            <div className="col-md-6">
              <div className={styles.skeletonSubtitle}></div>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
              <div className={styles.skeletonLine}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsSkeleton
