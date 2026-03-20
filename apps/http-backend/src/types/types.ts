import z from "zod";

export const Signup = z.object({
    email: z.email(),
    name : z.string(),
    password : z.string()
})

export const Signin= z.object({
    email : z.email(),
    password : z.string()
})