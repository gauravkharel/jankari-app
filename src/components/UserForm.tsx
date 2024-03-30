import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "./ui/Button";
import { UserSchema } from "@/lib/resolver";

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
    } = useForm<FormData>({resolver: zodResolver(UserSchema)})
    const onSubmit = handleSubmit((data) => console.log(data))

    return (
        <form className="flex flex-col" onSubmit={onSubmit}>
            <input className="text-2xl" {...register("name")} placeholder="Gaurav" />
            {errors?.name && <p>{errors.name.message}</p>}
            <input type="email" {...register("email")} placeholder="vadizu@mailnator.com" />
            {errors?.email && <p>{errors.email.message}</p>}

            <input {...register("phonenumber")} placeholder="123" />
            {errors?.phonenumber && <p>{errors.phonenumber.message}</p>}

            <input type="date" {...register("dob")} />
            {errors?.dob && <p>{errors.dob.message}</p>}

            <div>
                <label>Address</label>
                <input type="text" {...register('address.city')} placeholder="City" />
                {errors.address?.city && <span>City is required</span>}
                <input type="text" {...register('address.district')} placeholder="District" />
                {errors.address?.district && <span>District is required</span>}
                <select {...register('address.province')}>
                    <option value="">Select Province</option>
                    <option value="Province 1">Province 1</option>
                    <option value="Province 2">Province 2</option>
                    <option value="Bagmati Province">Bagmati Province</option>
                    <option value="Gandaki Province">Gandaki Province</option>
                    <option value="Lumbini Province">Lumbini Province</option>
                    <option value="Karnali Province">Karnali Province</option>
                    <option value="Sudurpashchim Province">Sudurpashchim Province</option>
                </select>
                {errors.address?.province && <span>Province is required</span>}
                <input type="text" {...register('address.country')} value="Nepal" readOnly />
            </div>
            <div>
                <label>Profile Picture (PNG only)</label>
                <input type="file" accept=".png" {...register('profilepicture')} />
                {errors.profilepicture && <span>Profile Picture is required and must be in PNG format</span>}
            </div>
            <Button type="submit" variant={'default'} >Submit</Button>
        </form>
    )
}

export default UserForm