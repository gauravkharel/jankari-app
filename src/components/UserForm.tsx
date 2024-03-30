import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "./ui/Button";
import { UserSchema } from "@/lib/resolver";
import { Input } from "./ui/Input";
import { Select, SelectItem } from "./ui/Select";
import { SelectContent, SelectTrigger, SelectValue } from "@radix-ui/react-select";

export type FormData = {
    name: string,
    email: string,
    phonenumber: number,
    dob: Date,
    address: {
        province: string,
        city: string,
        district: string,
        country: string
    },
    profilepicture: string
}

const UserForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(UserSchema) })
    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <form className="grid grid-row-2 text-md" onSubmit={onSubmit}>
            <div>
                <div>
                    <label htmlFor="name">Name: </label>
                    <Input  {...register("name")} placeholder="Gaurav" />
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <Input type="email" {...register("email")} placeholder="vadizu@mailnator.com" />
                    {errors?.email && <p>{errors.email.message}</p>}
                </div>
            </div>

            <div>
                <Input {...register("phonenumber")} placeholder="123" />
                {errors?.phonenumber && <p>{errors.phonenumber.message}</p>}

            </div>
            <div>
                <Input type="date" {...register("dob")} />
                {errors?.dob && <p>{errors.dob.message}</p>}
            </div>


            <div>
                <label>Address</label>
                <Input type="text" {...register('address.city')} placeholder="City" />
                {errors.address?.city && <span>City is required</span>}
                <Input type="text" {...register('address.district')} placeholder="District" />
                {errors.address?.district && <span>District is required</span>}
                <Select {...register('address.province')}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select Province" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Province 1">Province 1</SelectItem>
                        <SelectItem value="Province 2">Province 2</SelectItem>
                        <SelectItem value="Bagmati Province">Bagmati Province</SelectItem>
                        <SelectItem value="Gandaki Province">Gandaki Province</SelectItem>
                        <SelectItem value="Lumbini Province">Lumbini Province</SelectItem>
                        <SelectItem value="Karnali Province">Karnali Province</SelectItem>
                        <SelectItem value="Sudurpashchim Province">Sudurpashchim Province</SelectItem>
                    </SelectContent>
                </Select>
                {errors.address?.province && <span>Province is required</span>}
                <Input type="text" {...register('address.country')} value="Nepal" readOnly />
            </div>
            <div>
                <label>Profile Picture (PNG only)</label>
                <Input type="file" accept=".png" {...register('profilepicture')} />
                {errors.profilepicture && <span>Profile Picture is required and must be in PNG format</span>}
            </div>
            <Button type="submit" variant={'default'} >Submit</Button>
        </form>
    )
}

export default UserForm