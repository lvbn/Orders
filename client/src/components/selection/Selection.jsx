import styles from './Selection.module.css'

export default function Selection({statuses}) {
  // console.log(statuses)
  return (
    <select className={styles.select}>
      {statuses.map(status => (
        <option key={status}>{status}</option>
      ))}
    </select>
  )
}
