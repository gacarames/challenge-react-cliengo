import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser } from '../../redux/slices/userSlice';
import { StyledForm, StyledLabel, StyledInput, StyledSubmit, StyledErrorDisplay } from './styled';
import { useForm } from "react-hook-form";
import formValidations from "../../utils/formValidations";

const Form: FC = () => {

    const { register, formState, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({
                name: '',
                email: '',
                phone: '',
                country: ''
            });
        }
    }, [formState, reset]);

    const dispatch = useDispatch()

    const handleCreateUser = (data: { [key: string]: string }): void => {
        dispatch(
            addUser({
                name: data.name,
                email: data.email,
                phone: data.phone,
                country: data.country
            })
        );
    };

    return (
        <StyledForm onSubmit={handleSubmit(handleCreateUser)}>
            <StyledLabel htmlFor='name'>
                Name
            </StyledLabel>
            <StyledInput
                placeholder='Name'
                type='text'
                {...register("name", formValidations.nameValidations)}
            />
            <StyledLabel htmlFor='email'>
                Email
            </StyledLabel>
            <StyledInput
                placeholder='Email'
                type='text'
                {...register("email", formValidations.emailValidations)}
            />
            <StyledLabel htmlFor='phone'>
                Phone
            </StyledLabel>
            <StyledInput
                placeholder='Phone'
                type='text'
                {...register("phone", formValidations.phoneValidations)}
            />
            <StyledLabel htmlFor='country'>
                País
            </StyledLabel>
            <StyledInput
                placeholder='Country'
                type='text'
                {...register("country", formValidations.countryValidations)}
            />
            {formState.errors && (
                <StyledErrorDisplay>
                    {Object.values(formState.errors).map((elem, i) => <small className="error-message" key={`error-${elem.type}-${i}`}>{elem.message}</small>)}
                </StyledErrorDisplay>
            )}
            <StyledSubmit type='submit' value='Aceptar' />
        </StyledForm>
    )
}

export default Form