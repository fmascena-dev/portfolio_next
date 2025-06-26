"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"

type FormData = {
    firstName: string
    lastName: string
    email: string
    phone: string
    service: string
    message: string
}


export default function Contact() {
    const [isSubmitting, setisSubmitting] = useState(false)
    const [register, handleSubmit, formState, reset] = useForm<FormData>()

    return (
        <h1>Contact</h1>
    )
}