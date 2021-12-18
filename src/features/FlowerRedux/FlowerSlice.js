import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

//fethcing flower data from database
export const GetFlowers = createAsyncThunk(
  'flowers/getflower',
  async () => {

    const response = await fetch('http://localhost:5000/getflowers').then(res=> res.json())
    return  response
  }
)

//fethcing flower data by from database for ordernowe details
export const GetFlowerByid = createAsyncThunk(
  'flowers/getflowerbyid',
  async (id) => {
    
    const response = await fetch(`http://localhost:5000/getflowerbyid/${id}`).then(res=> res.json())
    return  response
  }
)

//posting flower data to database
export const PostFlower = createAsyncThunk(
  'flowers/postflower',
  async (fd) => {
    const response = await fetch('http://localhost:5000/flowerpost',{
      method: 'POST',
      body: fd 
    }).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });
    return response
  }
)

//adding cart data to database 
export const AddToCart = createAsyncThunk(
  'flowers/addtocartflower',
  async (data) => {
    
    const response = await fetch('http://localhost:5000/cartpost',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data) 
    }).then(res=> res.json()).catch(error => {
      Swal.fire(
          '!',
          'Error!',
          'error'
        )
  });

    return response
  }
)
//geting cart data by specificemail
export const GetCart = createAsyncThunk(
  'flowers/getcart',
  async (email) => {
    const response = await fetch(`http://localhost:5000/getcart?email=${email}`).then(res=> res.json())
    return  response
  }
)

//Clearing cart data by specificemail
export     const ClearCart = createAsyncThunk(
  'flowers/clearcart',
  async (email) => {
    const response = await fetch(`http://localhost:5000/clearcart?email=${email}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    return  response
  }
)

//geting payment cart data by specificemail
export const GetPymentdata= createAsyncThunk(
  'flowers/getpymentdata',
  async (email) => {
    const response = await fetch(`http://localhost:5000/getpaymentdata?email=${email}`).then(res=> res.json())
    return  response
  }
)

//geting payment status data by specificemail
export const GetPymentstatus= createAsyncThunk(
  'flowers/getPymentstatus',
  async (email) => {
    const response = await fetch(`http://localhost:5000/getpaymetstatus?email=${email}`).then(res=> res.json())
    return  response
  }
)

//deleting cart item by id
export const DeleteCartItem= createAsyncThunk(
  'flowers/deletecartitems',
  async (id) => {
    const response = await fetch(`http://localhost:5000/deletecartitem?id=${id}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    return  response
  }
)

//making admin by email
export const MakingAdmin= createAsyncThunk(
  'flowers/makingadmin',
  async (email) => {
    const response = await fetch(`http://localhost:5000/makingadmin?email=${email}`,{
      method: 'PUT',
    }).then(res=> res.json())
    return  response
  }
)

//admin deleting flower
export const AdminDeleteFlower= createAsyncThunk(
  'flowers/adminDeleteFlower',
  async (id) => {
    const response = await fetch(`http://localhost:5000/admindeleteflower/${id}`,{
      method: 'DELETE'
  })
  .then(res => res.json())
    return  response
  }
)

//admin getting all customer orders
export const GetOrders = createAsyncThunk(
  'flowers/getOrders',
  async () => {
    console.log('hitted')
    const response = await fetch('http://localhost:5000/getorders').then(res=> res.json())
    return  response
  }
)      

//getting ocassional flowers
export const OcassionalFlower = createAsyncThunk(
  'flowers/getOcassionalFlower',
  async (ocassion) => {
    console.log('hitted')
    const response = await fetch(`http://localhost:5000/ocassionalflower?ocassion=${ocassion}`).then(res=> res.json())
    return  response
  }
)      

export const FlowerSlice = createSlice({
  name: 'Flowers',
  initialState: { 
    allflowers : [],
    flowerbyid: {},
    orderfloweramount: 0,
    singletotal: 0,
    usercarts: [],
    paymentdata: [],
    paymentstatus: [],
    orders: [],
    ocassions: [],
  },
  reducers: {
    increment: (state, {payload}) => {
      state.orderfloweramount += 1;
      state.singletotal = payload * state.orderfloweramount;
     
    },
    decrement: (state, {payload}) => {
      if(state.orderfloweramount > 0)
      {
        state.orderfloweramount -= 1;
        state.singletotal = state.singletotal -  payload;
        
      }
    },
    ClearCartData: (state, {payload}) => {
      state.orderfloweramount = 0;
      state.singletotal = 0;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(GetFlowers.fulfilled, (state, action) => {
      state.allflowers = action.payload
    })
    builder.addCase(PostFlower.fulfilled, (state, action) => {
      Swal.fire(
        'Flower Added Succesfully',
        '',
        'success'
      )
    })
    builder.addCase(GetFlowerByid.fulfilled, (state, action) => {
      state.flowerbyid = {...action.payload}
    })
    builder.addCase(AddToCart.fulfilled, (state, action) => {
      Swal.fire(
        'Flower Added in Cart Succesfully',
        '',
        'success'
      )
    })
    builder.addCase(GetCart.fulfilled, (state, action) => {
      state.usercarts = action.payload
    })
    builder.addCase(ClearCart.fulfilled, (state, action) => {
      state.usercarts = []
    })
    builder.addCase(GetPymentdata.fulfilled, (state, action) => {
      state.paymentdata = action.payload
    })
    builder.addCase(GetPymentstatus.fulfilled, (state, action) => {
      state.paymentstatus = action.payload
    })
    builder.addCase(DeleteCartItem.fulfilled, (state, action) => {
      Swal.fire(
        'Deleted!',
        'Your CArt Item has been deleted.',
        'success'
      )
    })
    builder.addCase(MakingAdmin.fulfilled, (state, action) => {
      Swal.fire(
        'Admin Added Successfully',
        '',
        'success'
      )
    })
    builder.addCase(AdminDeleteFlower.fulfilled, (state, action) => {
      Swal.fire(
        'Deleted!',
        'Flower Data has been deleted.',
        'success'
      )
    })
    builder.addCase(GetOrders.fulfilled, (state, action) => {
      state.orders = action.payload
    })
    builder.addCase(OcassionalFlower.fulfilled, (state, action) => {
      state.ocassions = action.payload
    })
  }
});

export const { increment, decrement, ClearCartData } = FlowerSlice.actions;

export default FlowerSlice.reducer;
