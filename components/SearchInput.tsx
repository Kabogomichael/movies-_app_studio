"use client"
import React from 'react'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from './ui/input'

const formSchema = z.object({
    input:z.string().min(2).max(30)
})

const SearchInput = () => {
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
       resolver:zodResolver(formSchema),
        defaultValues:{
            input:"",
        }
    })
    const  onSubmit = (values:z.infer<typeof formSchema>)=>{
        router.push(`/search/${values.input}`);
        form.reset()


    }

    
  return (
   <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className=' space-y-1 '>
        <FormField control={form.control} name='input' render={({field}) =>(
            <FormItem>
            <FormControl >
                <Input placeholder='search ...' {...field} />
            </FormControl>
        </FormItem>
        )} />
        

    </form>

   </Form>
  )
}

export default SearchInput