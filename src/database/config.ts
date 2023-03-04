import dotenv from 'dotenv'

dotenv.config()

const { PGUSER, PGHOST, PGPASSWORD, PGDATABASE, PGPORT } = process.env

export const dbConfig = {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
}

