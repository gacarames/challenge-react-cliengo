import React from 'react';
import Form from "../../components/Form";
import { StyledHeading } from "../../components/styledComponents";

const CreateUser = () => {

  return (
    <div className='centered'>
      <StyledHeading>
        Add new user
      </StyledHeading>
      <Form />
    </div>
  );
};

export default CreateUser;
