import * as z from "zod";

const province=[
  "Province 1",
  "Province 2",
  "Bagmati Province",
  "Gandaki Province",
  "Lumbini Province",
  "Karnali Province",
  "Sudarpashchim Province",
] as const

"Kathmandu, Bagmati Province"

export const UserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid Email. Please use valid email format." }),
  phonenumber: z.string().refine((value) => /^\d{7,}$/.test(value), {
    message: "Phone number must be only numbers and at least 7 digits",
  }),
  dob: z.date(),
  address: z.object({
    city: z.string(),
    district: z.string(),
    province: z.enum(province),
    country: z.string().default("Nepal"),
  }),
  profilePicture: z.string().refine((value) => value.endsWith('.png'), {
    message: 'Profile picture must be in PNG format'
  })
});
