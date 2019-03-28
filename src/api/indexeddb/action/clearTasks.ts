import { db } from '../db'
import config from '../config.json'

export const clearTasksIDB = async () => {
  const tablename = config.tables.tasks.name
  return new Promise((resolve, reject) => {
    db.table(tablename)
      .clear()
      .then((res: any) => resolve(res))
      .catch((err: any) => reject(err))
  })
}