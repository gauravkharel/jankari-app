import { ColumnDef } from "@tanstack/react-table"
import { UserSchema } from "@/lib/resolver"
import { Button } from "../ui/Button"
import { Link } from "react-router-dom"

export const columns: ColumnDef<typeof UserSchema>[] = [
    {
        accessorKey: "name",
        header: "Name",
    },
    {
        accessorKey: "email",
        header: "Email",
    },
    {
        accessorKey: "address.district",
        header: "Address"
    },
    {
        header: "Update",
        cell: (({id})=> {
            return (
                <>
                    <Link to={`/${id}/update`}>Update</Link>
                </>
            )
        })
    },
    {
        header: "Delete",
        cell: (({id})=> {
            return (
                <>
                    <Button onClick={() => {console.log(id)}} className="border-2 bg-red-600 px-4 py-2 rounded-lg text-white " variant={'destructive'} >Delete</Button>
                </>
            )
        })
    }


]
