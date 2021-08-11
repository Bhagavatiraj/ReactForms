import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    firstName: yup.string().required("First Name  required"),
    lastName: yup.string().required("Last Name required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required("Age must be a number"),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});


const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const submitForm = (data) => {
        console.log(data);
    };
    return (
        <div className="container">
            <div className="title">Sign Up</div>
            <div className="ui divider"></div>
            <div className="ui form">
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className="field">
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            {...register('firstName')}
                            placeholder="First Name..."
                        />

                    </div>

                   
                    <span className="p1">{errors.firstName?.message}</span>
                    <div className="field">
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name..."
                            {...register('lastName')}
                        />

                    </div>
                    {/* <p class="p1"> {errors.lastName?.message} </p> */}
                    <span class="p1"> {errors.lastName?.message}</span>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email..."
                            {...register('email')}
                        />
                    </div>
                    {/* <p class="p1"> {errors.email?.message} </p> */}
                   <span className="p1">{errors.email?.message}</span> 
                    <div className="field">
                        <label>Age</label>
                        <input type="text" name="age" placeholder="Age..." {...register('age')} />
                    </div>
                   
                    <span class="p1">{errors.age?.message.slice(0,22)}</span>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password..."
                            {...register('password')}
                        />
                    </div>
                    <span class="p1"> {errors.password?.message} </span>
                    <div className="field">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password..."
                            {...register('confirmPassword')}
                        />
                    </div>
                    <p class="p1"> {errors.confirmPassword && "Passwords Should Match!"} </p>


                    <button className="fluid ui button blue" type="submit" id="submit">Submit</button>

                </form>
            </div>
        </div>
    );
}

export default Form;



//install 
//npm i -g yarn
//npm i react-hook-form yup @hookform/resolvers
//semantic ui extension is added in index.html
//    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
