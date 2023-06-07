this was created for the purpose of learning REACT-HOOK-FORM

\***\*\*\*\*** every form has few moving parts that keeps changing from the time a user loads the form to the time they submit it.

- current value of the form
- whether the field has been interacted with
- whether a fields value has changed
- whether a form is invalid
- whether the field contains errors
  **\*** all the above are called FORM STATE \*\*\*\*

      <!--  -->

  \*\*\*\* const form = useForm()
  // to track the form state with react-hook-form use 👇
  const { register } = form
  const { name, ref, onChange, onBlur } = register('username')
  instead of doing the below 👇
  <input
        type="text"
        id="username"
        name={name}
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        className="w-96 border border-black"
    />

        you can do 👇
        <!-- spread the register -->

  <input
  type="text"
  id="username"
  {...register('fieldname')}
  className="w-96 border border-black"
  />

  // to verify if react-hook-form is truly working
  install 👉 npm install -D @hookform/devtools

import {DevTools} from '@hookform/devtools'

pass control into form object
const { register, control} = form

then pass DevTools after the closing form tag

<div>
    <form>
        <input/>
    <form>
    <!-- this will allow you see how react-hook-form tracks your form -->
    <DevTools control={control}>
</div>

\*\*\*\* to submit the form

const { register, control, handleSubmit} = form

<!-- define the data types if you are using typescript -->

const onSubmit=(data:FormValues)=>{

<!-- your logics -->

}

<div>
    <form onSubmit={handleSubmit(onSubmit)}>
        <input/>
    <form>
    <!-- this will allow you see how react-hook-form tracks your form -->
    <DevTools control={control}>
</div>
