import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  users: [
    {
      name: 'Juan',
      email: 'arg@gmail.com',
      phone: '+543242343',
      country: 'AR'
    }
  ]
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
      prepare: value => {
        return {
          payload: {
            ...value,
            creationDate: new Date(),
            id: nanoid()
          }
        };
      }
    },
    deleteUser: {
      reducer: (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload.id);
      }
    },
    updateUser: {
      reducer: (state, action) => {
        let updateUsers = state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        });
        console.log('from updateUser:', action.payload);
        state.users = updateUsers;
      },
      prepare: value => {
        return {
          payload: {
            ...value,
            lastUpdate: new Date()
          }
        };
      }
    }
  }
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
