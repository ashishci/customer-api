import { Pool, PoolConfig } from 'pg'

import { dbConfig } from './config'

const connectDb = async (sql: string) => {
    try {
        const pool = new Pool(dbConfig as PoolConfig);

        await pool.connect()
        const res = await pool.query(sql)
        console.log(res)
        await pool.end()
    } catch (error) {
        console.log(error)
    }
}