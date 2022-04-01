import React, { FC } from "react";
import { IUserEditProps } from "../../utils/interfaces";
import { StyledForm, StyledSubmit, StyledErrorDisplay } from "../Form/styled";
import { StyledInputEdit } from "../styledComponents";
import { useForm } from "react-hook-form";
import formValidations from "../../utils/formValidations";

const UserEdit: FC<IUserEditProps> = ({ user, onEdit, onEditMode }) => {

    const { register, formState, handleSubmit } = useForm({
        defaultValues: {
            ...user
        }
    });

    const handleEditSave = (data: any): void => {
        onEdit(data);
        onEditMode();
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit(handleEditSave)}>
                <StyledInputEdit {...register("name", formValidations.nameValidations)} />
                <StyledInputEdit  {...register("email", formValidations.emailValidations)} />
                <StyledInputEdit {...register("phone", formValidations.phoneValidations)} />
                <StyledInputEdit {...register("country", formValidations.countryValidations)} />
                <span>
                    <StyledSubmit type='submit' value='Aceptar' />
                </span>
            </StyledForm>
            {formState.errors && (
                <StyledErrorDisplay>
                    {Object.values(formState.errors).map((elem, i) => <small className="error-message" key={`error-${elem.type}-${i}`}>{elem.message}</small>)}
                </StyledErrorDisplay>
            )}
        </>
    )
}

export default UserEdit