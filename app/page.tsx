'use client'

import { useForm } from 'react-hook-form'
// to verify if react-hook-form is truly working
import { DevTool } from '@hookform/devtools'

type FormValues = {
  name: string
  email: string
  education: string
}

export default function Home() {
  const form = useForm<FormValues>()
  // to track the form state with react-hook-form use 👇
  const { register, control, handleSubmit } = form

  const onSubmit = (data: FormValues) => {
    console.log('Submitted', data)
  }

  return (
    <div className="w-screen h-screen grid place-items-center">
      <form
        className="container mx-auto w-[30rem] h-fit flex flex-col items-start gap-4 p-8 bg-white shadow-black shadow-inner"
        onSubmit={handleSubmit(onSubmit)}
        // to make inputs required
        noValidate
      >
        <div className="flex flex-col items-start gap-2">
          <label htmlFor="name" className="text-sm text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="name"
            {...register('name', {
              required: 'username is required',
            })}
            className="w-96 border border-black"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <label htmlFor="email" className="text-sm text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'**+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: 'invalid email address',
              },
            })}
            className="w-96 border border-black"
          />
        </div>

        <div className="flex flex-col items-start gap-2">
          <label htmlFor="education" className="text-sm text-gray-700">
            education
          </label>
          <input
            type="education"
            id="education"
            {...register('education')}
            className="w-96 border border-black"
          />
        </div>
        <button className="w-fit h-fit py-3 px-2 border border-gray-600 bg-transparent">
          button
        </button>
      </form>
      <DevTool control={control} />
    </div>
  )
}
