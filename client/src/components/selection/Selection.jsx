import { useState } from 'react'
import styles from './Selection.module.css'

export default function Selection({statuses, handleChange}) {
  // console.log('THE STATE: ', statuses)

  const [value, setValue] = useState()

  return (
    <select className={styles.select} value={value} onChange={(e) => setValue(e.target.value)}>
      {statuses.map(status => (
        <option key={status} value={status}>{status}</option>
      ))}
    </select>
  )
}
