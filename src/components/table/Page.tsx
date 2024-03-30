"use server"
import { columns } from "./Columns"
import { DataTable } from "./DataTable"
import data from '../../data/mockdata.json'

export default function UserTable() {

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
