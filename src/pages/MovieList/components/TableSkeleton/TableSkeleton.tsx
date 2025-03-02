import styles from "./TableSkeleton.module.scss"

interface TableSkeletonProps {
  rows?: number
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({ rows = 5 }) => {
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className={styles.tableHeader}>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
            <th className="d-none d-md-table-cell">Type</th>
            <th className="d-none d-lg-table-cell">IMDb ID</th>
          </tr>
        </thead>
        <tbody>
          {Array(rows)
            .fill(0)
            .map((_, index) => (
              <tr key={index} className={styles.skeletonRow}>
                <td>
                  <div className={styles.skeletonPoster}></div>
                </td>
                <td>
                  <div className={styles.skeletonText}></div>
                </td>
                <td>
                  <div className={styles.skeletonYear}></div>
                </td>
                <td className="d-none d-md-table-cell">
                  <div className={styles.skeletonType}></div>
                </td>
                <td className="d-none d-lg-table-cell">
                  <div className={styles.skeletonId}></div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableSkeleton
