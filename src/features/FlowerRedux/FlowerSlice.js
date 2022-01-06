import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';

//fethcing flower data from database
export const GetFlowers = createAsyncThunk(
  'flowers/getflower',
  async () => {
    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/getflowers').then(res=> res.json())
    return  response
  }
)

//fethcing flower data by from database for ordernowe details
export const GetFlowerByid = createAsyncThunk(
  'flowers/getflowerbyid',
  async (id) => {
    
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/getflowerbyid/${id}`).then(res=> res.json())
    return  response
  }
)

//posting flower data to database
export const PostFlower = createAsyncThunk(
  'flowers/postflower',
  async (fd) => {
    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/flowerpost',{
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
    
    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/cartpost',{
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
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/getcart?email=${email}`).then(res=> res.json())
    return  response
  }
)

//Clearing cart data by specificemail
export     const ClearCart = createAsyncThunk(
  'flowers/clearcart',
  async (email) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/clearcart?email=${email}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    return  response
  }
)

//geting payment cart data by specificemail
export const GetPymentdata= createAsyncThunk(
  'flowers/getpymentdata',
  async (email) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/getpaymentdata?email=${email}`).then(res=> res.json())
    return  response
  }
)

//geting payment status data by specificemail
export const GetPymentstatus= createAsyncThunk(
  'flowers/getPymentstatus',
  async (email) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/getpaymetstatus?email=${email}`).then(res=> res.json())
    return  response
  }
)

//deleting cart item by id
export const DeleteCartItem= createAsyncThunk(
  'flowers/deletecartitems',
  async (id) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/deletecartitem?id=${id}`,{
      method: 'DELETE'
    }).then(res=> res.json())
    return  response
  }
)

//making admin by email
export const MakingAdmin= createAsyncThunk(
  'flowers/makingadmin',
  async (email) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/makingadmin?email=${email}`,{
      method: 'PUT',
    }).then(res=> res.json())
    return  response
  }
)

//admin deleting flower
export const AdminDeleteFlower= createAsyncThunk(
  'flowers/adminDeleteFlower',
  async (id) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/admindeleteflower/${id}`,{
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
    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/getorders').then(res=> res.json())
    return  response
  }
)      

//getting ocassional flowers
export const OcassionalFlower = createAsyncThunk(
  'flowers/getOcassionalFlower',
  async (ocassion) => {
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/ocassionalflower?ocassion=${ocassion}`).then(res=> res.json())
    return  response
  }
)

//getting seasonal and category flowers
export const SeasonalCategory = createAsyncThunk(
  'flowers/seasonalcategory',
  async (season) => {
    console.log('hitted')
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/seasonalcategory?season=${season}`).then(res=> res.json())
    return  response
  }
)      
//getting GetFlowersLTSixty flowers
export const GetFlowersLTSixty = createAsyncThunk(
  'flowers/getFlowersLTSixty',
  async () => {
    console.log('hitted')
    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/getFlowersLTSixty').then(res=> res.json())
    return  response
  }
)
//posting happy moments
export const PostMoments = createAsyncThunk(
  'flowers/postMoments',
  async (fd) => {

    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/postMoments',{
      method: 'POST',
      body: fd
    }).then(res=> res.json())
    return  response
  }
)

//geting happy moments
export const GetMoments = createAsyncThunk(
  'flowers/getMoments',
  async () => {
      console.log('hitted')
    const response = await fetch('https://sheltered-beyond-34155.herokuapp.com/getMoments').then(res=> res.json())
    return  response;
   
  }
)
//geting happy moments
export const CancelOrder = createAsyncThunk(
  'flowers/cancelOrder',
  async (id) => {
      console.log('hitted')
    const response = await fetch(`https://sheltered-beyond-34155.herokuapp.com/CancelOrder/${id}`,{
      method: 'PUT'
    }).then(res=> res.json())
    return  response;
   
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
    ltsixty: [],
    moments: []
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
    builder.addCase(SeasonalCategory.fulfilled, (state, action) => {
      state.ocassions = action.payload
    })
    builder.addCase(GetFlowersLTSixty.fulfilled, (state, action) => {
      state.ltsixty = action.payload
    })
    builder.addCase(PostMoments.fulfilled, (state, action) => {
      Swal.fire(
        'Moments Posted SuccessFully',
        '',
        'success'
      )
    })
    builder.addCase(GetMoments.fulfilled, (state, action) => {
      state.moments = action.payload
    })
    builder.addCase(CancelOrder.fulfilled, (state, action) => {
      Swal.fire(
        'Order Cancel SuccessFully',
        '',
        'success'
      )
    })
  }
});

export const { increment, decrement, ClearCartData } = FlowerSlice.actions;

export default FlowerSlice.reducer;
